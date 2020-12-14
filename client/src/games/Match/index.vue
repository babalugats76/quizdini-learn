<template>
  <FullPage v-if="showLoader" key="loader" theme="primary">
    <Loader />
  </FullPage>
  <Game v-else key="game" :match="match" />
</template>
<script>
/* eslint-disable */
import { watchEffect, ref, unref } from "vue";
import { useRoute } from "vue-router";
import { fetchMatch } from "@/api/match";
import useLoader from "@/compose/useLoader";
import { default as config } from "./config";
import FullPage from "@/components/FullPage";
import Game from "./Game";
import Loader from "./Loader";

export default {
  name: "Match",
  components: {
    FullPage,
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

<style scoped lang="scss"></style>
