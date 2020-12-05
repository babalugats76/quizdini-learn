<template>
  <!--<div class="page page--loader page--full page--purple">-->
  <!--<button class="btn btn-refresh" title="Crude page reload">Replay</button>-->
  <section class="loader">
    <svg
      class="loader__logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 475 475"
    >
      <circle
        class="badge"
        style="paint-order: stroke fill markers"
        cx="237.5"
        cy="237.5"
        r="237.5"
      />
      <path
        class="tassel-cap"
        d="M405.4 286.9c0 6.1-5 11.1-11.1 11.1 -6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1C400.4 275.8 405.4 280.7 405.4 286.9"
      />
      <path
        class="tassel"
        d="M391 306.4l-14.7 25.5c-1.4 2.5 0.4 5.6 3.2 5.6h29.4c2.9 0 4.7-3.1 3.2-5.6l-14.7-25.5C396 304 392.5 304 391 306.4"
      />
      <path
        class="brim"
        d="M407.5 240.8l-104.8-47.2c3.4-9.1 6.5-18.7 9.2-28.7 12.7-47.6 12.7-92.5 2.2-121.3 -23.4 19.9-45.7 58.8-58.3 106.4 -1.8 6.9-3.4 13.7-4.7 20.4l-4.2-1.9c-5.9-2.7-12.7-2.7-18.6 0l-4.2 1.9c-1.3-6.7-2.9-13.5-4.7-20.4 -12.7-47.6-35-86.5-58.3-106.4 -10.4 28.9-10.4 73.7 2.2 121.3 2.7 10 5.8 19.6 9.2 28.7l-104.8 47.2c-6.9 3.1-6.9 12.9 0 16l87.6 39.4c0 0 0-48 0-48.3 0.8-24.8 37.4-44.8 82.4-44.8 45 0 81.6 20 82.4 44.8 0 0.3 0 48.3 0 48.3l87.6-39.4C414.4 253.7 414.4 243.9 407.5 240.8"
      />
      <path
        class="brim-shade"
        d="M319.9 248c-0.8 24.8-37.3 44.8-82.3 44.8 -45 0-81.5-20-82.3-44.8 0 0.3 0 0.6 0 0.8v47.5l73.1 32.9c5.9 2.7 12.7 2.7 18.6 0l73.1-32.9V248.8C319.9 248.5 319.9 248.3 319.9 248"
      />
      <path
        class="liner"
        d="M237.5 203.2c-45 0-81.5 20-82.3 44.8 0.8 24.8 37.4 44.8 82.4 44.8s81.6-20 82.4-44.8C319.1 223.2 282.5 203.2 237.5 203.2"
      />
      <path
        class="crown"
        d="M228.2 329.2l-73.1-32.9v89.6c0-25.2 36.9-45.6 82.4-45.6s82.4 20.4 82.4 45.6v-89.6l-73.1 32.9C240.9 331.8 234.1 331.8 228.2 329.2"
      />
      <path
        class="tip"
        d="M319.9 385.9c0 25.2-36.9 45.6-82.4 45.6 -45.5 0-82.4-20.4-82.4-45.6s36.9-45.6 82.4-45.6C283 340.3 319.9 360.7 319.9 385.9"
      />
    </svg>
    <svg
      class="loader__label"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 251.924 29.28"
    >
      <g class="label">
        <path d="M0 28.64h22.08v-7.32H9.44V.64H0v28z" class="l" />
        <path
          d="M40.977 29.28c9.12 0 15.8-6.16 15.8-14.64S50.097 0 40.977 0c-9.12 0-15.8 6.16-15.8 14.64s6.68 14.64 15.8 14.64zm0-7.64c-3.48 0-6.28-2.64-6.28-7 0-4.36 2.8-7 6.28-7 3.48 0 6.28 2.64 6.28 7 0 4.36-2.8 7-6.28 7z"
          class="o"
        />
        <path
          d="M82.772 28.64h9.76l-12.24-28h-9.28l-12.24 28h9.6l1.88-4.88h10.64l1.88 4.88zm-9.92-11.68l2.72-7.04 2.72 7.04h-5.44z"
          class="a"
        />
        <path
          d="M96.078 28.64h13.8c9.36 0 15.8-5.32 15.8-14s-6.44-14-15.8-14h-13.8v28zm9.44-7.36V8h3.96c3.96 0 6.68 2.36 6.68 6.64 0 4.28-2.72 6.64-6.68 6.64h-3.96z"
          class="d"
        />
        <path d="M131.125 28.64h9.44v-28h-9.44v28z" class="i" />
        <path
          d="M165.51.64v12.72L154.87.64h-7.76v28h9.2V15.92l10.64 12.72h7.76v-28h-9.2z"
          class="n"
        />
        <path
          d="M199.817 20.96c-1.16.48-2.28.68-3.44.68-4.04 0-6.68-2.8-6.68-7 0-4.32 2.64-7 6.8-7 2.48 0 4.52 1.04 6.28 3.08l6.04-5.32c-2.84-3.48-7.28-5.4-12.8-5.4-9.24 0-15.84 6.04-15.84 14.64 0 8.6 6.6 14.64 15.64 14.64 4.12 0 8.8-1.24 12.2-3.56V13.88h-8.2v7.08z"
          class="g"
        />
        <path
          d="M218.269 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z"
          class="dot"
        />
        <path
          d="M232.456 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z"
          class="dot"
        />
        <path
          d="M246.644 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z"
          class="dot"
        />
      </g>
    </svg>
  </section>
  <!--</div> -->
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  overflow: auto;
  background-color: #47008f;
  margin: 0;
  padding: 0;
}

