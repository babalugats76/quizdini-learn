import { reactive } from "vue";
import { default as matchConfig } from "./config";

export const state = reactive({
  canDnD: false,
  colorScheme: null,
  correct: 0,
  definitions: [],
  duration: 60,
  gameId: null,
  incorrect: 0,
  itemsPerBoard: 9,
  matches: [],
  playing: false,
  score: 0,
  showBoard: false,
  stats: [],
  terms: [],
  title: null,
});

export const config = matchConfig;

export const getters = {
  canDnD: () => state.canDnD,
  colorScheme: () => state.colorScheme,
  correct: () => state.correct,
  definitions: () => state.definitions,
  duration: () => state.duration,
  gameId: () => state.gameId,
  incorrect: () => state.incorrect,
  itemsPerBoard: () => state.itemsPerBoard,
  matches: () => state.matches,
  playing: () => state.playing,
  score: () => state.score,
  showBoard: () => state.showBoard,
  stats: () => state.stats,
  terms: () => state.terms,
  title: () => state.title,
  unmatchedDefinitions: () => state.definitions.filter((d) => d.show),
  unmatchedTerms: () => state.terms.filter((t) => t.show),
};

export const mutations = {
  setCanDnD: (val) => (state.canDnD = val),
  setColorScheme: (val) => (state.colorScheme = val),
  setCorrect: (val) => (state.correct = val),
  setDefinitions: (val) => (state.definitions = val),
  setDuration: (val) => (state.duration = val),
  setGameId: (val) => (state.gameId = val),
  setIncorrect: (val) => (state.incorrect = val),
  setItemsPerBoard: (val) => (state.itemsPerBoard = val),
  setMatches: (val) => (state.matches = val),
  setPlaying: (val) => (state.playing = val),
  setScore: (val) => (state.score = val),
  setShowBoard: (val) => (state.showBoard = val),
  setStats: (val) => (state.stats = val),
  setTerms: (val) => (state.terms = val),
  setTitle: (val) => (state.title = val),
};
