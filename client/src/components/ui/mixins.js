export const size = {
  props: {
    xSmall: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    medium: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    xLarge: {
      type: Boolean,
    },
    size: {
      type: String,
      default: "md",
    },
  },
  computed: {
    sizeClasses() {
      return {
        [`size--xs`]: this.xSmall,
        [`size--sm`]: this.small,
        [`size--md`]: this.medium,
        [`size--lg`]: this.large,
        [`size--xl`]: this.xLarge,
        [`size--${this.size}`]:
          this.size &&
          !this.xSmall &&
          !this.small &&
          !this.medium &&
          !this.large &&
          !this.xLarge,
      };
    },
  },
};

export const color = {
  props: ["color"],
  computed: {
    bgColorClasses() {
      return {
        [`bg-${this.color}`]: this.color,
      };
    },
    borderColorClasses() {
      return {
        [`border-${this.color}`]: this.color,
      };
    },
    colorClasses() {
      return {
        [`text-${this.color}`]: this.color,
      };
    },
  },
};

export default {
  color,
  size,
};