.page--full {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.page--purple {
  background-color: purple;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 200px;
  max-width: 360px;
  width: 80%;
  margin-top: -2rem;
  transform: translate(-50%, -50%);
  &__logo {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto 0.75rem;
    overflow: visible;
  }
  &__label {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow: visible;
    .label {
      stroke-width: 2;
      > path {
        transform-box: fill-box;
        transform-origin: center center;
        paint-order: fill;
        stroke-dashoffset: 0;
        stroke-dasharray: 100%;
        animation: dash 2.5s linear infinite both reverse,
          flip 5s linear infinite 4s;
        stroke: none;
        fill: rgba(255, 105, 180, 0.25);
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: all 100ms ease-in-out;
        transform: scale(1, 1) rotateX(0deg);
        &:nth-child(10) {
          animation-delay: -250ms;
        }
        &:nth-child(9) {
          animation-delay: -125ms;
        }
        &:nth-child(8) {
          animation-delay: 0ms;
        }
        &:nth-child(7) {
          animation-delay: 1050ms;
        }
        &:nth-child(6) {
          animation-delay: 875ms;
        }
        &:nth-child(5) {
          animation-delay: 700ms;
        }
        &:nth-child(4) {
          animation-delay: 525ms;
        }
        &:nth-child(3) {
          animation-delay: 350ms;
        }
        &:nth-child(2) {
          animation-delay: 175ms;
        }
        &:nth-child(1) {
          animation-delay: 0ms;
        }
      }
    }
  }
}

.btn {
  margin: 0.75em;
  padding: 0.75em;
  background-color: #f4f4f4;
  border-radius: 0.25em;
  color: #555;
  font-family: "Montserrat";
  transition: color 250ms ease-in-out;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    color: #343434;
  }
}

@keyframes flip {
  0% {
    transform: scale(1, 1) rotateX(0deg);
  }
  10% {
    transform: scale(1.03, 1.03) rotateX(360deg);
  }
  to {
    transform: scale(1.03, 1.03) rotateX(360deg);
  }
}

