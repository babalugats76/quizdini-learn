<template>
  <div class="match-game">
    <Board
      :active="playing"
      :config="config.board"
      v-on:drag="onDrag"
      v-on:over="onOver"
      v-on:drop="onDrop"
    />
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

import { Board } from "@/components/dndnew/";
import Timer from "./Timer";

export default {
  name: "Game",
  components: {
    Board,
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

.board {
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
