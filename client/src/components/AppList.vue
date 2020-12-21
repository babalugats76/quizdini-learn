<template>
  <component :is="`${$props.tag}`" :class="classes">
    <slot />
  </component>
</template>
;

<script>
export default {
  name: "app-list",
  props: {
    size: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    classes() {
      return {
        list: true,
        [`list--${this.size}`]: this.size,
      };
    },
  },
  /*setup(props, { slots,  attrs,  emit }) {
    const classes = {
      list: true,
    };
    return () => h(props.tag, { class: classes }, slots.default());
  },*/
};
</script>

<style lang="scss" scoped>
.list {
  display: block;
  padding: $list-padding;
  @include getSize($list-sizes, "md");
  @include sizes($list-sizes);
}
</style>
