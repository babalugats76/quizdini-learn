/* eslint-disable */
import { getCurrentInstance, onUnmounted } from "vue";
export default function useTimeout() {
  const currentInstance = getCurrentInstance();
  let timeout = null;

  function initiateTimeout(ms, cb) {
    clear();
    timeout = setTimeout(() => {
      cb();
    }, ms);
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
