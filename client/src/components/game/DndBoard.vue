<template>
  <div class="dnd-board" ref="dndRef">
    <slot />
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import useDnd from "@/use/dnd";

export default {
  name: "DndBoard",
  props: ["active", "config"],
  setup(props, { emit }) {
    const dndRef = ref(null);
    const { active } = toRefs(props);
    return {
      ...props.config,
      ...useDnd({
        active,
        element: dndRef,
        throttleMs: props.config.timeouts.throttle,
        debug: props.config.debug,
        emit,
      }),
      dndRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.dnd-board {
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}
</style>
