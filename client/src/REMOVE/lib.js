import shortid from "shortid";
import { shuffleArray, updateObjInArray, upsertArray } from "@/utils/common";
import { state, config } from "./store";

/*
import useTimeout from '@/compose/useTimeout';

const [, runHelloWorld] = useTimeout({
  cb: () => {
    console.log('Hello, World!');
  },
  ms: 10000,
});*/

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

function load(data) {
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
  setTimeout(() => {
    state.shuffling = false;
    state.canDnd = true;
  }, config.tile.timeouts.shuffle);
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
  const { dropId } = payload || {};
  state.definitions = state.definitions.map((d) => ({
    ...d,
    className: d.id === dropId && !d.matched ? "over" : "",
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
    state.canDnd = false;
    setTimeout(() => {
      state.terms = updateObjInArray(state.terms, {
        id: dragId,
        show: false,
      });

      state.definitions = updateObjInArray(state.definitions, {
        id: dropId,
        show: false,
      });
    }, config.tile.timeouts.hit);
  }
}

function gameOver() {
  console.log("game over...");
  state.playing = false;
  state.showBoard = false;
}

export const actions = {
  deal,
  gameOver,
  isMatch,
  load,
  onDrag,
  onDrop,
  onOver,
  shuffle,
};