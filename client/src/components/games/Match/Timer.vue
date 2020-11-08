<template>
  <transition
    :duration="{
      enter: `${timeouts.enter}`,
      leave: `${timeouts.leave}`,
    }"
    name="timer"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="match-timer" v-show="active">
      <div class="timer">
        <transition
          appear
          :duration="{
            enter: `${timeouts.change}`,
            leave: `${timeouts.change}`,
          }"
          name="scoring"
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
import useTimer from "../shared/use/timer";

const FULL_DASH_ARRAY = 283;

export default {
  name: "Timer",
  props: ["active", "config", "duration", "score"],
  setup(props, { emit }) {
    /* Pass props that change to composable via reference vs. value */
    const { duration, score } = toRefs(props);

    const timer = useTimer({
      duration,
      score,
      interval: props.config.timeouts.interval,
      warn: props.config.thresholds.warn,
      alert: props.config.thresholds.alert,
      debug: props.config.debug,
      emit,
    });

    return {
      ...timer,
      ...props.config,
    };
  },
  computed: {
    scoreClass() {
      return this.scoring
        ? this.scoringStatus === this.SCORING_STATUS.UP
          ? "hit"
          : "miss"
        : "";
    },
    strokeDasharray() {
      const sofar =
        this.progress / 100 - (1 / this.duration) * (1 - this.progress / 100);
      return `${(sofar * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
    },
  },
  methods: {
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

.timer-enter-active {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.timer-leave-active {
  opacity: 1;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.timer-enter {
  opacity: 0;
}

.timer-enter-to {
  opacity: 1;
}

.timer-leave {
  opacity: 1;
}

.timer-leave-to {
  opacity: 0;
}

.scoring-leave-active {
  transform: scale(1, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.scoring-leave-to {
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
