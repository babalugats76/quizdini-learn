/* eslint-disable */
import { computed, nextTick, toRef, toRefs, reactive, watch } from "vue";
import shortid from "shortid";
import { shuffleArray, updateObjInArray, upsertArray } from "@/utils/common";
import { default as config } from "./config";
import useTimeout from "@/compose/useTimeout";
import { postPing } from "@/api/ping";

export default function useMatch(data, debug = true) {
  const [, hideMatched] = useTimeout(config.tile.timeouts.hit, () => {
    state.terms = state.terms.map((t) =>
      t.matched && t.show ? { ...t, show: false } : t
    );
    state.definitions = state.definitions.map((d) =>
      d.matched && d.show ? { ...d, show: false } : d
    );
  });
  const [, endShuffle] = useTimeout(config.tile.timeouts.shuffle, () => {
    state.shuffling = false;
  });

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
    exited: computed(() =>
      state.terms.reduce((a, v) => (v.exited ? (a += 1) : a), 0)
    ),
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

  const exitedRef = toRef(state, "exited");

  function processMatches(matches) {
    const parse = (parser, encoded) => {
      const regex = /<[^>]*>/gi;
      // important to apply regex *before* encoding
      const dom = parser.parseFromString(
        "<!DOCTYPE html><body>" + encoded.replace(regex, ""),
        "text/html"
      );
      return dom.body.textContent;
    };

    const parser = new DOMParser();

    return matches.map((m) => {
      const t = parse(parser, m.term),
        d = parse(parser, m.definition);
      return {
        term: {
          answer: m.definition,
          content: m.term,
          dragging: false,
          exited: false,
          hasHtml: t.length !== m.term.length,
          hit: false,
          id: shortid.generate(),
          length: t.length,
          matched: false,
          matchId: "",
          maxWordLength: t
            .split(" ")
            .reduce((a, v) => (a > v.length ? a : v.length), 0),
          miss: false,
          over: false,
          show: true,
        },
        definition: {
          content: m.definition,
          exited: false,
          hasHtml: d.length !== m.definition.length,
          hit: false,
          id: shortid.generate(),
          length: d.length,
          matched: false,
          matchId: "",
          maxWordLength: d
            .split(" ")
            .reduce((a, v) => (a > v.length ? a : v.length), 0),
          miss: false,
          over: false,
          show: true,
        },
      };
    });
  }

  function addColors(array = [], colorScheme = "") {
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
      dragging: true,
      hit: false,
      miss: false,
      style: translate3d(dragX, dragY, 1),
    });
  }

  function onOver(payload) {
    const { dragId, dropId } = payload || {};
    state.terms = state.terms.map((t) => ({ ...t, over: t.id === dragId }));
    state.definitions = state.definitions.map((d) => ({
      ...d,
      over: d.id === dropId,
    }));
  }

  function onDrop(payload) {
    const { dragId, dragX, dragY, dropId, dropX, dropY } = payload || {};
    const matched = dropId ? isMatch(dragId, dropId) : false;

    state.terms = updateObjInArray(state.terms, {
      id: dragId,
      dragging: false,
      hit: matched,
      miss: !matched,
      matched,
      matchId: matched ? dropId : "",
      over: matched,
      style: matched
        ? hitStyle(dragX, dragY, 1, dropX, dropY, 1, config.tile.timeouts.hit)
        : translate3d(0, 0, 0),
    });

    if (!dropId) return;

    matched ? state.correct++ : state.incorrect++;

    state.definitions = updateObjInArray(state.definitions, {
      id: dropId,
      hit: matched,
      miss: !matched,
      matched,
      matchId: matched ? dragId : "",
      over: matched,
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

    matched && hideMatched();
  }

  function onTileLeft(id, type) {
    switch (type) {
      case "term":
        state.terms = updateObjInArray(state.terms, { id, exited: true });
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

  function analyzeContent(matches) {
    const meta = matches.reduce((a, m) => {
      return [
        a[0] > m.term.maxWordLength ? a[0] : m.term.maxWordLength,
        a[1] > m.term.length ? a[1] : m.term.length,
        a[2] > m.definition.maxWordLength ? a[2] : m.definition.maxWordLength,
        a[3] > m.definition.length ? a[3] : m.definition.length,
      ];
    }, []);

    console.log(JSON.stringify(meta, null, 4));

    const { growth: m, min, max } = config.tile.text.scaling || {};

    state.textScaling = {
      terms: (
        max * Math.pow(m, m * Math.max(meta[0], meta[1] / 1.5)) +
        min
      ).toFixed(2),
      definitions: (
        max * Math.pow(m, m * Math.max(meta[2], meta[3] / 1.5)) +
        min
      ).toFixed(2),
    };

    debug && console.log(JSON.stringify(state.textScaling, null, 4));
  }

  function deal() {
    console.log("dealing...");
    state.matches = shuffleArray(state.matches);
    const hand = state.matches.slice(
      0,
      Math.min(state.itemsPerBoard, state.matches.length)
    );
    analyzeContent(hand);
    state.terms = addColors(
      hand.map((m) => m.term),
      state.colorScheme
    );
    state.definitions = shuffleArray(hand.map((m) => m.definition));
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
    deal();
    nextTick(() => {
      shuffle();
      state.playing = true;
    });
  }

  async function gameOver() {
    console.log("game over...");
    state.playing = false;
    state.showBoard = false;
    state.showSplash = true;
    state.terms = [];
    state.definitions = [];
    const response = await postPing({
      correct: state.correct,
      data: state.stats,
      gameId: state.matchId,
      gameType: "M",
      incorrect: state.incorrect,
      score: state.score,
    });
    debug && JSON.stringify(response.data, null, 4);
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

    state.colorScheme = colorScheme.toLowerCase();
    state.duration = duration;
    state.matchId = matchId;
    state.itemsPerBoard = itemsPerBoard;
    state.matches = processMatches(matches);
    state.title = title;
  });

  watch(exitedRef, (newValue, oldValue) => {
    debug &&
      console.log(
        "exited changed: ",
        JSON.stringify(oldValue),
        "=>",
        JSON.stringify(newValue)
      );

    if (newValue <= oldValue) return;

    if (newValue === state.itemsPerBoard) {
      deal();
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
