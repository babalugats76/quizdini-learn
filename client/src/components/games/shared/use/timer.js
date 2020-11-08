import { computed, reactive, toRefs, watch, onBeforeUnmount } from "vue";

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
  const timer = reactive({
    duration: duration, // to automatically unwrap .value
    elapsed: 0,
    intervalId: null,
    scoring: false,
    scoringStatus: "",
    SCORING_STATUS,
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
        Math.round((timer.remaining / (timer.duration * 1000)) * 10000) / 100
    ),
    remaining: computed(() => timer.duration * 1000 - timer.elapsed),
  });

  function startTimer() {
    debug && console.log("timer start...");
    timer.elapsed = 0;
    timer.intervalId = setInterval(() => {
      timer.elapsed += interval;
    }, interval);
  }

  function setElapsed(val) {
    timer.elapsed = val;
  }

  /* For toggling ephemeral score change transition */
  function endScoreChange() {
    debug && console.log("timer scoring end...");
    timer.scoring = false;
    timer.scoringStatus = "";
  }

  function endTimer() {
    debug && console.log("timer end...");
    if (timer.intervalId) {
      clearInterval(timer.intervalId);
      timer.intervalId = null;
    }
  }

  watch(score, (newValue, oldValue) => {
    debug && console.log("score changed: ", newValue, oldValue);
    timer.scoring = true;
    timer.scoringStatus =
      newValue > oldValue ? SCORING_STATUS.UP : SCORING_STATUS.DOWN;
  });

  watch(
    () => timer.expired,
    (newValue, oldValue) => {
      if (!oldValue && newValue) {
        debug && console.log("timer expired: ", newValue, oldValue);
        endTimer();
        emit("timer-expired");
      }
    }
  );

  onBeforeUnmount(() => {
    debug && console.log("timer cleaning up...");
    endTimer();
  });

  return { ...toRefs(timer), startTimer, setElapsed, endScoreChange, endTimer };
}
