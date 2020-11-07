import shortid from "shortid";
import { shuffleArray, updateObjInArray, upsertArray } from "./utils";
import { state, config } from "./store";
// eslint-disable-next-line no-unused-vars
import { computed, watch, ref, toRefs, reactive } from "vue";

const translate3d = (x, y, z) => {
  return {
    transform: "translate3d(" + x + "px, " + y + "px, " + z + "px)",
  };
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
  ...translate3d(x, y, z),
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

const drag = (payload) => {
  const { dragId, dragX, dragY } = payload || {};
  state.terms = updateObjInArray(state.terms, {
    id: dragId,
    style: state.moveStyle(dragX, dragY, 1),
    className: "drag",
  });
};

const over = (payload) => {
  const { dropId } = payload || {};
  state.definitions = state.definitions.map((d) => ({
    ...d,
    className: d.id === dropId && !d.matched ? "over" : "",
  }));
};

const drop = (payload) => {
  const { dragId, dragX, dragY, dropId, dropX, dropY } = payload || {};
  const matched = dropId ? isMatch(dragId, dropId) : false;

  state.terms = updateObjInArray(state.terms, {
    id: dragId,
    matched: matched,
    className: matched ? "hit" : "miss",
    style: matched
      ? hitStyle(dragX, dragY, 1, dropX, dropY, 1, config.tile.hitMs)
      : missStyle(0, 0, 0),
  });

  if (!dropId) {
    return;
  }

  state.definitions = updateObjInArray(state.definitions, {
    id: dropId,
    className: matched ? "hit" : "",
    ...(matched && { matched: true }),
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
};

export const gameOver = () => {
  console.log("game over...");
  state.playing = false;
  state.showBoard = false;
};

export const actions = {
  deal,
  drag,
  drop,
  gameOver,
  isMatch,
  load,
  over,
  shuffle,
};

export const useConfig = (config) => ({ ...config });

// eslint-disable-next-line no-unused-vars
const FULL_DASH_ARRAY = 283;

const SEVERITY = {
  ALERT: "alert",
  WARN: "warn",
  SUCCESS: "success",
};

// eslint-disable-next-line no-unused-vars
export const useTimer = ({
  duration,
  score,
  interval,
  warn,
  alert,
  debug = false,
}) => {
  const timer = reactive({
    score,
    duration,
    scoring: false,
    elapsed: 0,
    scoreClass: "",
    intervalId: null,
    setElapsed: (val) => (timer.elapsed = val),
    severity: computed(() =>
      timer.progress <= warn
        ? timer.progress <= alert
          ? SEVERITY.ALERT
          : SEVERITY.WARN
        : SEVERITY.SUCCESS
    ),
    expired: computed(() => timer.remaining <= 0),
    formatted: computed(() => {
      const mins = Math.floor(timer.remaining / 60000);
      const secs = Math.floor((timer.remaining % 60000) / 1000);
      return secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`;
    }),
    progress: computed(
      () =>
        Math.round((timer.remaining / (duration.value * 1000)) * 10000) / 100
    ),
    remaining: computed(() => duration.value * 1000 - timer.elapsed),
    startTimer: () => {
      debug && console.log("timer start...");
      timer.elapsed = 0;
      timer.intervalId = setInterval(() => {
        timer.elapsed += interval;
      }, interval);
    },
    endTimer: () => {
      debug && console.log("timer end...");
      if (timer.intervalId) {
        clearInterval(timer.intervalId);
        timer.intervalId = null;
      }
    },
    /* Handles toggling ephemeral score change transition */
    endScoreChange: () => {
      debug && console.log("timer scoring end...");
      timer.scoring = false;
      timer.scoreClass = "";
    },
  });

  watch(score, (newValue, oldValue) => {
    debug && console.log("Score changed: ", newValue, oldValue);
    timer.scoring = true;
    timer.scoreClass = newValue > oldValue ? "up" : "down";
  });

  return { ...toRefs(timer) };
};
