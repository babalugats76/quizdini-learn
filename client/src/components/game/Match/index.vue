<template>
  <Game :match="match" />
</template>
<script>
/* eslint-disable */
import { fetchMatch } from "@/api/match";
import { default as config } from "./config";
//import { actions } from "./lib";

import Game from "./Game";

export default {
  name: "Match",
  components: {
    Game,
  },
  computed: {
    //...getters,
    matchId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      match: {},
    };
  },
  methods: {
    //  ...mutations,
    //  ...actions,
  },
  async created() {
    const response = await fetchMatch(this.matchId);
    this.match = response.data;
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
