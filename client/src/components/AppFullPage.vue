<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppFullPage",
  props: {
    primary: {
      type: Boolean,
    },
  },
  computed: {
    classes() {
      return {
        page: true,
        "page--primary": this.primary,
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
