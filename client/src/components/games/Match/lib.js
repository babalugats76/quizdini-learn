import { reactive } from "vue";
import shortid from "shortid";
//import { shuffleArray } from '../utils';
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
  score: 0,
  stats: [],
  terms: [],
  title: null,
});

export const canDnD = () => state.canDnD;
export const colorScheme = () => state.colorScheme;
export const config = () => matchConfig;
export const correct = () => state.correct;
export const definitions = () => state.definitions;
export const duration = () => state.duration;
export const gameId = () => state.gameId;
export const incorrect = () => state.incorrect;
export const itemsPerBoard = () => state.itemsPerBoard;
export const matches = () => state.matches;
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
export const setScore = (val) => (state.score = val);
export const setStats = (val) => (state.stats = val);
export const setTerms = (val) => (state.terms = val);
export const setTitle = (val) => (state.title = val);

export const getters = {
  canDnD,
  colorScheme,
  config,
  correct,
  definitions,
  duration,
  gameId,
  incorrect,
  itemsPerBoard,
  matches,
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
  setScore,
  setStats,
  setTerms,
  setTitle,
};

/**
 * Shuffles arrays of objects, etc.
 *
 * @param {Array} array  array to shuffle
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const hitStyle = (startX, startY, startZ, endX, endY, endZ, duration) => ({
  "--hit-start-tx": startX + "px",
  "--hit-start-ty": startY + "px",
  "--hit-start-tz": startZ + "px",
  "--hit-end-tx": endX + "px",
  "--hit-end-ty": endY + "px",
  "--hit-end-tz": endZ + "px",
  "--hit-duration": duration + "ms",
  //  zIndex: 3,
});

const missStyle = (x, y, z) => ({
  ...this.translate(x, y, z),
  // transition: "transform 600ms cubic-bezier(0.45, 1.28, 0.39, 0.78)",
  // zIndex: 2,
});

const load = (data) => {
  console.log("loading data...");
  const {
    matchId: gameId,
    matches = [],
    options: { duration = 60, colorScheme = "", itemsPerBoard = 9 } = {},
    title = "",
  } = data;

  state.colorScheme = colorScheme;
  state.duration = duration;
  state.gameId = gameId;
  state.itemsPerBoard = itemsPerBoard;
  state.matches = matches;
  state.title = title;
};

const deal = () => {
  console.log("dealing...");

  /* Shuffle all */
  const shuffled = shuffleArray(state.matches);

  /* Pick # of items needed, e.g., itemsPerBoard  */
  const sliced = shuffled.slice(
    0,
    Math.min(state.itemsPerBoard, shuffled.length)
  );

  /* Add additional properties (used in game) */
  let matches = sliced.map((m) => ({
    ...m,
    matched: false,
    show: true,
  }));

  /* Generate terms; add id; map properties; shuffle */
  let terms = shuffleArray(
    matches.map((m) => {
      const { term, definition, ...rest } = m; // destructure
      return {
        ...rest,
        content: term,
        answer: definition,
        id: shortid.generate(), // key
      };
    })
  );

  /* Clone definitons (from terms) */
  let defs = [...matches];

  /* Modify definitions; add id, map/exclude properties */
  defs = defs.map((d) => {
    // eslint-disable-next-line no-unused-vars
    const { term, definition, ...rest } = d; // destructure
    return {
      // map and drop term
      ...rest,
      content: definition,
      id: shortid.generate(), // key
    };
  });

  /* Add Color (terms only) */
  //terms = addColor(terms, state.colorScheme); // add colors (terms only)

  state.terms = terms;
  state.definitions = defs; // only necessary to reshuffle 1/2
};

const shuffle = () => {
  console.log("shuffling...");
  state.terms = shuffleArray(state.terms);
  state.definitions = shuffleArray(state.definitions);
};

const isMatch = (termId, defId) => {
  const { answer } = state.terms.find((t) => t.id === termId) || {};
  const { content: question } =
    state.definitions.find((d) => d.id === defId) || {};
  return !!answer && !!question && answer === question;
};

const drop = (payload) => {
  const dnd = { id: null, x: null, y: null }; // useful for safe, nested destructuring
  const { id: dragId, x: dragX, y: dragY } = payload.drag || dnd;
  const { id: dropId, x: dropX, y: dropY } = payload.drop || dnd;

  const matched = dropId ? isMatch(dragId, dropId) : false;

  state.terms = state.terms.map((t) => {
    if (t.id === dragId) {
      t.matched = matched;
      t.className = matched ? "hit" : "miss";
      t.style = matched
        ? hitStyle(dragX, dragY, 1, dropX, dropY, 1, config.tile.hitMs)
        : missStyle(0, 0, 0);
    }
    return t;
  });

  if (!dropId) {
    return;
  }

  state.definitions = state.definitions.map((d) => {
    if (d.id === dropId) {
      d.matched = matched;
      d.className = matched ? "hit" : "";
    }
    return d;
  });

  const { content: term } = state.terms.find((t) => t.id === dragId) || {};

  state.score = Math.max(matched ? state.score + 1 : state.score - 1, 0);

  const statExists = state.stats.filter((s) => s.term === term).length; // lookup dropped term's stats
  state.stats = statExists
    ? state.stats.map((s) => {
        if (s.term === term) {
          return {
            term: term,
            hit: matched ? s.hit + 1 : s.hit,
            miss: matched ? s.miss : s.miss + 1,
          };
        }
        return s;
      })
    : state.stats.concat({
        term,
        hit: matched ? 1 : 0,
        miss: matched ? 0 : 1,
      });
};

export const actions = {
  load,
  deal,
  shuffle,
  drop,
  isMatch,
};
