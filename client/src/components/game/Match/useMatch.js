/* eslint-disable */
import {
  computed,
  reactive,
  toRefs,
  watch,
  isRef,
  onMounted,
  unref,
} from "vue";
import shortid from "shortid";
import { shuffleArray, updateObjInArray, upsertArray } from "@/utils/common";
import { default as config } from "./config";
import useTimeout from "@/compose/useTimeout";

export default function useMatch(data, debug = true) {
  const [, wrapInTimeout] = useTimeout();

  const state = reactive({
    canDnd: computed(
      () => state.playing && !state.shuffling && !state.inTransition
    ),
    correct: 0,
    colorScheme: "",
    definitions: [],
    duration: 60,
    incorrect: 0,
    inTransition: false,
    itemsPerBoard: 9,
    matches: [],
    matchId: "",
    playing: false,
    progress: 0,
    score: 0,
    showBoard: false,
    showSplash: false,
    shuffling: false,
    stats: [],
    terms: [],
    title: "",
    unmatchedDefinitions: computed(() =>
      state.definitions.filter((d) => d.show)
    ),
    unmatchedTerms: computed(() => state.terms.filter((t) => t.show)),
  });

  function translate3d(x, y, z) {
    return { transform: "translate3d(" + x + "px, " + y + "px, " + z + "px)" };
  }
  function hitStyle(startX, startY, startZ, endX, endY, endZ, duration) {
    return {
      "--hit-start-tx": startX + "px",
      "--hit-start-ty": startY + "px",
      "--hit-start-tz": startZ + "px",
      "--hit-end-tx": endX + "px",
      "--hit-end-ty": endY + "px",
      "--hit-end-tz": endZ + "px",
      "--hit-duration": duration + "ms",
      //  zIndex: 3,
    };
  }

  function isMatch(termId, defId) {
    const { answer } = state.terms.find((t) => t.id === termId) || {};
    const { content: question } =
      state.definitions.find((d) => d.id === defId) || {};
    return !!answer && !!question && answer === question;
  }

  function onDrag(payload) {
    const { dragId, dragX, dragY } = payload || {};
    state.terms = updateObjInArray(state.terms, {
      id: dragId,
      style: translate3d(dragX, dragY, 1),
      className: "drag",
    });
  }
  function onDrop(payload) {
    const { dragId, dragX, dragY, dropId, dropX, dropY } = payload || {};
    const matched = dropId ? isMatch(dragId, dropId) : false;

    state.terms = updateObjInArray(state.terms, {
      id: dragId,
      matched: matched,
      className: matched ? "hit" : "miss",
      ...(matched && { matchId: dropId }),
      style: matched
        ? hitStyle(dragX, dragY, 1, dropX, dropY, 1, config.tile.timeouts.hit)
        : translate3d(0, 0, 0),
    });

    if (!dropId) {
      return;
    }

    state.definitions = updateObjInArray(state.definitions, {
      id: dropId,
      className: matched ? "hit" : "",
      ...(matched && { matched: true, matchId: dragId }),
    });

    const { content: term } = state.terms.find((t) => t.id === dragId) || {};
    state.score = Math.max(matched ? state.score + 1 : state.score - 1, 0);
    state.stats = upsertArray(state.stats, { term }, "term", (s) =>
      s
        ? {
            term: term,
            hit: matched ? s.hit + 1 : s.hit,
            miss: matched ? s.miss : s.miss + 1,
          }
        : { term: term, hit: matched ? 1 : 0, miss: matched ? 0 : 1 }
    );

    if (matched) {
      state.inTransition = true;
      wrapInTimeout(config.tile.timeouts.hit, () => {
        state.terms = updateObjInArray(state.terms, {
          id: dragId,
          show: false,
        });

        state.definitions = updateObjInArray(state.definitions, {
          id: dropId,
          show: false,
        });
      });
    }
  }
  function onOver(payload) {
    const { dropId } = payload || {};
    state.definitions = state.definitions.map((d) => ({
      ...d,
      className: d.id === dropId && !d.matched ? "over" : "",
    }));
  }
  function deal() {
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
  }

  function shuffle() {
    console.log("shuffling...");
    state.shuffling = true;
    state.terms = shuffleArray(state.terms);
    state.definitions = shuffleArray(state.definitions);

    wrapInTimeout(config.tile.timeouts.shuffle, () => {
      state.shuffling = false;
      state.inTransition = false;
    });
  }

  function startGame() {
    deal();
    wrapInTimeout(1000, () => {
      state.correct = 0;
      state.incorrect = 0;
      state.stats = [];
      state.progress = 0;
      state.playing = true;
      state.inTransition = false;
    });
  }

  function gameOver() {
    console.log("game over...");
    state.playing = false;
    state.showBoard = false;
  }

  watch(data, (newValue, oldValue) => {
    debug &&
      console.log(
        "data changed: ",
        JSON.stringify(oldValue),
        "=>",
        JSON.stringify(newValue)
      );
    const {
      matchId,
      matches = [],
      options: { duration = 60, colorScheme = "", itemsPerBoard = 9 } = {},
      title = "",
    } = newValue;

    state.colorScheme = colorScheme;
    state.duration = duration;
    state.matchId = matchId;
    state.itemsPerBoard = itemsPerBoard;
    state.matches = matches;
    state.title = title;
  });

  const incrementProgress = () => state.progress++;

  const setInTransition = (val) => (state.inTransition = val);

  return {
    ...toRefs(state),
    deal,
    shuffle,
    onDrag,
    onDrop,
    onOver,
    startGame,
    gameOver,
    incrementProgress,
    setInTransition,
  };
}
