export default {
  board: {
    debug: false,
    timeouts: {
      throttle: 33,
    },
  },
  game: {
    debug: true,
    timeouts: {
      enter: 1000,
      leave: 1000,
    },
    themes: {
      rainbow: {
        colors: [
          "red",
          "green",
          "yellow",
          "blue",
          "orange",
          "purple",
          "light-blue",
          "fuchsia",
          "lime",
          "pink",
          "teal",
          "mauve",
          "brown",
          "cream",
          "maroon",
          "apple",
          "olive",
          "light-orange",
          "navy",
          "gray",
        ],
      },
    },
  },
  tile: {
    timeouts: {
      enter: 800,
      hit: 800,
      leave: 500,
      miss: 800,
      shuffle: 500,
    },
  },
  timer: {
    debug: false,
    thresholds: {
      warn: 40,
      alert: 20,
    },
    timeouts: {
      interval: 100,
      change: 250,
      enter: 1000,
      leave: 1000,
    },
  },
};
