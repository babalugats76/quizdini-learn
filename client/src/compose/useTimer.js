import {
  computed,
  onMounted,
  onBeforeUnmount,
  reactive,
  toRefs,
  unref,
  watch,
} from "vue";

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
  duration,
  score,
  interval,
  warn,
  alert,
  debug = false,
  emit = undefined,
}) {
  const state = reactive({
    // duration, // to automatically unwrap .value; alternatively, use unref
    active: false,
    elapsed: 0,
    expired: computed(() => state.remaining <= 0),
    formatted: computed(() => {
      const mins = Math.floor(state.remaining / 60000);
      const secs = Math.floor((state.remaining % 60000) / 1000);
      return secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`;
    }),
    intervalId: null,
    progress: computed(
      () =>
        Math.round((state.remaining / (unref(duration) * 1000)) * 10000) / 100
    ),
    remaining: computed(() => unref(duration) * 1000 - state.elapsed),
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
    debug && console.log("timer start...");
    state.active = true;
    state.elapsed = 0;
    state.intervalId = setInterval(() => {
      state.elapsed += interval;
    }, interval);
  }

  function setElapsed(val) {
    state.elapsed = val;
  }

  /* For toggling ephemeral score change transition */
  function endScoreChange() {
    debug && console.log("timer scoring end...");
    state.scoring = false;
    state.scoringStatus = "";
  }

  function endTimer() {
    debug && console.log("timer end...");
    state.active = false;
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  }

  watch(score, (newValue, oldValue) => {
    debug && console.log("score changed: ", oldValue, "=>", newValue);
    state.scoring = true;
    state.scoringStatus =
      newValue > oldValue ? SCORING_STATUS.UP : SCORING_STATUS.DOWN;
  });

  watch(
    () => state.expired,
    (newValue, oldValue) => {
      if (newValue && !oldValue) {
        debug && console.log("timer expired: ", oldValue, "=>", newValue);
        endTimer();
        emit("timer-expired");
      }
    }
  );

  onMounted(() => {
    debug && console.log("timer mounted...");
  });

  onBeforeUnmount(() => {
    debug && console.log("timer cleaning up...");
    endTimer();
  });

  return { ...toRefs(state), startTimer, endTimer, setElapsed, endScoreChange };
}
