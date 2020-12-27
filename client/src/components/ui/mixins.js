/*export function setTextColor(color) {
  if (!color) return;
  const [colorName, colorModifier] = color.trim().split(" ", 2);
  return color ? "text-" + colorName + (colorModifier ? " " + colorModifier : "") : "";
}

export default {
  setTextColor,
};*/

export const color = {
  props: ["color"],
  methods: {
    getTextColor(prefix = "text-") {
      if (!this.color) return;
      const [colorName, colorModifier] = this.color.trim().split(" ", 2);
      return prefix + colorName + (colorModifier ? " " + colorModifier : "");
    },
  },
};

export default {
  color,
};
