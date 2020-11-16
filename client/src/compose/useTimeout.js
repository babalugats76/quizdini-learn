/* eslint-disable */
import { getCurrentInstance, onUnmounted, unref } from "vue";
export default function useTimeout(ms, cb) {
  const currentInstance = getCurrentInstance();
  let timeout = null;

  function initiateTimeout() {
    clear();
    timeout = setTimeout(() => {
      ((arguments && cb(...arguments)) || cb)();
    }, unref(ms));
  }

  function clear() {
    clearTimeout(timeout);
  }

  //initiateTimeout();

  if (currentInstance) {
    onUnmounted(() => {
      console.log("cleaning up!");
      timeout && clear();
    });
  } else {
    console.log("not in current instance");
  }

  return [clear, initiateTimeout];
}
