/* eslint-disable */
import { computed, nextTick, toRefs, reactive, ref, watch } from "vue";
import shortid from "shortid";
import { shuffleArray, updateObjInArray, upsertArray } from "@/utils/common";
import { default as config } from "./config";
import useTimeout from "@/compose/useTimeout";

export default function useMatch(data, debug = true) {
  const [, hideMatch] = useTimeout(
    config.tile.timeouts.hit,
    (dragId, dropId) => () => {
      state.terms = updateObjInArray(state.terms, {
        id: dragId,
        show: false,
      });

      state.definitions = updateObjInArray(state.definitions, {
        id: dropId,
        show: false,
      });
    }
  );
  const [, endShuffle] = useTimeout(config.tile.timeouts.shuffle, () => {
    state.shuffling = false;
  });
  const matchedCount = ref(0);

  const state = reactive({
    activeDefinitions: computed(() => state.definitions.filter((d) => d.show)),
    activeTerms: computed(() => state.terms.filter((t) => t.show)),
    canDnd: computed(
      () => state.playing && !state.shuffling && !state.termIsExiting
    ),
    correct: 0,
    colorScheme: "",
    definitions: [],
    duration: 60,
    incorrect: 0,
    itemsPerBoard: 9,
    matches: [],
    matchId: "",
    playing: false,
    score: 0,
    showBoard: false,
    showSplash: false,
    shuffling: false,
    stats: [],
    termIsExiting: computed(() => {
      return !!state.terms.filter((t) => t.matched && !t.exited).length;
    }),
    terms: [],
    textScaling: { terms: 1, definitions: 1 },
    title: "",
  });

  function addColor(array = [], colorScheme = "") {
    const { [colorScheme.toLowerCase()]: theme = "" } = config.game.themes;
    if (!theme)
      return array.map((i) => ({
        ...i,
        color: config.game.themes.default.colors[0],
      }));
    let colors = shuffleArray(theme.colors.slice());
    return array.map((i) => {
      const c = colors.pop();
      return { ...i, color: c };
    });
  }

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

  function onOver(payload) {
    const { overId } = payload || {};
    state.definitions = state.definitions.map((d) => ({
      ...d,
      className: d.id === overId && !d.matched ? "over" : "",
    }));
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

    if (!dropId) return;

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

    matched && hideMatch(dragId, dropId);
  }

  function onTileLeft(id, type) {
    switch (type) {
      case "term":
        state.terms = updateObjInArray(state.terms, {
          id,
          exited: true,
        });
        state.playing && matchedCount.value++;
        break;
      case "definition":
        state.definitions = updateObjInArray(state.definitions, {
          id,
          exited: true,
        });
        break;
      default:
        return;
    }
  }

  function analyzeMatches(matches) {
    const parse = (parser, encoded) => {
      const regex = /<[^>]*>/gi;
      const dom = parser.parseFromString(
        "<!DOCTYPE html><body>" + encoded,
        "text/html"
      );
      return dom.body.textContent.replace(regex, "");
    };

    const parser = new DOMParser();

    const meta = matches
      .map((el) => {
        const t = parse(parser, el.term),
          d = parse(parser, el.definition);
        console.log("term", el.term);
        console.log("parsed term", t);
        console.log("split term", JSON.stringify(t.split(" "), null, 2));
        console.log("definition", el.definition);
        console.log("parsed def", d);
        console.log("split def", JSON.stringify(d.split(" "), null, 2));
        return [
          t.split(" ").reduce((a, c) => (a > c.length ? a : c.length), 0),
          t.length,
          d.split(" ").reduce((a, c) => (a > c.length ? a : c.length), 0),
          d.length,
        ];
      })
      .reduce((a, c) => {
        return [
          a[0] > c[0] ? a[0] : c[0],
          a[1] > c[1] ? a[1] : c[1],
          a[2] > c[2] ? a[2] : c[2],
          a[3] > c[3] ? a[3] : c[3],
        ];
      }, []);

    console.log(JSON.stringify(meta, null, 4));

    const { growth: m, min, max } = config.tile.scaling.text || {};

    state.textScaling = {
      terms: (
        max * Math.pow(m, Math.max(meta[0], meta[1] / 1.5)) +
        min
      ).toFixed(2),
      definitions: (
        max * Math.pow(m, Math.max(meta[2], meta[3] / 1.5)) +
        min
      ).toFixed(2),
    };

    debug && console.log(JSON.stringify(state.textScaling, null, 4));
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
      exited: false,
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
    terms = addColor(terms, state.colorScheme); // add colors (terms only)

    state.terms = terms;
    state.definitions = defs; // only necessary to reshuffle 1/2
  }

  function shuffle() {
    console.log("shuffling...");
    state.shuffling = true;
    state.terms = shuffleArray(state.terms);
    state.definitions = shuffleArray(state.definitions);
    endShuffle();
  }

  function startGame() {
    state.playing = false;
    state.correct = 0;
    state.incorrect = 0;
    state.score = 0;
    state.stats = [];
    state.terms = [];
    state.definitions = [];
    matchedCount.value = 0;
    deal();
    nextTick(() => {
      shuffle();
      state.playing = true;
    });
  }

  function gameOver() {
    console.log("game over...");
    state.playing = false;
    state.showBoard = false;
    state.showSplash = true;
    state.terms = [];
    state.definitions = [];
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

    analyzeMatches(matches);

    state.colorScheme = colorScheme.toLowerCase();
    state.duration = duration;
    state.matchId = matchId;
    state.itemsPerBoard = itemsPerBoard;
    state.matches = matches;
    state.title = title;
  });

  watch(matchedCount, (newValue, oldValue) => {
    debug &&
      console.log(
        "matched terms changed: ",
        JSON.stringify(oldValue),
        "=>",
        JSON.stringify(newValue)
      );

    if (newValue <= 0) return;

    if (newValue === state.itemsPerBoard) {
      deal();
      matchedCount.value = 0;
      nextTick(() => shuffle());
    } else {
      shuffle();
    }
  });

  return {
    config,
    ...toRefs(state),
    deal,
    gameOver,
    onDrag,
    onDrop,
    onOver,
    onTileLeft,
    shuffle,
    startGame,
  };
}
