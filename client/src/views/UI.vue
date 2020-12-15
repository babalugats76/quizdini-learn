<template>
  <div class="p-4">
    <h1>Icons</h1>
    <div :style="{ maxWidth: '250px' }">
      <BaseIcon
        class="hello"
        name="watch"
        :full="false"
        :style="{ fill: 'red' }"
        width="24"
        height="24"
      />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";

export default {
  name: "UI",
  components: {
    BaseIcon,
  },
};
</script>

<style lang="scss"></style>
