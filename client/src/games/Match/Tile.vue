<template>
  <component
    :is="is"
    :id="id"
    :active="active"
    :class="tileClasses"
    :disabled="disabled"
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
import { DragItem, DropItem } from "@/components/";

export default {
  name: "Tile",
  components: {
    DragItem,
    DropItem,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    color: {
      type: String,
      default: "",
      required: false,
    },
    content: {
      type: String,
      default: "",
      required: false,
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    dragging: {
      type: Boolean,
      required: false,
    },
    hasHtml: {
      type: Boolean,
      required: false,
    },
    hit: {
      type: Boolean,
      required: false,
    },
    id: {
      type: [String, Number],
      required: true,
    },
    is: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    maxWordLength: {
      type: Number,
      required: true,
    },
    miss: {
      type: Boolean,
      required: false,
    },
    over: {
      type: Boolean,
      required: false,
    },
    style: {
      type: Object,
      default: () => ({}),
      required: false,
    },
    type: {
      validator: function (value) {
        return ["term", "definition"].indexOf(value) !== -1;
      },
      required: true,
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
        hit: this.hit,
        miss: this.miss,
        drag: this.dragging,
        over: this.over,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
