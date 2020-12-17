<template>
  <BaseModal
    :appear="true"
    :show="showModal"
    @close="$emit('close')"
    @exited="$emit('exited')"
  >
    <template v-slot:body>
      <div
        class="detail splash__detail"
        :style="{ fontSize: '1.25rem', color: 'gray' }"
      >
        <span class="detail__item">
          <BaseIcon class="detail__icon term-count" name="archive" />
          {{ termCount }} terms
        </span>
        <span class="detail__item">
          <BaseIcon class="detail__icon items-per-board" name="grid" />
          {{ itemsPerBoard }} per board
        </span>
        <span class="detail__item">
          <BaseIcon class="detail__icon duration" name="watch" />
          {{ duration }} seconds
        </span>
      </div>
    </template>
    <template v-slot:footer>
      <button @click.prevent="$emit('close')">Start Game</button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import BaseIcon from "@/components/BaseIcon";

export default {
  name: "Splash",
  components: {
    BaseIcon,
    BaseModal,
  },
  props: ["config", "duration", "itemsPerBoard", "showModal", "termCount"],
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

.detail {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1.125rem;
  text-align: center;
  color: gray;
  + .detail {
    margin-left: 0.5rem;
  }
  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem auto;
    font-family: Montserrat;
    letter-spacing: -1px;
  }
  &__icon {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1.75rem;
  }
}
</style>
