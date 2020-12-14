<template>
  <div :id="id" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Droppable",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  computed: {
    classes() {
      return {
        droppable: true,
        "droppable--active": this.active,
        "droppable--disabled": this.disabled,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.draggable {
  z-index: 1;

  * {
    pointer-events: none;
  }

  &--disabled {
    pointer-events: none;
  }
}
</style>
