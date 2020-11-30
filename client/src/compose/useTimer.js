/* eslint-disable */
import {
  computed,
  onMounted,
  onBeforeUnmount,
  reactive,
  toRefs,
  unref,
  watch,
  watchEffect,
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
  alert,
  debug = false,
  duration,
  emit = undefined,
  interval,
  playing = false,
  score,
  warn,
}) {
  const state = reactive({
    // duration, // to automatically unwrap .value; alternatively, use unref
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
    ready: false,
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

  /* function markTimerReady() {
    state.ready = true;
  }*/

  function startTimer() {
    state.elapsed = 0;
    setTimeout(() => {
      debug && console.log("timer start...");
      state.running = true;
      state.intervalId = setInterval(() => {
        state.elapsed += interval;
      }, interval);
    }, 3000);
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
    state.running = false;
    //state.elapsed = 0;
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  }

  /*watch(
    [() => state.running, playing],
    ([newRunning, newPlaying], [oldRunning, oldPlaying]) => {
      console.log('running', 'new', newRunning, 'old', oldRunning);
      console.log('playing', 'new', newPlaying, 'old', oldPlaying);
      if (newPlaying && newPlaying !== oldPlaying && !newRunning) {
        setTimeout(() => {
          startTimer();
        }, 10000);
      }
    },
    { immediate: true }
  );*/

  watchEffect(() => {
    console.log("watch effect fired...ready start timer");
    unref(playing) && startTimer();
  });

  /*  watch(playing, (newPlaying, oldPlaying) => {
    console.log('newPlaying', newPlaying, 'oldPlaying', oldPlaying);
    if (newPlaying && newPlaying !== oldPlaying) {
      endTimer();
      setTimeout(() => startTimer(), 5000);
    }
  });*/

  /* watchEffect(() => {
    console.log('playing (value)', playing.value);
    console.log('state.running', state.running);
    if (playing.value && !state.running) {
      console.log('watch effect fired -> inside start timer if');
      startTimer();
    }
  });*/

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

  return {
    ...toRefs(state),
    //  markTimerReady,
    startTimer,
    endTimer,
    setElapsed,
    endScoreChange,
  };
}
