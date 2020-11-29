<template>
  <transition mode="out-in" name="match-transition">
    <Loader key="1" v-if="showLoader" />
    <Game key="2" v-else :match="match" />
  </transition>
</template>
<script>
/* eslint-disable */
import { watchEffect, ref, unref } from "vue";
import { useRoute } from "vue-router";
import { fetchMatch } from "@/api/match";
import useLoader from "@/compose/useLoader";
import { default as config } from "./config";
//import { actions } from "./lib";

import Game from "./Game";
import Loader from "./Loader";

export default {
  name: "Match",
  components: {
    Game,
    Loader,
  },
  computed: {
    matchId() {
      const { matchId = null } = this.match || {};
      return matchId;
      // return this.$route.params.id;
    },
  },
  setup() {
    const x = ref("");
    const route = useRoute();
    const {
      data: match,
      error,
      inError,
      initialized,
      loading,
      success,
    } = useLoader({
      callback: fetchMatch(route.params.id),
      immediate: true,
      deps: [() => route.params],
    });
    return {
      x,
      match,
      showLoader: loading,
    };
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
