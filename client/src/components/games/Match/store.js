import { reactive } from 'vue';
//import axios from 'axios';
import shortid from 'shortid';
import { shuffleArray } from '../utils';

export const state = reactive({
  debug: true,
  colorScheme: null,
  correct: 0,
  definitions: [],
  duration: 60,
  gameId: null,
  incorrect: 0,
  itemsPerBoard: 9,
  matches: [],
  score: 0,
  terms: [],
  title: null,
});

export const colorScheme = () => state.colorScheme;
export const correct = () => state.correct;
export const definitions = () => state.definitions;
export const duration = () => state.duration;
export const gameId = () => state.gameId;
export const incorrect = () => state.incorrect;
export const itemsPerBoard = () => state.itemsPerBoard;
export const matches = () => state.matches;
export const score = () => state.score;
export const terms = () => state.terms;
export const title = () => state.title;

export const setColorScheme = (val) => (state.colorScheme = val);
export const setCorrect = (val) => (state.correct = val);
export const setDefinitions = (val) => (state.definitions = val);
export const setDuration = (val) => (state.duration = val);
export const setGameId = (val) => (state.gameId = val);
export const setIncorrect = (val) => (state.incorrect = val);
export const setItemsPerBoard = (val) => (state.itemsPerBoard = val);
export const setMatches = (val) => (state.matches = val);
export const setScore = (val) => (state.score = val);
export const setTerms = (val) => (state.terms = val);
export const setTitle = (val) => (state.title = val);

export const getters = {
  colorScheme: colorScheme,
  correct: correct,
  definitions: definitions,
  duration: duration,
  gameId: gameId,
  incorrect: incorrect,
  itemsPerBoard: itemsPerBoard,
  matches: matches,
  score: score,
  terms: terms,
  title: title,
};

export const mutations = {
  setColorScheme: setColorScheme,
  setCorrect: setCorrect,
  setDefinitions: setDefinitions,
  setDuration: setDuration,
  setGameId: setGameId,
  setIncorrect: setIncorrect,
  setItemsPerBoard: setItemsPerBoard,
  setMatches: setMatches,
  setScore: setScore,
  setTerms: setTerms,
  setTitle: setTitle,
};

const deal = () => {
  state.debug && console.log('dealing...');

  /* Shuffle all */
  const shuffled = shuffleArray(state.matches);

  /* Pick # of items needed, e.g., itemsPerBoard  */
  const sliced = shuffled.slice(
    0,
    Math.min(state.itemsPerBoard, shuffled.length)
  );

  /* Add additional properties (used in game) */
  let matches = sliced.map((match) => ({
    ...match,
    matched: false,
    show: true,
  }));

  /* Generate terms; add id, map properties */
  let terms = matches.map((match) => {
    const { term, definition, ...rest } = match; // destructure
    return {
      ...rest,
      content: term,
      answer: definition,
      id: shortid.generate(), // key
    };
  });

  /* Clone definitons (from terms) */
  let defs = [...matches];

  /* Modify definitions; add id, map/exclude properties */
  defs = defs.map((match) => {
    // eslint-disable-next-line no-unused-vars
    const { term, definition, ...rest } = match; // destructure
    return {
      // map and drop term
      ...rest,
      content: definition,
      id: shortid.generate(), // key
    };
  });

  /* Add Color (terms only) */
  //terms = addColor(terms, state.colorScheme); // add colors (terms only)

  /* Shuffle */
  state.terms = shuffleArray(terms);
  state.definitions = shuffleArray(defs);
  state.debug && console.log(JSON.stringify(state.terms));
  state.debug && console.log(JSON.stringify(state.definitions));
};

export const actions = {
  deal: deal,

  /*fetchMatch = async (id) => {
    try {
      const res = await axios.get("/api/match/" + id, {
        timeout: 10000,
      });
      const {
        matchId: gameId,
        matches = [],
        options: { duration = 60, colorScheme = "", itemsPerBoard = 9 } = {},
        title = "",
      } = res.data || {} ;

      mutations.setColorScheme(colorScheme);
      mutations.setDuration(duration);
      mutations.setGameId(gameId);
      mutations.setItemsPerBoard(itemsPerBoard);
      mutations.setMatches(matches);
      mutations.setTitle(title);

    } catch (error) {
      // add store-based error stuff?
      console.log(error);
    }
  },*/
};
