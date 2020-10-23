<template>
  <div :id="id" v-html="content" />
</template>

<script>
export default {
  name: "Draggable",
  props: ["content", "id"],
};
</script>

<style scoped>
.draggable * {
  pointer-events: none;
}

.draggable {
  z-index: 2;
}

.draggable.disabled {
  pointer-events: none;
  opacity: 0.85;
}

.draggable.drag {
  cursor: move;
  z-index: 500;
}

.draggable.miss {
  z-index: 3;
}
</style>
