<template>
  <transition name="game" :duration="500">
    <app-full-page primary>
      <game-splash
        class="match__splash"
        :author="author"
        :config="config.splash"
        :showModal="showSplash"
        :title="title"
        @close="toggleSplash"
        @exited="startGame"
      >
        <template v-slot:details>
          <splash-details
            v-if="!stats.length"
            :items="[
              { id: 'duration', icon: 'watch', content: `${duration} seconds` },
              {
                id: 'items-per-board',
                icon: 'grid',
                content: `${itemsPerBoard} per board`,
              },
              {
                id: 'term-count',
                icon: 'archive',
                content: `${matches.length} terms`,
              },
            ]"
          />
          <splash-details
            v-else
            :items="[
              { id: 'duration', icon: 'watch', content: `${correct} correct` },
              {
                id: 'items-per-board',
                icon: 'grid',
                content: `${incorrect} incorrect`,
              },
              {
                id: 'term-count',
                icon: 'archive',
                content: `${score} score`,
              },
            ]"
          />
        </template>
      </game-splash>
      <div class="match__game">
        <!--<button @click.prevent="togglePlaying">Toggle Playing</button>-->
        <dnd-board
          class="match__board"
          :active="canDnd"
          :config="config.board"
          @drag="onDrag"
          @over="onOver"
          @drop="onDrop"
        >
          <transition-group
            name="terms"
            tag="div"
            :class="boardClasses('terms')"
            :css="true"
            :duration="{
              enter: `${config.tile.timeouts.enter}`,
              leave: `${config.tile.timeouts.leave}`,
            }"
            :move-class="shuffling ? 'slide' : 'no-move-list'"
            :style="boardStyles('terms')"
            @after-leave="(el) => tileAfterLeave(el, 'term')"
          >
            <Tile
              is="drag-item"
              v-for="t in activeTerms"
              :id="t.id"
              :key="t.id"
              :content="t.content"
              :style="[t.style]"
              :active="t.dragging"
              :disabled="false"
              :color="t.color"
              :dragging="t.dragging"
              :hasHtml="t.hasHtml"
              :hit="t.hit"
              :length="t.length"
              :maxWordLength="t.maxWordLength"
              :miss="t.miss"
              :over="t.over"
              type="term"
              data-type="term"
            />
          </transition-group>
          <transition-group
            name="definitions"
            tag="div"
            :class="boardClasses('definitions')"
            :css="true"
            :duration="{
              enter: `${config.tile.timeouts.enter}`,
              leave: `${config.tile.timeouts.leave}`,
            }"
            :move-class="shuffling ? 'slide' : 'no-move-list'"
            :style="boardStyles('definitions')"
            @after-leave="(el) => tileAfterLeave(el, 'definition')"
          >
            <Tile
              is="drop-item"
              v-for="d in activeDefinitions"
              :id="d.id"
              :key="d.id"
              :content="d.content"
              :style="[d.style]"
              :active="false"
              :disabled="false"
              :hasHtml="d.hasHtml"
              :hit="d.hit"
              :length="d.length"
              :maxWordLength="d.maxWordLength"
              :miss="d.miss"
              :over="d.over"
              type="definition"
              data-type="definition"
            />
          </transition-group>
        </dnd-board>
        <Timer
          class="match__timer"
          :active="playing"
          :config="config.timer"
          :duration="duration"
          :score="score"
          @timer-expired="gameOver"
        />
      </div>
    </app-full-page>
  </transition>
</template>

<script>
/* eslint-disable */
import { ref, toRefs } from "vue";
import useMatch from "./useMatch";
import AppFullPage from "@/components/AppFullPage";
import Tile from "./Tile";
import Timer from "./Timer";

import { DndBoard, GameSplash, UiList, UiListItem } from "@/components/";

const SplashDetails = ({ items, ...rest }) => (
  <UiList {...rest}>
    {items.map((item) => {
      const { content, id, ...rest } = item;
      return (
        <UiListItem dense key={id} id={id} {...rest}>
          {content}
        </UiListItem>
      );
    })}
  </UiList>
);

export default {
  name: "Game",
  components: {
    AppFullPage,
    DndBoard,
    GameSplash,
    SplashDetails,
    Tile,
    Timer,
  },
  props: ["match"],
  setup(props) {
    const { match } = toRefs(props);
    console.log(typeof match);
    return {
      ...useMatch(match),
    };
  },
  methods: {
    beforeEnter() {
      this.debug && console.log("game transition before entered...");
    },
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
      this.onTileExited(el.id, type);
    },
  },
};
</script>

<style lang="scss">
.game-enter-active,
.game-enter-from {
  opacity: 0;
  transition: opacity 500ms ease-in-out;
}

.game-enter-to {
  opacity: 1;
}

.game-leave-active,
.game-leave-from {
  opacity: 1;
  transition: opacity 500ms ease-in-out;
}

