import { watch } from "vue";
import useTimeout from "./useTimeout";

export default function useTimeoutFn(cb, ms = 1000) {
  const [start, stop, expired] = useTimeout(ms);

  watch(
    expired,
    (maturity) => {
      maturity && cb();
    },
    { immediate: true }
  );

  return [start, stop, expired];
}
