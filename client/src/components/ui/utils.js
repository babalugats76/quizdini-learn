export function setTextColor(color) {
  if (!color) return;
  const [colorName, colorModifier] = color.trim().split(" ", 2);
  return color
    ? "text-" + colorName + (colorModifier ? " " + colorModifier : "")
    : "";
}

export default {
  setTextColor,
};
