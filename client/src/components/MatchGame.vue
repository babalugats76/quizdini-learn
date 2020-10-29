<template>
  <transition
    appear
    :duration="{ enter: 1000, leave: 1000 }"
    enter-active-class="fade-in-active"
    enter-class="fade-in-start"
    enter-to-class="fade-in-end"
    leave-active-class="fade-out-active"
    leave-class="fade-out-start"
    leave-to-class="fade-out-end"
    :css="true"
    @after-enter="onGameEnter"
    @after-leave="onGameLeave"
  >
    <div id="match-game">
      <div id="match-timer">
        <MatchTimer
          :playing="playing"
          :duration="duration"
          :interval-ms="100"
          :score="score"
          v-on:timer-expired="onTimerExpired"
        />
      </div>
      <DnD
        id="match-dnd-board"
        :disabled="inTransition"
        :playing="playing"
        :throttle-ms="throttleMs"
        v-on:drag="onDrag"
        v-on:over="onOver"
        v-on:drop="onDrop"
      >
        <MatchTileBoard
          componentName="Draggable"
          id="terms"
          tile-type="term"
          :disabled="inTransition"
          :duration="{ enter: 800, leave: 0 }"
          :playing="playing"
          :tiles="terms"
          :tile-count="itemsPerBoard"
        />
        <MatchTileBoard
          componentName="Droppable"
          id="definitions"
          tile-type="definition"
          :disabled="inTransition"
          :duration="{ enter: 800, leave: 0 }"
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
import { addColor, shuffleArray } from "./utils";
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
    duration: {
      type: Number,
      required: true,
      default: 60,
    },
    hitDurationMs: {
      type: Number,
      required: false,
      default: 800,
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
    maxFps: {
      type: Number,
      required: false,
      default: 30,
    },
    shuffleDurationMs: {
      type: Number,
      required: false,
      default: 500,
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
    rounds() {
      return Math.floor(this.correct / this.itemsPerBoard); // calculate completed rounds
    },
    throttleMs() {
      return Math.round(1000 / this.maxFps);
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
      this.playing = true;
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
      const { answer } = this.terms.find((term) => term.id === dragId) || {};
      const { content: question } =
        this.definitions.find((def) => def.id === dropId) || {};
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
        //   "transform " + this.throttleMs + "ms cubic-bezier(0, 0, 0.2, 1)",
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
      const dnd = { id: null, x: null, y: null }; // useful for safe, nested destructuring
      const { id: dragId, x: dragX, y: dragY } = payload.drag || dnd;
      const { id: dropId, x: dropX, y: dropY } = payload.drop || dnd;

      const showById = (id, show) => (v) => {
        v.show = v.id === id ? show : v.show;
        return v;
      };

      const matchTerm = (id, matched, className, style) => (term) => {
        if (term.id === id) {
          term.matched = matched;
          term.className = className;
          term.style = style;
        }
        return term;
      };

      const matchDef = (id, matched, className) => (def) => {
        if (def.id === id) {
          def.matched = matched;
          def.className = className;
        }
        return def;
      };

      const updateStat = (term, matched) => (stat) => {
        if (stat.term === term) {
          return {
            term: term,
            hit: matched ? stat.hit + 1 : stat.hit,
            miss: matched ? stat.miss : stat.miss + 1,
          };
        }
        return stat;
      };

      const matched = dropId ? this.isMatch(dragId, dropId) : false;
      this.terms = this.terms.map(
        matchTerm(
          dragId,
          matched,
          matched ? "hit" : "miss",
          matched
            ? this.hitStyle(
                dragX,
                dragY,
                1,
                dropX,
                dropY,
                1,
                this.hitDurationMs
              )
            : this.missStyle(0, 0, 0)
        )
      );

      if (!dropId) {
        return;
      }

      this.definitions = this.definitions.map(
        matchDef(dropId, matched, matched ? "hit" : "miss")
      );

      const { content: term } =
        this.terms.find((term) => term.id === dragId) || {};
      this.score = Math.max(matched ? this.score + 1 : this.score - 1, 0);

      const stat = this.stats.filter((stat) => stat.term === term); // lookup dropped term's stats
      this.stats = stat.length
        ? this.stats.map(updateStat(term, matched))
        : this.stats.concat({
            term,
            hit: matched ? 1 : 0,
            miss: matched ? 0 : 1,
          });

      if (matched) {
        this.inTransition = true;
        setTimeout(() => {
          this.terms = this.terms.map(showById(dragId, false));
          this.definitions = this.definitions.map(showById(dropId, false));
          this.terms = shuffleArray(this.terms);
          this.definitions = shuffleArray(this.definitions);
          this.correct++;
          setTimeout(() => {
            this.inTransition = false;
          }, this.shuffleDurationMs);
        }, this.hitDurationMs);
      } else {
        this.incorrect++;
      }
    },
    onGameEnter() {
      console.log("game entered...");
      this.deal();
      this.playing = true;
    },
    onGameLeave() {
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
        console.log("game over logic goes here...");
        this.$emit("game-over");
        /* send "results" payload upstream - should be something like 
        [ { "correct": 0,
            "incorrect": 0,
            "data": [{"term": "yo", "hit": 1, "miss": 0}],
            "score": 23
           }
        ] 
        */
      }, 2000);
    },
    togglePlaying() {
      this.playing = !this.playing;
    },
    translate(x, y, z) {
      return {
        transform: "translate3d(" + x + "px, " + y + "px, " + z + "px)",
      };
    },
  },
  watch: {
    rounds() {
      console.log("dealing new round...");
      this.deal();
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