@keyframes dash {
  0%,
  50% {
    stroke-dashoffset: 0%;
    stroke: rgba(255, 255, 255, 0.75);
    stroke: #fff07c;
    //stroke: rgba(255, 255, 0, 0.05);
    //opacity: 1;
    stroke-dasharray: 100%;
  }
  to {
    //stroke: rgba(255, 255, 0, 1);
    stroke: rgba(255, 255, 255, 0.5);
    stroke: #fff07c;
    stroke-dashoffset: 100%;
    stroke-dasharray: 100%;
    // opacity: 0.8;
  }
}

/**
     * "HAT" ANATOMY:
     *
     * badge
     * brim
     * liner
     * brim-shade
     * crown
     * tip
     * tassel-cap
     * tassel
     */

@keyframes draw {
  from {
    stroke-dashoffset: 125;
    stroke: #fff07c;
  }
  to {
    stroke-dashoffset: 456;
    stroke: #fff07c;
  }
}

@keyframes fade-in-spinner {
  from {
    stroke-opacity: 0;
  }

  to {
    stroke-opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes top-down {
  from {
    transform: translate3d(0, -25%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bottom-up {
  from {
    transform: translate3d(0, 25%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes move-tassel {
  0% {
    transform: rotateY(0deg) translate3d(0, 0, 0);
  }

  20% {
    transform: translate3d(0, 10%, 0);
  }

  60% {
    transform: rotateY(720deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}

.badge {
  fill: #47008f;
  display: none;
  /*stroke-width: 2.6rem;
          stroke: rgba(12, 12, 12, .23);
          stroke-opacity: 1;*/
  opacity: 0;
  animation: fade-in 250ms cubic-bezier(0.5, 0, 0.75, 0) 1000ms forwards;
}

.brim {
  fill: #01e7e4;
  opacity: 0;
  transform: translate3d(0px, 0px, 0px);
  animation: top-down 300ms cubic-bezier(0.36, 0, 0.66, -0.56) 300ms forwards,
    fade-in 150ms cubic-bezier(0.5, 0, 0.75, 0) 300ms forwards;
  overflow: hidden;
}

.liner {
  opacity: 0;
  fill: #001399;
  paint-order: fill;
  stroke: #ffea00;
  stroke: #c2f9f9;
  stroke: #fff07c;
  stroke: none;
  transform-box: fill-box;
  transform-origin: center;
  stroke-opacity: 0;
  stroke-width: 10;
  stroke-dashoffset: 125;
  stroke-dasharray: 40;
  stroke-linecap: round;
  transform: translate3d(0, 0, 0);
  animation: top-down 300ms cubic-bezier(0.36, 0, 0.66, -0.56) 800ms forwards,
    fade-in 150ms cubic-bezier(0.5, 0, 0.75, 0) 800ms forwards,
    fade-in-spinner 150ms cubic-bezier(0.5, 0, 0.75, 0) 950ms forwards,
    draw 600ms linear infinite 1200ms forwards;
}

.brim-shade {
  fill: #014ce4;
  opacity: 0;
  animation: fade-in 150ms cubic-bezier(0.5, 0, 0.75, 0) 450ms forwards;
}

.crown {
  fill: #aa54ff;
  stroke: #aa54ff;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  animation: top-down 300ms ease 0ms forwards,
    fade-in 150ms cubic-bezier(0.5, 0, 0.75, 0) 0ms forwards;
}

.tip {
  fill: #711cff;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  animation: bottom-up 600ms ease 0ms forwards,
    fade-in 150ms cubic-bezier(0.5, 0, 0.75, 0) 0ms forwards;
}

.tassel-cap {
  fill: #014ce4;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  animation: top-down 250ms cubic-bezier(0.36, 0, 0.66, -0.56) 1100ms forwards,
    fade-in 150ms cubic-bezier(0.5, 0, 0.75, 0) 1100ms forwards;
}

.tassel {
  display: absolute;
  fill: #aa54ff;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: translate3d(0, 0, 0) rotate(0);
  animation: move-tassel 300ms cubic-bezier(0.36, 0, 0.66, -0.56) 1300ms
      infinite forwards,
    fade-in 150ms cubic-bezier(0.36, 0, 0.66, -0.56) 1300ms forwards;
}
</style>
