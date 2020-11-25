<template>
  <component
    :active="active"
    :class="tileClasses"
    :disabled="disabled"
    :id="id"
    :is="is"
    :style="style"
  >
    <div
      :class="bodyClasses"
      :data-has-html="hasHtml"
      :data-length="length"
      :data-max-word-length="maxWordLength"
      v-html="content"
    />
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
    color: {
      type: String,
      required: false,
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
    hasHtml: {
      type: Boolean,
      required: false,
    },
    id: {
      required: false,
    },
    is: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: false,
    },
    maxWordLength: {
      type: Number,
      required: false,
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
    bodyClasses() {
      return {
        tile__body: true,
        [`tile__body--has-long-word`]: this.maxWordLength >= 11,
      };
    },
    tileClasses() {
      return {
        tile: true,
        [`tile--${this.type}`]: this.type,
        [this.color]: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