.game-leave-to {
  opacity: 0;
}

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
    "color": #3f3d31,
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
    "color": #3f3d31,
  ),
  "fuchsia": (
    "background": #f032e6,
    "color": #ffffff,
  ),
  "lime": (
    "background": #bcf60c,
    "color": #3f3d31,
  ),
  "pink": (
    "background": #fabebe,
    "color": #3f3d31,
  ),
  "teal": (
    "background": #008080,
    "color": #ffffff,
  ),
  "mauve": (
    "background": #e6beff,
    "color": #3f3d31,
  ),
  "brown": (
    "background": #9a6324,
    "color": #ffffff,
  ),
  "cream": (
    "background": #fffac8,
    "color": #3f3d31,
  ),
  "maroon": (
    "background": #800000,
    "color": #ffffff,
  ),
  "apple": (
    "background": #aaffc3,
    "color": #3f3d31,
  ),
  "olive": (
    "background": #808000,
    "color": #ffffff,
  ),
  "light-orange": (
    "background": #ffd8b1,
    "color": #3f3d31,
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

@keyframes hit {
  from {
    --bg-opacity: 1;
    --text-opacity: 1;
    --border-opacity: 1;
    background-color: var(--bg-start-color);
    color: var(--text-start-color);
    transform: translate3d(
      var(--hit-start-tx),
      var(--hit-start-ty),
      var(--hit-start-tz)
    );
  }
  to {
    background-color: var(--bg-end-color);
    color: var(--text-end-color);
    transform: translate3d(
      var(--hit-end-tx),
      var(--hit-end-ty),
      var(--hit-end-tz)
    );
  }
}

.definitions-leave-active {
  opacity: 1 !important;
}

.definitions-leave-from {
  opacity: 1 !important;
}

.definitions-leave-to {
  opacity: 0 !important;
}

/* Used in the shuffle */
.no-move-list {
  transition: none !important;
}

.slide {
  /* transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78); */
  /*transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78) !important; */
  transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78) !important;
}

.match {
  &__game {
    --board-bg-color: #01e7e4;
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
  overflow: visible;
  user-select: none;
  touch-action: none;
  opacity: 1;
  transition: filter 300ms ease, background-color 300ms ease,
    color 300ms ease-in-out, opacity 300ms ease, border-color 300ms ease;
  @each $color, $values in $tile-colors {
    &.#{$color} {
      @include bgColor(lighten(map-get($values, "background"), 5%));
      @include textColor(map-get($values, "color"));
    }
  }
  &::after {
    content: " ";
    position: absolute;
    top: -0.25em;
    left: -0.25em;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.25em solid transparent;
    border-radius: 0.5em;
    opacity: 0;
    z-index: auto;
    box-shadow: 0px 1px 4px 0px transparent, inset 0px 0px 0px 1px transparent;
    transition: all 150ms ease;
  }
  &--term {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    letter-spacing: 0.0625rem;
    opacity: 1;
    &.miss {
      opacity: 1;
      transition: transform 800ms cubic-bezier(0.45, 1.28, 0.39, 0.78),
        background-color 150ms ease, color 150ms ease, filter 150ms ease,
        opacity 150ms ease, border-color 150ms ease;
    }
    &.hit {
      --bg-end-color: #00cc00;
      --bg-start-color: #ccff33;
      --text-start-color: #fdfdfd;
      --text-end-color: #ffffff;
      opacity: 1;
      animation-timing-function: cubic-bezier(0.45, 1.28, 0.39, 0.78);
      animation-name: hit;
      animation-duration: var(--hit-duration, 2s);
      animation-fill-mode: forwards;
      z-index: 3;
      &.terms-leave-active,
      &.terms-leave-from {
        opacity: 1;
        transition: opacity 500ms ease;
      }
      &.terms-leave-to {
        opacity: 0;
      }
    }
    &.drag {
      z-index: 500;
      @include borderColor(#fdfdfd, 0.9);
      --bg-opacity: 0.97;
      &::after {
        opacity: 1;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1),
          inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
      }
    }
    &.over {
      --bg-opacity: 0.87;
    }
    &.terms-leave-active,
    &.terms-leave-from {
      opacity: 1;
      transition: opacity 500ms ease 500ms;
    }
    &.terms-leave-to {
      opacity: 0;
    }
  }
  &--definition {
    @include bgColor(#ffffff);
    @include textColor(#515328);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    letter-spacing: normal;
    font-size: 1em;
    opacity: 1;
    transition: background-color 150ms ease, color 150ms ease, filter 150ms ease,
      opacity 150ms ease, border-color 150ms ease;
    &.over {
      @include textColor(darken(#515328, 2%));
      @include borderColor(#ccff33, 1);
      animation: border-fade 300ms cubic-bezier(0.39, 2.01, 0.27, 0.75) 0ms
        infinite alternate-reverse;
      &::after {
        opacity: 1;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1),
          inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
      }
    }
    &.definitions-leave-active,
    &.definitions-leave-from {
      opacity: 1;
      transition: opacity 500ms ease 500ms;
    }
    &.definitions-leave-to {
      opacity: 0;
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
      -webkit-hyphens: auto;
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
      background-color: rgb(113, 28, 255);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
    &--definitions {
      background-color: #01e7e4;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
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
    &__body--has-long-word {
      font-size: calc(1em * var(--text-scale-factor) * 0.85);
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
