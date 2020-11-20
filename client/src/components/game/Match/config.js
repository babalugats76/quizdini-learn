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
      default: {
        colors: ["zaffre"],
      },
      rainbow: {
        // prettier-ignore
        colors: ["apple","blue","brown","cream","fuchsia",
                 "gray","green","light-blue","light-orange","lime",
                 "maroon","mauve","navy","olive","orange",
                 "pink","purple","red","teal","yellow"],
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
