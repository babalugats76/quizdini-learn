<template>
  <transition
    appear
    :css="true"
    :duration="{
      enter: `${config.game.enterMs}`,
      leave: `${config.game.leaveMs}`,
    }"
    enter-active-class="fade-in-active"
    enter-class="fade-in-start"
    enter-to-class="fade-in-end"
    leave-active-class="fade-out-active"
    leave-class="fade-out-start"
    leave-to-class="fade-out-end"
    @after-enter="onEntered"
    @after-leave="onLeft"
  >
    <div id="match-game">
      <div id="match-timer">
        <MatchTimer
          :change-ms="config.timer.changeMs"
          :duration="duration"
          :enter-ms="config.timer.enterMs"
          :interval-ms="config.timer.intervalMs"
          :leave-ms="config.timer.leaveMs"
          :playing="playing"
          :score="score"
          v-on:timer-expired="onTimerExpired"
        />
      </div>
      <DnD
        id="match-dnd-board"
        :disabled="inTransition"
        :playing="playing"
        :throttle-ms="config.dnd.throttleMs"
        v-on:drag="onDrag"
        v-on:over="onOver"
        v-on:drop="onDrop"
      >
        <MatchTileBoard
          componentName="Draggable"
          id="terms"
          tile-type="term"
          :disabled="inTransition"
          :enter-ms="config.tile.enterMs"
          :leave-ms="config.tile.leaveMs"
          :playing="playing"
          :tiles="terms"
          :tile-count="itemsPerBoard"
        />
        <MatchTileBoard
          componentName="Droppable"
          id="definitions"
          tile-type="definition"
          :disabled="inTransition"
          :enter-ms="config.tile.enterMs"
          :leave-ms="config.tile.leaveMs"
          :playing="playing"
          :tiles="definitions"
          :tile-count="itemsPerBoard"
        />
      </DnD>
    </div>
  </transition>
</template>

<script>
import shortid from "shortid";
import { addColor, shuffleArray, updateObjInArray, upsertArray } from "./utils";
import DnD from "./DnD";
import MatchTileBoard from "./MatchTileBoard";
import MatchTimer from "./MatchTimer";

