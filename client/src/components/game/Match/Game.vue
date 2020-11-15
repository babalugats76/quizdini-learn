<template>
  <div class="match__game">
    <button v-if="!playing" @click="startGame">Start Game</button>
    <DndBoard
      :active="canDnd"
      class="match__board"
      :config="config.board"
      v-on:drag="onDrag"
      v-on:over="onOver"
      v-on:drop="onDrop"
    >
      <transition-group
        :class="boardClasses('terms')"
        :css="true"
        :duration="{
          enter: `${config.tile.timeouts.enter}`,
          leave: `${config.tile.timeouts.leave}`,
        }"
        :move-class="shuffling ? 'slide' : 'no-move-list'"
        name="terms"
        tag="div"
        @after-leave="onTermLeft"
      >
        <Tile
          v-for="t in unmatchedTerms"
          :key="t.id"
          :id="t.id"
          :content="t.content"
          :class="[t.className]"
          :style="[t.style]"
          :active="
            t.className && t.className.split(' ').includes('drag')
              ? true
              : false
          "
          :disabled="false"
          is="Draggable"
          type="term"
        />
      </transition-group>
      <transition-group
        :class="boardClasses('definitions')"
        :css="true"
        :duration="{
          enter: `${config.tile.timeouts.enter}`,
          leave: `${config.tile.timeouts.leave}`,
        }"
        :move-class="shuffling ? 'slide' : 'no-move-list'"
        name="definitions"
        tag="div"
      >
        <Tile
          v-for="d in unmatchedDefinitions"
          :key="d.id"
          :id="d.id"
          :content="d.content"
          :class="[d.className]"
          :style="[d.style]"
          :active="false"
          :disabled="false"
          is="Droppable"
          type="definition"
        />
      </transition-group>
    </DndBoard>
    <Timer
      v-on:timer-expired="gameOver"
      class="match__timer"
      :active="playing"
      :config="config.timer"
      :duration="duration"
      :score="score"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { ref, toRefs } from "vue";
import { default as config } from "./config";
import useMatch from "./useMatch";
import DndBoard from "../DndBoard";
import Tile from "./Tile";
import Timer from "./Timer";

export default {
  name: "Game",
  components: {
    DndBoard,
    Tile,
    Timer,
  },
  props: ["match"],
  setup(props) {
    const { match } = toRefs(props);
    return {
      config,
      ...useMatch(match),
    };
  },
  methods: {
    boardClasses(type) {
      return {
        "tile-board": true,
        [`tile-board--${type}`]: type,
        [`tile-board--${this.itemsPerBoard}`]: this.itemsPerBoard,
        "tile-board--disabled": !this.playing,
      };
    },
    onTermLeft(el) {
      this.config.game.debug && console.log(`term  (${el.id}) leaving...`);
      this.incrementProgress();
    },
  },
  watch: {
    progress(newValue, oldValue) {
      if (
        Math.floor(oldValue / this.itemsPerBoard) !==
        Math.floor(newValue / this.itemsPerBoard)
      ) {
        // New Round
        console.log("new round...", oldValue, "=>", newValue);
        this.deal();
        this.shuffle();
      } else {
        this.shuffle();
      }
    },
  },
};
</script>

<style lang="scss">
@keyframes hit {
  0% {
    background-color: blue;
    transform: translate3d(
      var(--hit-start-tx),
      var(--hit-start-ty),
      var(--hit-start-tz)
    );
  }
  20% {
    background-color: yellow;
    color: black;
  }
  100% {
    background-color: green;
    color: white;
    transform: translate3d(
      var(--hit-end-tx),
      var(--hit-end-ty),
      var(--hit-end-tz)
    );
  }
}

/*.terms-leave-active {
  transform: scale(2, 2);
}*/

/* Used in the shuffle */
.no-move-list {
  transition: none !important;
}

.slide {
  /* transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78); */
  transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78);
}

