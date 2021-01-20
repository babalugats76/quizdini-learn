/* eslint-disable */
import { getCurrentInstance, onUnmounted, ref } from "vue";

export default function useTimeout(ms = 1000) {
  const currentInstance = getCurrentInstance();
  const expired = ref(false);
  let timeout = null;

  function setTimer() {
    //console.log("setting timer");
    clear();
    timeout = setTimeout(() => {
      //console.log("timer expired");
      expired.value = true;
    }, ms);
  }

  function clear() {
    //console.log("clearing timer");
    expired.value = false;
    clearTimeout(timeout);
  }

  if (currentInstance) {
    onUnmounted(() => {
      console.log("cleaning up timer");
      clear();
    });
  }

  const start = setTimer;
  const stop = clear;

  return [start, stop, expired];
}
