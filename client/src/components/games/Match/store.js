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
  stats: [],
  terms: [],
  title: null,
});

export const config = matchConfig;

export const canDnD = () => state.canDnD;
export const colorScheme = () => state.colorScheme;
export const correct = () => state.correct;
export const definitions = () => state.definitions;
export const duration = () => state.duration;
export const gameId = () => state.gameId;
export const incorrect = () => state.incorrect;
export const itemsPerBoard = () => state.itemsPerBoard;
export const matches = () => state.matches;
export const playing = () => state.playing;
export const score = () => state.score;
export const stats = () => state.stats;
export const terms = () => state.terms;
export const title = () => state.title;

export const setCanDnD = (val) => (state.canDnD = val);
export const setColorScheme = (val) => (state.colorScheme = val);
export const setCorrect = (val) => (state.correct = val);
export const setDefinitions = (val) => (state.definitions = val);
export const setDuration = (val) => (state.duration = val);
export const setGameId = (val) => (state.gameId = val);
export const setIncorrect = (val) => (state.incorrect = val);
export const setItemsPerBoard = (val) => (state.itemsPerBoard = val);
export const setMatches = (val) => (state.matches = val);
export const setPlaying = (val) => (state.playing = val);
export const setScore = (val) => (state.score = val);
export const setStats = (val) => (state.stats = val);
export const setTerms = (val) => (state.terms = val);
export const setTitle = (val) => (state.title = val);

export const getters = {
  canDnD,
  colorScheme,
  correct,
  definitions,
  duration,
  gameId,
  incorrect,
  itemsPerBoard,
  matches,
  playing,
  score,
  stats,
  terms,
  title,
};

export const mutations = {
  setCanDnD,
  setColorScheme,
  setCorrect,
  setDefinitions,
  setDuration,
  setGameId,
  setIncorrect,
  setItemsPerBoard,
  setMatches,
  setPlaying,
  setScore,
  setStats,
  setTerms,
  setTitle,
};
