/* eslint-disable */
import {
  computed,
  onMounted,
  onBeforeUnmount,
  reactive,
  toRefs,
  unref,
  watch,
} from "vue";

import useTimeout from "@/compose/useTimeoutOrig";

const SEVERITY = {
  ALERT: "alert",
  WARN: "warn",
  SUCCESS: "success",
};

const SCORING_STATUS = {
  UP: "up",
  DOWN: "down",
};

// eslint-disable-next-line no-unused-vars
export default function useTimer({
  active = false,
  alert,
  autoStart = true,
  change = 1000,
  debug = false,
  delay = 5000,
  duration,
  emit = undefined,
  interval,
  score,
  warn,
}) {
  const [, startTimerWithDelay] = useTimeout(unref(delay), function () {
    debug && console.log("starting timer after", unref(delay), "ms delay...");
    state.intervalId = setInterval(() => {
      state.elapsed += unref(interval);
    }, unref(interval));
  });

  const [, endScoringAfterTimeout] = useTimeout(unref(change), function () {
    debug &&
      console.log(
        "ending scoring after",
        unref(change),
        "ms change timeout..."
      );
    state.scoring = false;
    state.scoringStatus = "";
  });

  const state = reactive({
    // duration, // to automatically unwrap .value; alternatively, use unref
    elapsed: 0,
    expired: computed(() => state.remaining <= 0),
    formatted: computed(() => {
      const mins = Math.floor(state.remaining / 60000);
      const secs = Math.floor((state.remaining % 60000) / 1000);
      return secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`;
    }),
    idle: computed(() => state.elapsed),
    intervalId: null,
    progress: computed(
      () =>
        Math.round((state.remaining / (unref(duration) * 1000)) * 10000) / 100
    ),
    remaining: computed(() => unref(duration) * 1000 - state.elapsed),
    running: false,
    scoring: false,
    scoringStatus: "",
    SCORING_STATUS,
    severity: computed(() =>
      state.progress <= warn
        ? state.progress <= alert
          ? SEVERITY.ALERT
          : SEVERITY.WARN
        : SEVERITY.SUCCESS
    ),
  });

  function startTimer() {
    stopTimer(); // clears any active timers
    state.running = true;
    state.scoring = false;
    state.scoringStatus = "";
    if (!state.remaining) {
      state.elapsed = 0;
    } // sets expired to false (see computed methods)
    startTimerWithDelay();
  }

  function setElapsed(val) {
    state.elapsed = val;
  }

  function stopTimer() {
    debug && console.log("stopping timer...");
    state.running = false;
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  }

  watch(active, (newActive, oldActive) => {
    if (newActive && !oldActive && !state.running) {
      //cancelTimerStart();
      startTimer();
    }
    if (!newActive && state.running) {
      console.log("pause timer here");
      stopTimer();
    }
  });

  watch(score, (newScore, oldScore) => {
    debug && console.log("score changed: ", oldScore, "=>", newScore);
    state.scoring = true;
    state.scoringStatus =
      newScore > oldScore ? SCORING_STATUS.UP : SCORING_STATUS.DOWN;
    endScoringAfterTimeout();
  });

  watch(
    () => state.expired,
    (newExpired, oldExpired) => {
      if (newExpired && !oldExpired) {
        debug && console.log("timer expired: ", oldExpired, "=>", newExpired);
        stopTimer();
        emit("timer-expired");
      }
    }
  );

  onMounted(() => {
    debug && console.log("timer mounted...");
    unref(autoStart) && unref(active) && startTimer();
  });

  onBeforeUnmount(() => {
    debug && console.log("timer cleaning up...");
    stopTimer();
  });

  return {
    ...toRefs(state),
    startTimer,
    stopTimer,
    setElapsed,
  };
}
