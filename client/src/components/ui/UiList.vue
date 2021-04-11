<script>
import UiIcon from "./UiIcon";
import { color, size } from "@mixins";

export const UiList = {
  name: "UiList",
  mixins: [color, size],
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    classes() {
      return {
        "ui-list": true,
        ...this.colorClasses,
        ...this.sizeClasses,
      };
    },
  },
  render() {
    const Tag = `${this.tag}`;
    return <Tag class={this.classes}>{this.$slots.default()}</Tag>;
  },
};

export const UiListItem = {
  name: "UiListItem",
  mixins: [color, size],
  props: {
    dense: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    id: {
      type: String,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  computed: {
    classes() {
      return {
        "ui-list__item": true,
        "ui-list__item--dense": this.dense,
        [`ui-list__item--${this.id}`]: this.id,
        ...this.colorClasses,
        ...this.sizeClasses,
      };
    },
  },
  render() {
    const Tag = `${this.tag}`;
    return <Tag class={this.classes}>{this.$slots.default()}</Tag>;
  },
};

export const UiListIcon = {
  name: "UiListIcon",
  components: "UiIcon",
  mixins: [color],
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    classes() {
      return {
        "ui-list__icon": true,
        ...this.colorClasses,
      };
    },
  },
  render() {
    return <UiIcon class={this.classes} name={this.name} />;
  },
};

export default UiList;
</script>

<style lang="scss">
$list-sizes: (
  "xs": 0.75rem,
  "sm": 0.875rem,
  "md": 1rem,
  "lg": 1.1875rem,
  "xl": 1.375rem,
);

$list-item-sizes: (
  "xs": 0.9375em,
  "sm": 1.0625em,
  "md": 1.25em,
  "lg": 1.375em,
  "xl": 1.5em,
  "2xl": 1.75em,
);

.ui-list {
  display: block;
  padding-left: 0.75rem;
  @include sizes($list-sizes);
  &__item {
    $item: &;
    @include sizes($list-item-sizes);
    line-height: 1.25;
    @include font("Montserrat", "medium");
    letter-spacing: 0em;
    &--dense {
      letter-spacing: $tracking-tight;
    }
    + #{$item} {
      margin-top: 0.5rem;
    }
  }
  &__icon {
    font-size: 1.25em;
  }
  &__item > &__icon {
    margin-right: 0.375rem;
    vertical-align: -0.1875em;
  }
}
</style>
