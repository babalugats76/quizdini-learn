/* eslint-disable */
import { getCurrentInstance, onUnmounted, unref } from "vue";
export default function useTimeout(ms, fn) {
  const currentInstance = getCurrentInstance();
  let timeout = null;

  function initiateTimeout() {
    //console.log('inside initiate timeout');
    //console.log('delay', ms);
    clear();
    timeout = setTimeout(() => fn(), unref(ms));
  }

  function clear() {
    //console.log('clearing...');
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
