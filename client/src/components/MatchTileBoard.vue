<template>
  <transition-group
    appear
    tag="div"
    :id="id"
    :class="[classes]"
    :duration="{ enter: `${enterMs}`, leave: `${leaveMs}` }"
    :css="true"
    enter-class="fade-in-start"
    enter-active-class="fade-in-active"
    enter-to-class="fade-in-end"
    :move-class="transitionGroup"
    @after-enter="onEntered"
    @leave="onLeft"
  >
    <component
      :is="componentName"
      v-for="tile in filteredTiles"
      :key="tile.id"
      :content="tile.content"
      :disabled="disabled"
      :id="tile.id"
      :style="[tile.style]"
      :class="[tileClasses, tileType, tile.className]"
    />
  </transition-group>
</template>

<script>
import Draggable from "./Draggable";
import Droppable from "./Droppable";

export default {
  name: "MatchTileBoard",
  components: {
    Draggable,
    Droppable,
  },
  props: [
    "componentName",
    "disabled",
    "duration",
    "enterMs",
    "id",
    "leaveMs",
    "playing",
    "tiles",
    "tileType",
    "tileCount",
  ],
  computed: {
    transitionGroup() {
      return !this.disabled ? "no-move-list" : "slide";
    },
    classes() {
      return {
        "tile-board": true,
        "tile-board--match": true,
        "tile-board--disabled": !this.playing,
        [`tiles-${this.tileCount}`]: this.tileCount,
      };
    },
    filteredTiles() {
      return this.tiles.filter((t) => t.show);
    },
    tileClasses() {
      return {
        tile: true,
        draggable: this.componentName === "Draggable",
        droppable: this.componentName === "Droppable",
        disabled: this.disabled,
      };
    },
  },
  methods: {
    onEntered() {
      console.log("entered!");
    },
    onLeft(el) {
      console.log("left!");
      el.style.display = "none";
    },
  },
};
</script>

<style scoped lang="scss">
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

/* Used in the shuffle */
.no-move-list {
  transition: none !important;
}

.slide {
  /* transition: transform 500ms cubic-bezier(0.45, 1.28, 0.39, 0.78); */
  transition: transform 500ms cubic-bezier(0.75, 0.25, 0.17, 0.95);
}

.tile-board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center; /* vertical smoosh */
  justify-content: center; /* horizontal smoosh */
  width: 100%;
  padding: 0.5em;
  margin: 0 auto;
  text-align: center;
  &--disabled {
    .draggable {
      opacity: 0.8;
    }
  }
  .tile {
    position: relative;
    flex: 0 0 auto;
    align-items: center;
    justify-items: center;
    border-radius: 0.2em;
    background-color: white;
    color: black;
    font-weight: 300;
    user-select: none;
    touch-action: none;
    opacity: 1;

    &.fade-in-active {
      opacity: 0;
      transition: opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.fade-in-start {
      opacity: 0;
    }

    &.fade-in-end {
      opacity: 1;
    }

    &.term {
      border: 0.2em solid transparent;
      background-color: blue;
      color: white;
      font-weight: 500;
      &.drag {
        transition: border-color 500ms ease-in-out,
          transform 33ms cubic-bezier(0, 0, 0.2, 1) !important;
        // transform 33ms cubic-bezier(0, 0, 0.2, 1) !important;
        z-index: 500;
        border-color: white;
      }
      &.hit {
        animation-timing-function: cubic-bezier(0.45, 1.28, 0.39, 0.78);
        animation-name: hit;
        animation-duration: var(--hit-duration, 2s);
        animation-fill-mode: forwards;
        z-index: 3;
      }
      &.miss {
        transition: transform 800ms cubic-bezier(0.45, 1.28, 0.39, 0.78);
        z-index: 2;
      }
    }
    &.definition {
      background-color: white;
      color: black;
      font-weight: 300;
      &.over {
        background-color: yellow;
      }
    }
  }
}

@media screen and (max-width: 47.99em) {
  .tile-board .tile {
    height: 2.33em;
    min-width: 93px;
    max-width: calc(100vw - 0.6em);
    padding: 0.4em;
    border-radius: 0.5em;
    margin: 0.3em;
    line-height: 1.4;
    text-align: center;
    overflow: hidden;
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em),
  screen and (min-width: 75em) {
  .tile-board {
    padding: 0.5em;
  }

  .tile-board .tile {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 4.67em;
    padding: 0.6em;
    border-radius: 0.5em;
    margin: 0.2em;
    line-height: 1.4;
    text-align: center;
    overflow: hidden;
  }
}

@media screen and (max-width: 74.99em) and (min-width: 48em) {
  .tile-board.tiles-4 .tile {
    /* (100% parent - (hor. cont. padding * 2) - ((tile hor. margin * 2) * tiles per row) / tiles per row) */
    flex-basis: calc((100% - 1.8em) / 2);
    /* (90% vh - (vert. cont. padding * 4) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
    height: calc((90vh - 3.6em) / 4);
  }

  .tile-board.tiles-6 .tile {
    /* (100% parent - (hor. cont. padding * 2) - ((tile hor. margin * 2) * tiles per row) / tiles per row) */
    flex-basis: calc((100% - 2.2em) / 3);
    /* (90% vh - (vert. cont. padding * 4) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
    height: calc((90vh - 3.6em) / 4);
  }

  .tile-board.tiles-9 .tile {
    /* (100% parent - (hor. cont. padding * 2) - ((tile hor. margin * 2) * tiles per row) / tiles per row) */
    flex-basis: calc((100% - 2.2em) / 3);
    /* (90% vh - (vert. cont. padding * 4) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
    height: calc((90vh - 4.4em) / 6);
  }
}

@media screen and (min-width: 75em) {
  .tile-board.tiles-4 .tile {
    /* (100% parent - (hor. cont. padding * 2) - ((tile hor. margin * 2) * tiles per row) / tiles per row) */
    flex-basis: calc((100% - 1.8em) / 2);
    /* (90% vh - (vert. cont. padding * 2) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
    height: calc((90vh - 1.8em) / 2);
  }

  .tile-board.tiles-6 .tile {
    /* (100% parent - (hor. cont. padding * 2) - ((tile hor. margin * 2) * tiles per row) / tiles per row) */
    flex-basis: calc((100% - 2.2em) / 3);
    /* (90% vh - (vert. cont. padding * 2) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
    height: calc((90vh - 1.8em) / 2);
  }

  .tile-board.tiles-9 .tile {
    /* (100% parent - (hor. cont. padding * 2) - ((tile hor. margin * 2) * tiles per row) / tiles per row) */
    flex-basis: calc((100% - 2.2em) / 3);
    /* (90% vh - (vert. cont. padding * 2) - ((tile vert. margin * 2) * tiles per col) / tiles per col) */
    height: calc((90vh - 2.2em) / 3);
  }
}
</style>
