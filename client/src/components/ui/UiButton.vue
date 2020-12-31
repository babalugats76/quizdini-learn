<script>
import classnames from "classnames";

export const UiButton = {
  name: "ui-button",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  data: function () {
    return {
      staticClass: "ui-btn",
    };
  },
  render() {
    const classes = classnames(this.staticClass, {
      [`${this.staticClass}--disabled`]: this.disabled,
    });
    return <button class={classes}>{this.$slots.default()}</button>;
  },
};
export default UiButton;
</script>

<style lang="scss">
$btn-sizes: (
  "xs": 0.75rem,
  "sm": 0.875rem,
  "md": 1rem,
  "lg": 1.1875rem,
  "xl": 1.375rem,
);

$btn-border-radius: 0.5rem;

.ui-btn {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: $btn-border-radius;
  letter-spacing: $tracking-tight;
  @include font-size($btn-sizes, "md"); // the "default"
  outline: 0;
  &--disabled,
  &:disabled {
    opacity: 0.15;
  }
  &--active,
  &:active {
    opacity: 0.85;
  }
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    opacity: 0.5;
  }
}
</style>
