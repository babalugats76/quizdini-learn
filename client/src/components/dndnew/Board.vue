<template>
  <div class="dnd-board" ref="dndRef">
    <slot />
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import useDnD from "@/use/dnd";

export default {
  name: "Board",
  props: ["active", "config"],
  setup(props, { emit }) {
    const dndRef = ref(null);
    const { active } = toRefs(props);
    return {
      ...props.config,
      ...useDnD({
        active,
        element: dndRef,
        ...props.config, // only works in flattened out test version
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
