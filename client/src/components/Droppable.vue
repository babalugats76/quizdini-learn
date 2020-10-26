<template>
  <div :id="id" v-html="content" />
</template>

<script>
export default {
  name: "Droppable",
  props: ["content", "disabled", "id"],
};
</script>

<style scoped>
.droppable * {
  pointer-events: none;
}

.droppable {
  z-index: 1;
}

.droppable.disabled {
  pointer-events: none;
}

</style>
