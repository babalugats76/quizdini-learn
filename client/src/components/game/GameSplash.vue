<template>
  <ui-modal
    class="splash__modal"
    :appear="true"
    :duration="config.timeouts.default"
    :fade-type="referrer === 'loader' ? 'dark-to-light' : 'light-to-dark'"
    :show="showModal"
    @close="$emit('close')"
    @exited="$emit('exited')"
  >
    <div class="splash">
      <div class="splash__header">
        <div class="splash__badge" />
        <header class="splash__title">
          {{ title }}
        </header>
        <div class="splash__subtitle">
          {{ author }}
        </div>
      </div>
      <div class="splash__body">
        <div v-if="$slots.details" class="splash__details">
          <slot name="details" />
        </div>
      </div>
      <div class="splash__footer">
        <button @click.prevent="$emit('close')">
          {{ hasResults ? "Start Game" : "Play Again" }}
        </button>
      </div>
    </div>
  </ui-modal>
</template>

<script>
import { UiModal } from "@ui";

export default {
  name: "GameSplash",
  components: {
    UiModal,
  },
  props: {
    author: {
      type: String,
      default: "",
      required: false,
    },
    config: {
      type: Object,
      default: () => ({
        timeouts: {
          default: 1000,
        },
      }),
      required: false,
    },
    hasResults: {
      type: Boolean,
      default: false,
      required: false,
    },
    referrer: {
      type: String,
      default: "",
      required: false,
    },
    showModal: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["close", "exited"],
};
</script>

<style lang="scss" scoped>
.splash {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: $black-200;
  border-radius: inherit;
  &::before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: inherit;
    background-image: url("~@/assets/images/splash.svg");
    background-repeat: no-repeat;
    background-position-x: 215px;
    background-position-y: 0px;
    background-size: 500px auto;
  }

  &__header {
    flex: 0;
    padding: 1.5rem;
    z-index: 2;
  }

  &__badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
    background-color: $white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 100%;
    background-image: url("~@/assets/images/match-badge-rainbow.svg");
  }

  &__title {
    margin: 0 6rem 0.5rem 0.25rem;
    padding: 0.25rem;
    color: $gray-800;
    font-size: 2.625rem;
    @include font("Montserrat", "extra-bold");
    line-height: 1;
    letter-spacing: $tracking-tight;
    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.6);
  }

  &__subtitle {
    margin-left: 0.375rem;
    font-size: 1.25rem;
    @include font("Montserrat");
    letter-spacing: $tracking-tight;
  }

  &__body {
    flex: 1;
    padding: 0 1.5rem 0.75rem;
    z-index: 2;
  }

  &__footer {
    flex: 0;
    padding: 1rem;
    z-index: 2;
    button {
      background-color: var(--violet);
      color: var(--white);
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      width: 100%;
      font-size: 1.625rem;
      line-height: 2rem;
      @include font("Montserrat", "extra-bold");
      letter-spacing: $tracking-tight;
    }
  }
}

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
