<template>
  <div class="match-game">
    <button v-on:click="setDuration(5)">Set Duration</button>
    <button v-on:click="setScore(1)">1</button>
    <button v-on:click="setScore(0)">0</button>
    <div class="match-timer">
      <Timer />
    </div>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import matchService from "@/services/match";
import { state, getters, mutations } from "./store";
import { actions } from "./lib";

import Timer from "./Timer";

export default {
  name: "Match",
  components: {
    Timer,
  },
  data() {
    return {
      globalState: state,
    };
  },
  computed: {
    ...getters,
    matchId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mutations,
    ...actions,
  },
  async created() {
    console.log(this.matchId);
    const response = await matchService.fetch(this.matchId);
    this.load(response.data);
    this.deal();
    setTimeout(() => {
      this.shuffle();
      this.setCanDnD(true);
      this.setPlaying(true);
    }, 1000);
  },
};
</script>
<style scoped lang="scss">
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

.match-timer {
  position: fixed;
  width: 6em;
  height: 6em;
  bottom: 1em;
  right: 1em;
  z-index: 1000;
  user-select: none;
  pointer-events: none;
}
</style>
