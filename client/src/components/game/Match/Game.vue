<template>
  <button v-if="!playing && matches.length" @click="startGame">
    Start Game
  </button>
  <div class="match__game">
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
        :style="boardStyles('terms')"
        @after-leave="(el) => tileAfterLeave(el, 'term')"
      >
        <Tile
          v-for="t in activeTerms"
          :key="t.id"
          :id="t.id"
          :content="t.content"
          :class="[t.className]"
          :style="[t.style]"
          :active="t.className === 'drag'"
          :disabled="false"
          :color="t.color"
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
        :style="boardStyles('definitions')"
        @after-leave="(el) => tileAfterLeave(el, 'definition')"
      >
        <Tile
          v-for="d in activeDefinitions"
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
      ...useMatch(match),
    };
  },
  methods: {
    boardClasses(name) {
      return {
        "tile-board": true,
        [`tile-board--${name}`]: name,
        [`tile-board--${this.itemsPerBoard}`]: this.itemsPerBoard,
        [`tile-board--${this.colorScheme}`]: this.colorScheme,
        "tile-board--disabled": !this.playing,
      };
    },
    boardStyles(name) {
      return {
        ...(this.textScaling[name] && {
          "--text-scale-factor": `${this.textScaling[name]}`,
        }),
      };
    },
    tileAfterLeave(el, type) {
      this.config.game.debug && console.log(`${type} (${el.id}) leaving...`);
      this.playing && this.onTileLeft(el.id, type);
    },
  },
};
</script>

<style lang="scss">
$tile-margin: 0.5em;
$tile-board-padding: 1em;
$tile-colors: (
  "red": (
    "background": #e6194b,
    "color": #ffffff,
  ),
  "green": (
    "background": #3cb44b,
    "color": #ffffff,
  ),
  "yellow": (
    "background": #ffe119,
    "color": #444521,
  ),
  "blue": (
    "background": #4363d8,
    "color": #ffffff,
  ),
  "orange": (
    "background": #f58231,
    "color": #ffffff,
  ),
  "purple": (
    "background": #911eb4,
    "color": #ffffff,
  ),
  "light-blue": (
    "background": #46f0f0,
    "color": #444521,
  ),
  "fuchsia": (
    "background": #f032e6,
    "color": #ffffff,
  ),
  "lime": (
    "background": #bcf60c,
    "color": #444521,
  ),
  "pink": (
    "background": #fabebe,
    "color": #444521,
  ),
  "teal": (
    "background": #008080,
    "color": #ffffff,
  ),
  "mauve": (
    "background": #e6beff,
    "color": #444521,
  ),
  "brown": (
    "background": #9a6324,
    "color": #ffffff,
  ),
  "cream": (
    "background": #fffac8,
    "color": #444521,
  ),
  "maroon": (
    "background": #800000,
    "color": #ffffff,
  ),
  "apple": (
    "background": #aaffc3,
    "color": #444521,
  ),
  "olive": (
    "background": #808000,
    "color": #ffffff,
  ),
  "light-orange": (
    "background": #ffd8b1,
    "color": #444521,
  ),
  "navy": (
    "background": #000075,
    "color": #ffffff,
  ),
  "gray": (
    "background": #808080,
    "color": #ffffff,
  ),
  "zaffre": (
    "background": #001399,
    "color": #ffffff,
  ),
);

@keyframes drag {
  0% {
    --bg-opacity: 1;
    --text-opacity: 1;
  }

  25% {
    --bg-opacity: 0.94;
    --text-opacity: 0.92;
  }

  50% {
    --bg-opacity: 0.91;
    --text-opacity: 0.89;
  }

  75% {
    --bg-opacity: 0.88;
    --text-opacity: 0.86;
  }

  100% {
    --bg-opacity: 0.85;
    --text-opacity: 0.83;
  }
}

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

@keyframes miss {
  0% {
    --bg-opacity: 0.85;
    --text-opacity: 0.83;
  }

  25% {
    --bg-opacity: 0.88;
    --text-opacity: 0.86;
  }

  50% {
    --bg-opacity: 0.91;
    --text-opacity: 0.89;
  }

  75% {
    --bg-opacity: 0.94;
    --text-opacity: 0.92;
  }

  100% {
    --bg-opacity: 1;
    --text-opacity: 1;
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
  transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78) !important;
}

