import { computed, watch, toRefs, reactive } from "vue";

// eslint-disable-next-line no-unused-vars
const FULL_DASH_ARRAY = 283;

const SEVERITY = {
  ALERT: "alert",
  WARN: "warn",
  SUCCESS: "success",
};

export default function useTimer({
  duration,
  score,
  interval,
  warn,
  alert,
  debug = false,
}) {
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
    timer.scoreClass = newValue > oldValue ? "gain" : "loss";
  });

  return { ...toRefs(timer) };
}
