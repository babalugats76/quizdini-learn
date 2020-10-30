<template>
  <transition
    :duration="{ enter: `${enterMs}`, leave: `${leaveMs}` }"
    enter-active-class="fade-in-active"
    enter-class="fade-in-start"
    enter-to-class="fade-in-end"
    leave-active-class="fade-out-active"
    leave-class="fade-out-start"
    leave-to-class="fade-out-end"
    :css="true"
    @after-enter="onEntered"
    @after-leave="onLeft"
  >
    <div class="timer" :id="id" v-show="playing">
      <transition
        appear
        :css="true"
        :duration="{ enter: `${changeMs}`, leave: `${changeMs}` }"
        leave-active-class="score-out-active"
        leave-class="score-out-start"
        leave-to-class="score-out-end"
        @after-leave="endScoreChange"
      >
        <div class="timer__wrapper" v-show="!scoreChanging">
          <svg
            class="timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <g class="timer__circle">
              <circle
                class="timer__path-elapsed"
                :class="hitMiss"
                cx="50"
                cy="50"
                r="45"
              ></circle>
              <path
                :stroke-dasharray="circleDasharray"
                class="timer__path-remaining"
                :class="[severity, hitMiss]"
                d="M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
              ></path>
            </g>
          </svg>
          <span class="timer__label" :class="hitMiss">{{
            score || formattedTimeLeft
          }}</span>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
/*Refer to previous code and this article
https://medium.com/js-dojo/how-to-create-an-animated-countdown-timer-with-vue-89738903823f */

const FULL_DASH_ARRAY = 283;
const WARN_THRESHOLD = 40;
const ALERT_THRESHOLD = 20;

export default {
  name: "MatchTimer",
  props: [
    "active",
    "changeMs",
    "duration",
    "enterMs",
    "id",
    "intervalMs",
    "leaveMs",
    "playing",
    "score",
  ],
  data() {
    return {
      elapsed: 0,
      hitMiss: null,
      intervalId: null,
      scoreChanging: false,
    };
  },
  computed: {
    circleDasharray() {
      const progress =
        this.progressPct / 100 -
        (1 / this.duration) * (1 - this.progressPct / 100);
      return `${(progress * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },
    expired() {
      return this.remaining <= 0;
    },
    formattedTimeLeft() {
      const minutes = Math.floor(this.remaining / 60000);
      let seconds = Math.floor((this.remaining % 60000) / 1000);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
    progressPct() {
      return (
        Math.round((this.remaining / (this.duration * 1000)) * 10000) / 100
      );
    },
    remaining() {
      return this.duration * 1000 - this.elapsed;
    },
    severity() {
      return this.progressPct <= WARN_THRESHOLD
        ? this.progressPct <= ALERT_THRESHOLD
          ? "alert"
          : "warn"
        : "success";
    },
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    onEntered(el) {
      console.log("timer entered...");
      this.startTimer();
    },
    // eslint-disable-next-line no-unused-vars
    onLeft(el) {
      console.log("timer left...");
      this.elapsed = 0;
    },
    startTimer() {
      this.elapsed = 0;
      this.intervalId = setInterval(
        () => (this.elapsed += this.intervalMs),
        this.intervalMs
      );
    },
    endTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    /* Handles toggling the ephemeral score change transition */
    // eslint-disable-next-line no-unused-vars
    endScoreChange(el) {
      console.log("score changed ending...");
      this.scoreChanging = false;
      this.hitMiss = null;
    },
  },
  watch: {
    score(newVal, oldVal) {
      console.log("score changed!");
      this.scoreChanging = true;
      this.hitMiss = newVal > oldVal ? "hit" : "miss";
    },
    expired(newVal, oldVal) {
      if (!oldVal && newVal) {
        this.endTimer();
        this.$emit("timer-expired");
      }
    },
  },
  mounted() {
    console.log(this.$options.name, "mounted...");
  },
  unmounted() {
    // clear any outstanding timers
    this.endTimer();
  },
};
</script>

<style scoped lang="scss">
.fade-in-active {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-start {
  opacity: 0;
}

.fade-in-end {
  opacity: 1;
}

.fade-out-active {
  opacity: 1;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-out-start {
  opacity: 1;
}

.fade-out-end {
  opacity: 0;
}

.score-in-active {
  transition: transform 250ms cubic-bezier(1, 0, 0, 1);
}

.score-in-end {
  transform: scale(1, 1);
}

.score-out-end {
  transform: scale(1.05, 1.05);
}

.score-out-active {
  transform: scale(1, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.score-out-end {
  transform: scale(1.05, 1.05);
}

.timer {
  position: relative;

  &__svg {
    transform: scaleX(-1);
    overflow: visible;
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    fill: transparent;
    stroke-width: 7px;
    stroke: #efefef;
    transition: fill 500ms ease-in-out, stroke 500m ease-in-out;
    &.hit {
      fill: rgba(0, 255, 0, 1);
      stroke: transparent;
    }
    &.miss {
      fill: rgba(255, 0, 0, 1);
      stroke: transparent;
    }
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: square;
    transform: rotate(90deg);
    transform-origin: center;
    transition: stroke 500ms ease-in-out;
    fill-rule: nonzero;
    stroke: currentColor;

    &.alert {
      color: red;
    }

    &.warn {
      color: yellow;
    }

    &.success {
      color: lime;
    }

    &.hit,
    &.miss {
      color: transparent;
      stroke: transparent;
    }
  }

  &__label {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    top: 0;
    font-size: 2em;
    font-family: monospace;
    transform: scale(1, 1);
    transition: color 50ms ease-in-out, transform 200ms linear;
    color: #111;
    font-weight: bold;
    &.hit,
    &.miss {
      color: #fff;
    }
    &.miss {
      transform: scale(1.05, 1.05);
    }
  }
}
</style>