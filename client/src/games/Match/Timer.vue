<template>
  <transition
    :duration="{
      enter: `${timeouts.enter}`,
      leave: `${timeouts.leave}`,
    }"
    name="timer"
    v-bind="$attrs"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @after-appear="afterAppear"
  >
    <div v-show="!expired">
      <div class="timer">
        <div class="timer__wrapper" :class="[scoreClass]">
          <svg
            class="timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <g class="timer__circle">
              <circle class="timer__path-elapsed" :class="scoreClass" cx="50" cy="50" r="45" />
              <path
                :stroke-dasharray="strokeDasharray"
                class="timer__path-remaining"
                :class="[severity, scoreClass]"
                d="M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
              />
            </g>
          </svg>
          <span class="timer__label" :class="scoreClass">{{ score || formatted }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/* See: https://tinyurl.com/y3dy82l8 */

import { toRefs } from "vue";
import useTimer from "@/compose/useTimer";

const FULL_DASH_ARRAY = 283;

export default {
  name: "Timer",
  inheritAttrs: false,
  props: {
    active: {
      type: Boolean,
    },
    config: {
      type: Object,
      default: () => ({
        debug: false,
        thresholds: {
          warn: 40,
          alert: 20,
        },
        timeouts: {
          interval: 100,
          change: 250,
          delay: 1000,
          enter: 1000,
          leave: 1000,
        },
      }),
    },
    duration: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    /* Pass props that change to composable via reference vs. value */
    const { active, duration, playing, score } = toRefs(props);

    const timer = useTimer({
      active,
      alert: props.config.thresholds.alert,
      autoStart: true,
      change: props.config.timeouts.change,
      debug: props.config.debug,
      delay: props.config.timeouts.delay,
      duration,
      emit,
      interval: props.config.timeouts.interval,
      playing,
      score,
      warn: props.config.thresholds.warn,
    });

    return {
      ...timer,
      ...props.config,
    };
  },
  computed: {
    scoreClass() {
      return this.scoring ? (this.scoringStatus === this.SCORING_STATUS.UP ? "hit" : "miss") : "";
    },
    strokeDasharray() {
      const sofar = this.progress / 100 - (1 / this.duration) * (1 - this.progress / 100);
      return `${(sofar * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
    },
  },
  methods: {
    beforeEnter() {
      this.debug && console.log("before timer entered...");
      //this.setElapsed(0);
    },
    afterEnter() {
      console.log("after enter in Timer fired...");
      this.debug && console.log("timer entered...");
      // this.startTimer();
    },
    afterAppear() {
      console.log("after appear fired...");
      //   setTimeout(() => this.markTimerReady());
    },
    afterLeave() {
      this.debug && console.log("timer left...");
    },
  },
  onMounted() {
    console.log("Timer has mounted...");
  },
};
</script>

<style scoped lang="scss">
.timer-enter-active,
.timer-enter-from {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.timer-enter-to {
  opacity: 1;
}

.timer-leave-active {
  opacity: 1;
  transition: opacity 1s ease-out;
}

.timer-leave {
  opacity: 1;
}

.timer-leave-to {
  opacity: 0;
}

.timer {
  position: relative;

  &__wrapper {
    transform: scale(1, 1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &.hit,
    &.miss {
      transform: scale(1.05, 1.05);
    }
  }

  &__svg {
    transform: scaleX(-1);
    overflow: visible;
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: #efefef;
    transition: fill 250ms ease-in-out, stroke 250ms ease-in-out;
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
    transition: stroke 250ms ease-in-out;
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
    //font-family: monospace;
    transform: scale(1, 1);
    transition: color 250ms ease-in-out, transform 250ms linear;
    color: #111;
    font-weight: bold;
    &.hit,
    &.miss {
      transform: scale(1.05, 1.05);
      color: #fff;
    }
  }
}
</style>
