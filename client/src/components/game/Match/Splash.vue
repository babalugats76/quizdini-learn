<template>
  <div>
    <button @click.prevent="onClickStart">Start Game</button>
  </div>
</template>

<script>
export default {
  name: "Splash",
  methods: {
    onClickStart() {
      this.$emit("start");
    },
  },
};
</script>

<style lang="scss" scoped></style>
