<template>
  <component :is="`${$props.tag}`" :class="classes">
    <slot />
  </component>
</template>
;

<script>
export default {
  name: "app-list-item",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    dense: {
      type: Boolean,
    },
  },
  computed: {
    classes() {
      return {
        list__item: true,
        "list__item--dense": this.dense,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.list__item {
  font-size: 1.25em;
  line-height: 1.25;
  font-family: "Montserrat";
  font-weight: 500;
  letter-spacing: 0em;
  &--dense {
    letter-spacing: $tracking-tight;
  }
  + .list__item {
    margin-top: 0.5rem;
  }
}
</style>
