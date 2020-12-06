<template>
  <Modal
    :appear="true"
    :show="showModal"
    @close="$emit('close')"
    @exited="$emit('exited')"
  >
    <template v-slot:body>
      <button @click.prevent="$emit('close')">Start Game</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/game/Modal";

export default {
  name: "Splash",
  components: {
    Modal,
  },
  props: ["config", "showModal"],
  emits: ["close", "exited"],
};
</script>

<style lang="scss" scoped>
.splash-enter-active,
.splash-enter-from {
  opacity: 0;
  transition: opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-enter-to {
  opacity: 1;
}

.splash-leave-active,
.splash-leave-from {
  opacity: 1;
  transition: opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-leave-to {
  opacity: 0;
}
</style>
