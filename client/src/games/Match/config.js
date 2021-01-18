// prettier-ignore
export default {
  board: {
    debug: false,
    timeouts: { throttle: 33 },
  },
  game: {
    debug: false,
    timeouts: { enter: 1000, leave: 1000 },
    themes: {
      default: { colors: ['zaffre'] },
      rainbow: {
        colors: ["apple","blue","brown","cream","fuchsia",
                 "gray","green","light-blue","light-orange","lime",
                 "maroon","mauve","navy","olive","orange",
                 "pink","purple","red","teal","yellow"],
      },
    },
  },
  splash: {
   timeouts: { default: 500 }
  },
  tile: {
    text: {
      scaling: { growth: 0.25, min: 1.25, max: 3.25 },
    },
    timeouts: { enter: 800, hit: 600, leave: 800, miss: 800, shuffle: 300 },
  },
  timer: {
    debug: false,
    thresholds: { warn: 40, alert: 20 },
    timeouts: { interval: 100, change: 250, delay: 1000, enter: 1000, leave: 1000 },
  },
};
