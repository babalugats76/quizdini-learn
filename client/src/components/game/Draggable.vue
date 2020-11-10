<template>
  <div :id="id" :class="classnames">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Draggable",
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
    classnames() {
      return {
        draggable: true,
        "draggable--active": this.active,
        "draggable--disabled": this.disabled,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.draggable {
  transition: opacity 150ms cubic-bezier(0.75, 0.25, 0.17, 0.95);
  z-index: 2;

  * {
    pointer-events: none;
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.5 !important;
  }

  &--active {
    cursor: move;
    z-index: 500;
  }
}
</style>