.match {
  &__game {
    --board-bg-color: turquoise;
    font-family: "Inter", sans-serif;
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
  $prefix: &;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.25em solid transparent;
  border-radius: 0.5em;
  line-height: 1.4;
  background-color: white;
  color: black;
  text-align: center;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  opacity: 1;
  @each $color, $values in $tile-colors {
    &.#{$color} {
      @include bgColor(lighten(map-get($values, "background"), 5%));
      @include textColor(map-get($values, "color"));
    }
    &.drag.#{$color} {
      @include bgColor(darken(map-get($values, "background"), 5%));
      @include textColor(map-get($values, "color"));
    }
  }
  &--term {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    letter-spacing: 0.0625rem;
    transition: color 200ms ease-in-out, opacity 500ms ease-in-out,
      border-color 200ms ease-in-out;
    opacity: 1;
    &.hit {
      animation-timing-function: cubic-bezier(0.45, 1.28, 0.39, 0.78);
      animation-name: hit;
      animation-duration: var(--hit-duration, 2s);
      animation-fill-mode: forwards;
      z-index: 3;
    }
    &:not(.drag) {
      --bg-opacity: 0.95;
      --text-opacity: 1;
    }
    &.drag {
      z-index: 500;
      border-color: white;
      opacity: 0.8;
    }
    &.miss {
      opacity: 1;
      transition: transform 800ms cubic-bezier(0.45, 1.28, 0.39, 0.78),
        color 200ms ease-in-out, opacity 500ms ease-in-out,
        border-color 200ms ease-in-out;
    }
  }
  &--definition {
    @include bgColor(#ffffff);
    @include textColor(lighten(#444521, 3));
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    letter-spacing: normal;
    font-size: 1em;
    opacity: 1;
    transition: color 200ms ease-in-out, opacity 500ms ease-in-out,
      border-color 200ms ease-in-out;

    &.over {
      @include textColor(darken(#444521, 10));
      @include borderColor(#e3b505);
    }
  }
  &__body {
    --clamp-lines: 1;
    width: 100%;
    font-size: 1em;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    @supports (-webkit-line-clamp: 1) {
      display: -webkit-box !important;
      -webkit-line-clamp: var(--clamp-lines, 1);
      -webkit-box-orient: vertical !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      word-break: normal !important;
      overflow-wrap: anywhere !important;
      hyphens: auto;
    }
  }
  &-board {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    width: 100%;
    padding: #{$tile-board-padding};
    margin: 0 auto;
    text-align: center;
    &--terms {
      background-color: #711cff;
    }
    &--definitions {
      background-color: #01e7e4;
    }
  }
}

@media screen and (max-width: 47.99em) {
  .match__game {
    // For browsers which don't support calc()
    font-size: 87.5%;
    font-size: calc(0.8125rem + ((1vw - 0.2em) * 0.2232));
  }
  .tile {
    height: 2.33em;
    min-width: 93px;
    max-width: calc(100vw - #{2 * $tile-margin});
    padding: 0.6em;
    margin: #{$tile-margin};
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em),
  screen and (min-width: 75em) {
  .tile {
    padding: 0.6em;
    margin: #{$tile-margin};
    &-board--4 .tile {
      // half the width of the container, minus margin and 1px (rounding)
      flex-basis: calc(100% / 2 - (1px + #{$tile-margin * 2}));
    }
    &-board--6 .tile {
      // third the width of the container, minus margin and 1px (rounding)
      flex-basis: calc(100% / 3 - (1px + #{$tile-margin * 2}));
    }
    &-board--9 .tile {
      // third the width of the container, minus margin and 1px (rounding)
      flex-basis: calc(100% / 3 - (1px + #{$tile-margin * 2}));
    }
    &__body {
      font-size: calc(1em * var(--text-scale-factor));
    }
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em) {
  .match__game {
    // For browsers which don't support calc()
    font-size: 95%;
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
    // quarter the height of the container, minus margin and 1px (rounding)
    &-board--4 .tile,
    &-board--6 .tile {
      height: calc(90vh / 4 - (1px + #{$tile-margin * 2}));
    }
    // sixth the height of the container, minus margin and 1px (rounding)
    &-board--9 .tile {
      height: calc(90vh / 6 - (1px + #{$tile-margin * 2}));
    }
  }
}

@media screen and (min-width: 75em) {
  .match {
    &__game {
      // For browsers which don't support calc()
      font-size: 110%;
      // 1em(16px) @ 75em(1200px) increasing to 2.5em(40px) @ 240em(3840px)
      font-size: calc(1rem + ((1vw - 0.75em) * 0.9091));
    }
    &__board {
      // 2 columns, i.e., 2 side-by-side boards
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  .tile {
    min-height: 9.33em;
    &-board {
      &:first-of-type {
        padding-left: #{$tile-board-padding};
      }
      &:last-of-type {
        padding-right: #{$tile-board-padding};
      }
    }
    &__body {
      --clamp-lines: 4;
    }
    // half the height of the container, minus margin and 1px (rounding)
    &-board--4 .tile,
    &-board--6 .tile {
      height: calc(90vh / 2 - (1px + #{$tile-margin * 2}));
    }
    // third the height of the container, minus margin and 1px (rounding)
    &-board--9 .tile {
      height: calc(90vh / 3 - (1px + #{$tile-margin * 2}));
    }
  }
}
</style>
