export const size = {
  props: {
    size: {
      type: String,
      default: "base",
    },
  },
  computed: {
    sizeClasses() {
      return {
        [`size--${this.size}`]: this.size,
      };
    },
  },
};

export const color = {
  props: ["color"],
  computed: {
    colorClasses() {
      if (!this.color) return;
      const [color, modifier] = this.color.trim().split(" ", 2);
      return {
        [`${color}--text`]: color,
        [`text--${modifier}`]: modifier,
      };
    },
    bgColorClasses() {
      if (!this.color) return;
      const [color, modifier] = this.color.trim().split(" ", 2);
      return [color, modifier || ""];
    },
  },
};

export default {
  color,
  size,
};
