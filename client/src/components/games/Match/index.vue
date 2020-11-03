<template>
  <pre>
     {{ JSON.stringify(globalState, null, 4) }}
   </pre
  >
</template>
<script>
import matchService from "@/services/match";
import { state, actions, getters, mutations } from "./lib";

export default {
  name: "Match",
  data() {
    return { globalState: state };
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
    }, 1000);
  },
};
</script>
<style scoped></style>
