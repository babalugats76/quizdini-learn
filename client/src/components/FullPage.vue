<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FullPage",
  props: {
    theme: {
      type: String,
      required: false,
      default: "primary",
    },
  },
  computed: {
    classes() {
      return {
        page: true,
        [`page--${this.theme}`]: this.theme,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  height: 100vh;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &--primary {
    background-color: var(--primary);
  }
}
</style>
