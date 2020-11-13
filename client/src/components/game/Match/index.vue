<template>
  <Game />
</template>
<script>
/* eslint-disable */
import { fetchMatch } from "@/api/match";
import { config, state, getters, mutations } from "./store";
import { actions } from "./lib";

import Game from "./Game";

export default {
  name: "Match",
  components: {
    Game,
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
      this.setPlaying(true);
      this.setCanDnd(true);
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
</style>
