<template>
  <div class="match-game">
    <DndBoard
      :active="playing"
      :class="`match-board`"
      :config="config.board"
      v-on:drag="onDrag"
      v-on:over="onOver"
      v-on:drop="onDrop"
    >
      <Tile
        :active="false"
        content="Hello World!"
        :disabled="false"
        id="my-tile"
        is="Draggable"
        type="term"
      />
    </DndBoard>
    <Timer
      :active="playing"
      :config="config.timer"
      :duration="duration"
      :score="score"
      v-on:timer-expired="gameOver"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { config, state, getters, mutations } from "./store";
import { actions } from "./lib";

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
  setup() {
    return {
      config,
    };
  },
  computed: {
    ...getters,
  },
  methods: {
    ...mutations,
    ...actions,
  },
};
</script>

<style lang="scss" scoped>
.match-game {
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

.match-board {
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
</style>
