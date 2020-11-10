<template>
  <component
    :active="active"
    :class="classnames"
    :disabled="disabled"
    :id="id"
    :is="is"
    :style="style"
  >
    <div class="tile__body" v-html="content" />
  </component>
</template>

<script>
import Draggable from "../Draggable";
import Droppable from "../Droppable";

export default {
  name: "Tile",
  components: {
    Draggable,
    Droppable,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    content: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    id: {
      required: false,
    },
    is: {
      type: String,
      required: true,
    },
    style: {
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
  computed: {
    classnames() {
      return {
        tile: true,
        [`tile--${this.type}`]: this.type,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
