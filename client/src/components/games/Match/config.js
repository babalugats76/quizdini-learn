export default {
  dnd: {
    timeouts: {
      throttle: 33,
    },
  },
  game: {
    timeouts: {
      enter: 1000,
      leave: 1000,
    },
  },
  tile: {
    timeouts: {
      enter: 800,
      hit: 800,
      leave: 0,
      miss: 800,
      shuffle: 500,
    },
  },
  timer: {
    debug: true,
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
