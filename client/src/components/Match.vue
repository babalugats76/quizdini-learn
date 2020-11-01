<template>
  <div class="full-page full-page--match">
    <MatchGame
      :color-scheme="colorScheme"
      :duration="duration"
      :items-per-board="itemsPerBoard"
      :matches="matches"
      :config="config"
      v-if="showBoard"
      v-on:game-over="onGameOver"
    />

    <!--<Modal v-else :visible="true" v-on:modal-close="modalClose">
      <h1>Hello World</h1>
    </Modal> -->
  </div>
</template>

<script>
import axios from "axios";

/*import { Modal } from "@/components/ui";*/
import MatchGame from "./MatchGame";

axios.defaults.headers.get["Content-Type"] = "application/json";

axios.defaults.headers.common[
  "quizdini-timezone"
] = Intl.DateTimeFormat().resolvedOptions().timeZone;

const CONFIG = {
  dnd: {
    throttleMs: 33.33,
  },
  game: {
    enterMs: 1000,
    leaveMs: 1000,
  },
  tile: {
    enterMs: 800,
    hitMs: 800,
    leaveMs: 0,
    missMs: 800,
  },
  timer: {
    intervalMs: 100,
    changeMs: 250,
    enterMs: 1000,
    leaveMs: 1000,
  },
};

export default {
  name: "Match",
  components: {
    MatchGame,
  },
  data() {
    return {
      colorScheme: "",
      correct: 0,
      definitions: [],
      duration: 60,
      gameId: null,
      itemsPerBoard: 0,
      matches: [],
      showBoard: false,
      showSplash: true,
      title: "",
    };
  },
  computed: {
    config() {
      return CONFIG;
    },
    game: {
      get() {
        return {
          colorScheme: this.colorScheme,
          duration: this.duration,
          gameId: this.gameId,
          itemsPerBoard: this.itemsPerBoard,
          matches: this.matches,
          title: this.title,
        };
      },
      set(newVal) {
        const {
          matchId: gameId,
          matches = [],
          options: { duration = 60, colorScheme = "", itemsPerBoard = 9 } = {},
          title = "",
        } = newVal;

        this.colorScheme = colorScheme;
        this.duration = duration;
        this.gameId = gameId;
        this.itemsPerBoard = itemsPerBoard;
        this.matches = matches;
        this.title = title;
      },
    },
    matchId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchMatch() {
      // API GET
      try {
        const res = await axios.get("/api/match/" + this.matchId, {
          timeout: 10000,
        });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async postPing(data) {
      try {
        const res = await axios.post("/api/ping", data, {
          timeout: 10000,
        });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async onGameOver(payload) {
      console.log("on game over...");
      this.showBoard = false;
      const ping = await this.postPing({
        gameId: this.matchId,
        gameType: "M",
        results: payload,
      });
      console.log(JSON.stringify(ping));
      setTimeout(() => {
        this.showBoard = true;
      }, 5000);
    },
  },
  async created() {
    const game = await this.fetchMatch(); // fetch
    this.game = game; // set and transform
    this.showBoard = true;
    // this.showSplash = false;
  },
  mounted() {
    console.log(this.$options.name, "mounted...");
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
