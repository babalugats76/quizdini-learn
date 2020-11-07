<template>
  <transition
    :duration="{
      enter: `${timeouts.enter}`,
      leave: `${timeouts.leave}`,
    }"
    enter-active-class="fade-in-active"
    enter-class="fade-in-start"
    enter-to-class="fade-in-end"
    leave-active-class="fade-out-active"
    leave-class="fade-out-start"
    leave-to-class="fade-out-end"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="match-timer" v-show="playing">
      <div class="timer">
        <!-- leave-class="scoring-start" -->
        <transition
          appear
          :duration="{
            enter: `${timeouts.change}`,
            leave: `${timeouts.change}`,
          }"
          leave-active-class="scoring-active"
          leave-to-class="scoring-end"
          @after-leave="endScoreChange"
        >
          <div class="timer__wrapper" v-show="!scoring">
            <svg
              class="timer__svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
            >
              <g class="timer__circle">
                <circle
                  class="timer__path-elapsed"
                  :class="scoreClass"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <path
                  :stroke-dasharray="strokeDasharray"
                  class="timer__path-remaining"
                  :class="[severity, scoreClass]"
                  d="M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
                ></path>
              </g>
            </svg>
            <span class="timer__label" :class="scoreClass">{{
              score || formatted
            }}</span>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
/* See: https://tinyurl.com/y3dy82l8 */

import { toRefs } from "vue";
import { actions } from "./lib";
import useTimer from "../shared/use/timer";

const FULL_DASH_ARRAY = 283;

export default {
  name: "Timer",
  props: ["config", "duration", "playing", "score"],
  setup(props) {
    const { duration, score } = toRefs(props);
    return {
      ...useTimer({
        duration,
        score,
        interval: props.config.timeouts.interval,
        warn: props.config.thresholds.warn,
        alert: props.config.thresholds.alert,
        debug: props.config.debug,
      }),
      ...props.config,
    };
  },
  computed: {
    strokeDasharray() {
      const sofar =
        this.progress / 100 - (1 / this.duration) * (1 - this.progress / 100);
      return `${(sofar * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
    },
  },
  methods: {
    ...{
      gameOver: actions.gameOver,
    },
    beforeEnter() {
      this.debug && console.log("before entered...");
      this.setElapsed(0);
    },
    afterEnter() {
      this.debug && console.log("timer entered...");
      this.startTimer();
    },
    afterLeave() {
      this.debug && console.log("timer left...");
    },
  },
  watch: {
    expired(newValue, oldValue) {
      if (!oldValue && newValue) {
        this.endTimer();
        this.gameOver();
      }
    },
  },
  beforeUnmount() {
    this.debug && console.log(this.$options.name, "before destroy...");
    this.endTimer();
  },
};
</script>

<style scoped lang="scss">
.match-timer {
  position: fixed;
  width: 6em;
  height: 6em;
  bottom: 1em;
  right: 1em;
  z-index: 1000;
  user-select: none;
  pointer-events: none;
}

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

.scoring-active {
  transform: scale(1, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.scoring-end {
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
    &.gain {
      fill: rgba(0, 255, 0, 1);
      stroke: transparent;
    }
    &.loss {
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

    &.gain,
    &.loss {
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
    &.gain,
    &.loss {
      color: #fff;
    }
    &.loss {
      transform: scale(1.05, 1.05);
    }
  }
}
</style>
