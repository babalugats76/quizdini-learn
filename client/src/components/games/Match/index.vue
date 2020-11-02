<template>
  <pre>
 
     {{ JSON.stringify(sharedData, null, 4) }}
   </pre
  >
</template>
<script>
import matchService from "@/services/match";
import { state as store, actions, mutations } from "./store";

export default {
  name: "Match",
  data() {
    return { sharedData: store };
  },
  computed: {
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
    //console.log(JSON.stringify(response));
    const {
      matchId: gameId,
      matches = [],
      options: { duration = 60, colorScheme = "", itemsPerBoard = 9 } = {},
      title = "",
    } = response.data;

    this.setColorScheme(colorScheme);
    this.setDuration(duration);
    this.setGameId(gameId);
    this.setItemsPerBoard(itemsPerBoard);
    this.setMatches(matches);
    this.setTitle(title);
    this.deal();
  },
};
</script>
<style scoped>
</style>