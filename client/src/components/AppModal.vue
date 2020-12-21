<template>
  <div class="modal">
    <teleport to="#modals">
      <transition
        :appear="appear"
        :duration="duration"
        name="modal"
        @after-leave="$emit('exited')"
      >
        <div
          v-if="show"
          class="modal__mask"
          :style="{
            transitionDuration: `${duration}ms`,
            animationDuration: `${duration}ms`,
          }"
        >
          <div class="modal__wrapper">
            <div
              v-bind="$attrs"
              class="modal__container"
              :style="{ transitionDuration: `${duration}ms` }"
            >
              <slot />
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "app-modal",
  inheritAttrs: false,
  props: ["appear", "duration", "show"],
  emits: ["close", "exited"],
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-enter-from,
.modal-enter-to,
.modal-leave-active,
.modal-leave-from,
.modal-leave-to {
  transition: transform 1s cubic-bezier(0.45, 1.28, 0.39, 0.78),
    opacity 1s ease-in-out, background-color 1s ease-in-out;
}

.modal-enter-active .modal__container,
.modal-enter-from .modal__container {
  opacity: 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}

.modal-enter-to .modal__container {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.modal-leave-active .modal__container,
.modal-leave-from .modal__container {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.modal-leave-to .modal__container {
  opacity: 0;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

.modal {
  &__mask {
    $mask: &;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: table;
    @include bgColor($zaffre, 0.35);
    @at-root #{$mask}.modal-enter-active,
      #{$mask}.modal-enter-from {
      @include bgColor($zaffre, 1);
    }
    @at-root #{$mask}.modal-enter-to {
      @include bgColor($zaffre, 0.35);
    }
    @at-root #{$mask}.modal-leave-active,
      #{$mask}.modal-leave-from {
      @include bgColor($zaffre, 0.35);
    }
    @at-root #{$mask}.modal-leave-to {
      @include bgColor($zaffre, 0);
    }
  }

  &__wrapper {
    display: table-cell;
    padding: 1rem;
    vertical-align: middle;
  }

  &__container {
    display: flex;
    width: 100%;
    max-width: 500px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 0.875rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    font-family: Helvetica, Arial, sans-serif;
  }
}
</style>
