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
  transition: opacity 150ms cubic-bezier(0.75, 0.25, 0.17, 0.95);
  z-index: 2;
}

.draggable.disabled {
  pointer-events: none;
  opacity: 0.5!important;
}

.draggable.drag {
  cursor: move;
  z-index: 500;
}

.draggable.miss {
  z-index: 3;
}
</style>
