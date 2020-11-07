<template>
  <div class="match-game">
    <button v-on:click="setDuration(5)">Set Duration</button>
    <button v-on:click="setScore(1)">1</button>
    <button v-on:click="setScore(0)">0</button>
    <button v-on:click="setPlaying(true)">Set to Play</button>
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
import { fetchMatch } from "@/api/match";
import { config, state, getters, mutations } from "./store";
import { actions } from "./lib";

import Timer from "./Timer";

export default {
  name: "Match",
  components: {
    Timer,
  },
  data() {
    return {
      state: state,
      config: config,
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
    const response = await fetchMatch(this.matchId);
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
.full-page {
  height: 100%;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: purple;
}

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
</style>
