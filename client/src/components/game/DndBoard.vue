<template>
  <div ref="dndRef" :class="classes">
    <slot />
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import useDnd from "@/compose/useDnd";

export default {
  name: "DndBoard",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    config: {
      type: Object,
      default: () => ({
        debug: false,
        timeouts: {
          throttle: 33,
        },
      }),
      required: false,
    },
  },
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
  computed: {
    classes() {
      return {
        "dnd-board": true,
        "dnd-board--active": this.active,
      };
    },
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