.match {
  &__game {
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

  &__board {
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

  &__timer {
    position: fixed;
    width: 6em;
    height: 6em;
    bottom: 1em;
    right: 1em;
    z-index: 1000;
    user-select: none;
    pointer-events: none;
  }
}

.tile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  line-height: 1.4;
  font-weight: 300;
  background-color: white;
  color: black;
  text-align: center;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  opacity: 1;
  &--term {
    border: 0.2em solid transparent;
    background-color: blue;
    color: white;
    font-weight: 500;
    &.hit {
      animation-timing-function: cubic-bezier(0.45, 1.28, 0.39, 0.78);
      animation-name: hit;
      animation-duration: var(--hit-duration, 2s);
      animation-fill-mode: forwards;
      z-index: 3;
    }
    &.drag {
      transition: border-color 500ms ease-in-out;
      //   transform 33ms cubic-bezier(0, 0, 0.2, 1) !important;
      z-index: 500;
      border-color: white;
    }
    &.miss {
      transition: transform 800ms cubic-bezier(0.45, 1.28, 0.39, 0.78);
    }
  }
  &--definition {
    background-color: white;
    color: black;
    font-weight: 300;
    &.over {
      background-color: yellow;
    }
  }
  &__body {
    --clamp-lines: 1;
    width: 100%;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    @supports (-webkit-line-clamp: 1) {
      display: -webkit-box !important;
      -webkit-line-clamp: var(--clamp-lines, 1);
      -webkit-box-orient: vertical !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      word-break: normal !important;
      overflow-wrap: anywhere !important;
    }
  }
  &-board {
    --tile-board-padding: 0.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width: 100%;
    padding: var(--tile-board-padding);
    margin: 0 auto;
    text-align: center;
  }
}

@media screen and (max-width: 47.99em) {
  .match__game {
    font-size: 87.5%; /* For browsers which don't support calc() */
    font-size: calc(0.8125rem + ((1vw - 0.2em) * 0.2232));
  }
  .tile {
    --tile-margin: 0.3em;
    height: 2.33em;
    min-width: 93px;
    max-width: calc(100vw - 2 * var(--tile-margin));
    padding: 0.4em;
    margin: var(--tile-margin);
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em),
  screen and (min-width: 75em) {
  .tile {
    --tile-margin: 0.3em;
    padding: 0.6em;
    margin: var(--tile-margin);
    &-board--4 .tile {
      --tile-columns: 2;
      --tile-rows: 2;
      flex-basis: calc(
        100% / var(--tile-columns) - (1px + 2 * var(--tile-margin))
      );
    }
    &-board--6 .tile {
      --tile-columns: 3;
      --tile-rows: 2;
      flex-basis: calc(
        100% / var(--tile-columns) - (1px + 2 * var(--tile-margin))
      );
    }
    &-board--9 .tile {
      --tile-columns: 3;
      --tile-rows: 3;
      flex-basis: calc(
        100% / var(--tile-columns) - (1px + 2 * var(--tile-margin))
      );
    }
    &__body {
      font-size: 1.4em;
    }
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em) {
  .match__game {
    font-size: 95%; /* For browsers which don't support calc() */
    font-size: calc(0.875rem + 0.463vw - 0.22224em);
  }

  .tile {
    min-height: 4.67em;
    &-board {
      &:first-of-type {
        padding-bottom: 0;
      }
      &:last-of-type {
        padding-top: 0;
      }
    }
    &__body {
      --clamp-lines: 2;
    }
    &-board--4 .tile {
      height: calc((90vh - 3.6em) / 4);
    }
    &-board--6 .tile {
      /* (90% vh - (vert. cont. padding * 4) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
      height: calc((90vh - 3.6em) / 4);
    }
    &-board--9 .tile {
      /* (90% vh - (vert. cont. padding * 4) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
      height: calc((90vh - 4.4em) / 6);
    }
  }
}

@media screen and (min-width: 75em) {
  .match {
    &__game {
      font-size: 110%; /* For browsers which don't support calc() */
      /* 1em(16px) @ 75em(1200px) increasing to 2.5em(40px) @ 240em(3840px) */
      font-size: calc(1rem + ((1vw - 0.75em) * 0.9091));
    }
    &__board {
      /* 2 columns, i.e., 2 side-by-side boards */
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  .tile {
    min-height: 9.33em;
    &-board {
      &:first-of-type {
        padding-left: calc(var(--tile-board-padding) * 2);
      }
      &:last-of-type {
        padding-right: calc(var(--tile-board-padding) * 2);
      }
    }
    &__body {
      --clamp-lines: 4;
    }
    &-board--4 .tile {
      /* (90% vh - (vert. cont. padding * 2) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
      height: calc((90vh - 1.8em) / 2);
    }
    &-board--6 .tile {
      /* (90% vh - (vert. cont. padding * 2) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
      height: calc((90vh - 1.8em) / 2);
    }
    &-board--9 .tile {
      /* (90% vh - (vert. cont. padding * 2) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
      height: calc((90vh - 2.2em) / 3);
    }
  }
}
</style>
