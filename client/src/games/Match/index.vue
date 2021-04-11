<template>
  <layout-single-page v-if="showLoader" key="loader" primary>
    <game-loader />
  </layout-single-page>
  <game v-else key="game" :match="match" />
</template>
<script>
/* eslint-disable */
import { watchEffect, ref, unref } from "vue";
import { useRoute } from "vue-router";
import { getMatch } from "@api";
import { useLoader } from "@hooks";
import { default as config } from "./config";
import { GameLoader } from "@components/game";
import Game from "./Game";

export default {
  name: "Match",
  components: {
    Game,
    GameLoader,
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
    const { data: match, error, failed, initialized, loaded, loading } = useLoader({
      callback: getMatch(route.params.id),
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

<style scoped lang="scss"></style>
