<template>
  <div class="p-4">
    <ul>
      <li v-for="g in games" :key="g.id">
        <router-link
          class="game-link game-link--match"
          :to="{ name: 'match', params: { id: g.id } }"
        >
          {{ g.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
//import { default as MatchGame } from "./Game";
axios.defaults.headers.get["Content-Type"] = "application/json";

axios.defaults.headers.common[
  "quizdini-timezone"
] = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default {
  name: "Matches",
  /*components: {
    MatchGame,
  },*/
  data() {
    return {
      games: [],
    };
  },
  methods: {
    async fetchData() {
      // API GET
      try {
        const res = await axios.get(
          "/api/matches/",
          {
            timeout: 30000,
          }
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    const data = await this.fetchData();
    const games = data.map((g) => {
      return { id: g.matchId, title: g.title };
    });
    this.games = games;
  },
};
</script>

<style scoped>
a:visited {
  color: red;
  text-decoration: underline;
}

.game-link:active,
.game-link:hover {
  color: purple;
  font-weight: bold;
  text-decoration: underline;
}
</style>