export default {
  name: "MatchGame",
  components: {
    DnD,
    MatchTileBoard,
    MatchTimer,
  },
  props: {
    colorScheme: {
      type: String,
      required: false,
      default: "rainbow",
    },
    config: {
      type: Object,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 60,
    },
    itemsPerBoard: {
      type: Number,
      required: true,
      default: 9,
    },
    matches: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      correct: 0,
      definitions: [],
      incorrect: 0,
      playing: false,
      score: 0,
      stats: [],
      terms: [],
      transitioning: false,
    };
  },
  computed: {
    inTransition: {
      get() {
        return this.transitioning;
      },
      set(newVal) {
        this.transitioning = newVal;
      },
    },
    progress() {
      // think of as rounds (fractional) completed
      return this.correct / this.itemsPerBoard;
    },
  },
  methods: {
    deal() {
      console.log("dealing...");
      // shuffle all possible matches
      const shuffled = shuffleArray(this.matches);
      // select just the number needed for the game round (based on itemsPerBoard)
      const sliced = shuffled.slice(
        0,
        Math.min(this.itemsPerBoard, shuffled.length)
      );

      // add match common properties
      let matches = sliced.map((match) => ({
        ...match,
        matched: false,
        show: true,
      }));

      // add additional properties; perform mapping
      let terms = matches.map((match) => {
        const { term, definition, ...rest } = match; // destructure
        return {
          ...rest,
          content: term,
          answer: definition,
          id: shortid.generate(), // key for draggable
        };
      });

      terms = addColor(terms, this.colorScheme); // add colors (terms only)
      this.terms = shuffleArray(terms); // shuffle terms

      // clone definitons (from terms)
      let defs = [...matches];

      // add additional properties; perform mapping
      defs = defs.map((match) => {
        // eslint-disable-next-line no-unused-vars
        const { term, definition, ...rest } = match; // destructure
        return {
          ...rest,
          content: definition,
          id: shortid.generate(), // key for droppable
        };
      });
      this.definitions = shuffleArray(defs); // Shuffle definitions
    },
    hitStyle(startX, startY, startZ, endX, endY, endZ, duration) {
      return {
        "--hit-start-tx": startX + "px",
        "--hit-start-ty": startY + "px",
        "--hit-start-tz": startZ + "px",
        "--hit-end-tx": endX + "px",
        "--hit-end-ty": endY + "px",
        "--hit-end-tz": endZ + "px",
        "--hit-duration": duration + "ms",
        //  zIndex: 3,
      };
    },
    isMatch: function (dragId, dropId) {
      const uid = (id) => (el) => el.id === id;
      const { answer } = this.terms.find(uid(dragId)) || {};
      const { content: question } = this.definitions.find(uid(dropId)) || {};
      return !!answer && !!question && answer === question;
    },
    missStyle(x, y, z) {
      return {
        ...this.translate(x, y, z),
        // transition: "transform 600ms cubic-bezier(0.45, 1.28, 0.39, 0.78)",
        // zIndex: 2,
      };
    },
    moveStyle(x, y, z) {
      return {
        ...this.translate(x, y, z),
        //  transition:
        //   "transform " + this.timouts.dnd.throttle + "ms cubic-bezier(0, 0, 0.2, 1)",
        //  zIndex: 500,
      };
    },
    onDrag(payload) {
      const { dragId, dragX, dragY } = payload;
      this.terms = this.terms.map((term) => {
        term.style =
          term.id === dragId ? this.moveStyle(dragX, dragY, 1) : term.style;
        term.className = term.id === dragId ? "drag" : term.className;
        return term;
      });
    },
    onDrop(payload) {
      const { dragId, dragX, dragY, dropId, dropX, dropY } = payload || {};
      const matched = dropId ? this.isMatch(dragId, dropId) : false;

      this.terms = updateObjInArray(this.terms, {
        id: dragId,
        matched: matched,
        className: matched ? "hit" : "miss",
        style: matched
          ? this.hitStyle(
              dragX,
              dragY,
              1,
              dropX,
              dropY,
              1,
              this.config.tile.hitMs
            )
          : this.missStyle(0, 0, 0),
      });

      if (!dropId) {
        return;
      }

      this.definitions = updateObjInArray(this.definitions, {
        id: dropId,
        className: matched ? "hit" : "",
        ...(matched && { matched: true }),
      });

      this.score = Math.max(matched ? this.score + 1 : this.score - 1, 0);
      const { content: term } = this.terms.find((t) => t.id === dragId) || {};

      this.stats = upsertArray(this.stats, { term }, "term", (s) =>
        s
          ? {
              term: term,
              hit: matched ? s.hit + 1 : s.hit,
              miss: matched ? s.miss : s.miss + 1,
            }
          : { term: term, hit: matched ? 1 : 0, miss: matched ? 0 : 1 }
      );

      if (matched) {
        this.inTransition = true;
        setTimeout(() => {
          this.terms = updateObjInArray(this.terms, {
            id: dragId,
            show: false,
          });

          this.definitions = updateObjInArray(this.definitions, {
            id: dropId,
            show: false,
          });

          this.correct++;
          this.inTransition = false;
        }, this.config.tile.hitMs);
      } else {
        this.incorrect++;
      }
    },
    onEntered() {
      console.log("game entered...");
      this.deal();
      this.playing = true;
    },
    onLeft() {
      console.log("game left....");
      /* fire game over, transfer stats */
    },
    onOver(payload) {
      const { dropId } = payload;
      this.definitions = this.definitions.map((def) => {
        def.className = def.id === dropId && !def.matched ? "over" : "";
        return def;
      });
    },
    onTimerExpired() {
      console.log("timer expired...");
      this.playing = false;
      setTimeout(() => {
        this.$emit("game-over", {
          correct: this.correct,
          incorrect: this.incorrect,
          data: this.stats,
          score: this.score,
        });
      }, 2000);
    },
    translate(x, y, z) {
      return {
        transform: "translate3d(" + x + "px, " + y + "px, " + z + "px)",
      };
    },
  },
  watch: {
    progress(newVal, oldVal) {
      if (oldVal && Math.floor(newVal) !== Math.floor(oldVal)) {
        // New Round
        console.log("new round...", oldVal, "vs", newVal);
        this.deal();
        this.playing = true;
      } else {
        // Terms remain (shuffle)
        console.log("shuffling...");
        this.inTransition = true;
        this.terms = shuffleArray(this.terms);
        this.definitions = shuffleArray(this.definitions);
        setTimeout(() => {
          this.inTransition = false;
        }, this.config.tile.shuffleMs);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.fade-in-active {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-start {
  opacity: 0;
}

.fade-in-end {
  opacity: 1;
}

.fade-out-active {
  opacity: 1;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-out-start {
  opacity: 1;
}

.fade-out-end {
  opacity: 0;
}

#match-game {
  --board-bg-color: turquoise;
  display: grid;
  grid-area: auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
  /*max-width: 1920px;*/
  margin: 0 auto;
  padding: 0;
  overflow: auto;
}

#match-dnd-board {
  display: grid;
  grid-area: auto;
  /* 1 column */
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: var(--board-bg-color);
  opacity: 1;
}

#match-timer {
  position: fixed;
  width: 6em;
  height: 6em;
  bottom: 1em;
  right: 1em;
  z-index: 1000;
  user-select: none;
  pointer-events: none;
}

@media screen and (max-width: 47.99em) {
  #match-game {
    font-size: 87.5%; /* For browsers which don't support calc() */
    font-size: calc(0.8125rem + ((1vw - 0.2em) * 0.2232));
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em) {
  #match-game {
    font-size: 95%; /* For browsers which don't support calc() */
    font-size: calc(0.875rem + 0.463vw - 0.22224em);
  }
}

@media screen and (min-width: 75em) {
  #match-game {
    font-size: 110%; /* For browsers which don't support calc() */
    /* 1em(16px) @ 75em(1200px) increasing to 2.5em(40px) @ 240em(3840px) */
    font-size: calc(1rem + ((1vw - 0.75em) * 0.9091));
  }

  #match-dnd-board {
    /* 2 columns, i.e., 2 side-by-side boards */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
}
</style>
