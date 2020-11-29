<template>
  <div class="page page--loader page--full">
    <button class="btn btn-refresh" title="Crude page reload">Replay</button>
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
      <div class="loader__label">Loading...</div>
    </section>
  </div>
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

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__logo {
    display: block;
    width: 100%;
    height: auto;
    min-width: 200px;
    max-width: 500px;
    margin: -2.3rem auto 2.3rem;
    overflow: visible;
  }
  &__label {
    display: block;
    color: white;
    text-align: center;
    font-size: 2.75rem;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
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
  to {
    stroke-dashoffset: 1000;
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
  /*display: none; */
  /*stroke-width: 2.6rem;
          stroke: rgba(12, 12, 12, .23);
          stroke-opacity: 1;*/
  opacity: 0;
  animation: fade-in 500ms cubic-bezier(0.5, 0, 0.75, 0) 3000ms forwards;
}

.brim {
  fill: #01e7e4;
  opacity: 0;
  transform: translate3d(0px, 0px, 0px);
  animation: top-down 600ms cubic-bezier(0.36, 0, 0.66, -0.56) 1600ms forwards,
    fade-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 1600ms forwards;
  overflow: hidden;
}

.liner {
  opacity: 0;
  fill: #001399;
  stroke: #ffea00;
  stroke: #c2f9f9;
  stroke: #fff07c;
  stroke-opacity: 0;
  stroke-width: 10px;
  stroke-dasharray: 40;
  stroke-linecap: round;
  transform: translate3d(0, 0, 0);
  animation: top-down 600ms cubic-bezier(0.36, 0, 0.66, -0.56) 1600ms forwards,
    fade-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 1600ms forwards,
    fade-in-spinner 300ms cubic-bezier(0.5, 0, 0.75, 0) 2900ms forwards,
    draw 1s linear infinite 3200ms;
}

.brim-shade {
  fill: #014ce4;
  opacity: 0;
  animation: fade-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 1900ms forwards;
}

.crown {
  fill: #aa54ff;
  stroke: #aa54ff;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  animation: top-down 600ms ease 1000ms forwards,
    fade-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 1000ms forwards;
}

.tip {
  fill: #711cff;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  animation: bottom-up 600ms ease 1000ms forwards,
    fade-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 1000ms forwards;
}

.tassel-cap {
  fill: #014ce4;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  animation: top-down 500ms cubic-bezier(0.36, 0, 0.66, -0.56) 2200ms forwards,
    fade-in 300ms cubic-bezier(0.5, 0, 0.75, 0) 2200ms forwards;
}

.tassel {
  display: absolute;
  fill: #aa54ff;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: translate3d(0, 0, 0) rotate(0);
  animation: move-tassel 600ms cubic-bezier(0.36, 0, 0.66, -0.56) 2600ms
      infinite forwards,
    fade-in 300ms cubic-bezier(0.36, 0, 0.66, -0.56) 2600ms forwards;
}
</style>
