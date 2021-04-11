<template>
  <div>
    <router-link to="/" exact> Home </router-link>
    <section>
      <p>Just timer...</p>
      <h1 :style="{ color: timeoutExpired ? 'lime' : 'red' }">READY: {{ timeoutExpired }}</h1>
      <h2>Milliseconds: {{ ms }}</h2>
      <input type="button" value="Set Timeout" @click="startTimeout()" />
      <input type="button" value="Stop Timeout" @click="stopTimeout()" />
    </section>
    <hr />
    <section>
      <p>Timer with function</p>
      <h1 :style="{ color: timeoutExpiredFn ? 'lime' : 'red' }">READY: {{ timeoutExpiredFn }}</h1>
      <h2>Milliseconds: {{ ms }}</h2>
      <h2>TOTAL: {{ totalFn }}</h2>
      <input type="button" value="Set Timeout" @click="startTimeoutFn()" />
      <input type="button" value="Stop Timeout" @click="stopTimeoutFn()" />
    </section>
    <hr />
    <section>
      <p>Use inside a function</p>
      <h2>TOTAL: {{ total }}</h2>
      <input type="button" value="Increment" @click="increment()" />
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import {
  // computed,
  // nextTick,
  toRef,
  toRefs,
  ref,
  // reactive,
  // unref,
  // watch,
  // watchEffect,
} from "vue";

import { useTimeout, useTimeoutFn } from "@hooks";

export default {
  name: "TimeoutTest",
  props: {
    ms: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    const total = ref(0);
    const totalFn = ref(0);
    const { ms } = props;
    const [startTimeout, stopTimeout, timeoutExpired] = useTimeout(ms);

    const [startTimeoutFn, stopTimeoutFn, timeoutExpiredFn] = useTimeoutFn(
      () => totalFn.value++,
      ms
    );

    const incrementAfterPause = function (val = 10) {
      const [run, ,] = useTimeoutFn(() => (total.value += val), 1000);
      run();
    };

    return {
      startTimeout,
      stopTimeout,
      timeoutExpired,
      startTimeoutFn,
      stopTimeoutFn,
      timeoutExpiredFn,
      increment: incrementAfterPause,
      totalFn,
      total,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0.25rem;
  margin: 0.25rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.75rem;
}

a {
  text-decoration: underline;
  color: blue;
}
</style>
