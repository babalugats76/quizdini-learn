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
    getTextColor() {
      if (!this.color) return;
      const [color, modifier] = this.color.trim().split(" ", 2);
      return [color + "--text", modifier ? "text--" + modifier : ""];
    },
  },
};

export default {
  color,
};
