<template>
  <component :is="'teleport'" to="#quizdini__modals">
    <Modal :appear="true" :show="showModal" v-bind="$attrs">
      <button @click.prevent="onClickStart">Start Game</button>
    </Modal>
  </component>
</template>

<script>
import Modal from "@/components/game/Modal";

export default {
  inheritAttrs: false,
  name: "Splash",
  components: {
    Modal,
  },
  props: ["config", "showModal"],
  methods: {
    onClickStart() {
      this.$emit("start");
    },
  },
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
