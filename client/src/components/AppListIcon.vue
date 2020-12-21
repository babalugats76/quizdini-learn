<template>
  <app-icon :class="classes" :name="icon" />
</template>

<script>
import AppIcon from "@/components/AppIcon";

export default {
  name: "app-list-icon",
  components: {
    AppIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        list__icon: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.list__icon {
  font-size: 1.25em;
}

.list__item > .list__icon {
  margin-right: 0.375rem;
  vertical-align: -0.1875em;
}
</style>
