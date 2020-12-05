<template>
  <transition :duration="250" mode="out-in" name="match">
    <div class="page page--full page--purple">
      <Loader key="1" v-if="showLoader" />
      <Game key="2" v-else :match="match" />
    </div>
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
.match-enter-active,
.match-enter-from {
  opacity: 0;
  transition: opacity 250ms ease-in-out;
}

.match-enter-to {
  opacity: 1;
}

.match-leave-active,
.match-leave-from {
  opacity: 1;
  transition: opacity 250ms ease-in-out;
}

.match-leave-to {
  opacity: 0;
}

.page--full {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.page--purple {
  background-color: purple;
}

/*.full-page {
  height: 100%;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: purple;
}*/
</style>
