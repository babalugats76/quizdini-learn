<template>
  <div class="p-4">
    <h1>Icons</h1>
    <div :style="{ maxWidth: '250px', fontSize: '1em', color: 'gray' }">
      <BaseIcon class="my-custom-class" name="archive" />
      <BaseIcon class="my-custom-class" name="grid" />
      <BaseIcon class="my-custom-class" name="watch" />
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
