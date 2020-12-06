<template>
  <div v-if="showLoader" key="loader" class="page page--full page--purple">
    <Loader />
  </div>
  <Game v-else key="game" :match="match" />
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
.page {
  &--full {
    position: relative;
    height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  &--purple {
    background-color: purple;
  }
}
</style>
