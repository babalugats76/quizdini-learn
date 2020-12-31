<script>
import classnames from "classnames";
import UiIcon from "@/components/ui/UiIcon";
import { color, size } from "./mixins";

export const UiList = {
  name: "ui-list",
  mixins: [color, size],
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  data: function () {
    return {
      staticClass: "ui-list",
    };
  },
  render() {
    const Tag = `${this.tag}`;
    const classes = classnames(
      this.staticClass,
      this.sizeClasses,
      this.colorClasses
    );
    return <Tag class={classes}>{this.$slots.default()}</Tag>;
  },
};

export const UiListItem = {
  name: "ui-list-item",
  mixins: [color],
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
  data: function () {
    return {
      staticClass: "ui-list__item",
    };
  },
  computed: {
    classes() {
      return {
        [`${this.staticClass}`]: true,
        "ui-list__item--dense": this.dense,
        [`ui-list__item--${this.id}`]: this.id,
        ...this.colorClasses,
      };
    },
  },
  render() {
    const Tag = `${this.tag}`;
    return <Tag class={this.classes}>{this.$slots.default()}</Tag>;
  },
};

export const UiListIcon = {
  name: "ui-list-icon",
  components: "UiIcon",
  mixins: [color],
  props: {
    color: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data: function () {
    return {
      staticClass: ["ui-list__icon"],
    };
  },
  render() {
    const classes = classnames(this.staticClass, this.colorClasses);
    return <UiIcon class={classes} name={this.name} />;
  },
};

export default UiList;
</script>

<style lang="scss">
$list-sizes: (
  "xs": 0.75rem,
  "sm": 0.875rem,
  "base": 1rem,
  "lg": 1.1875rem,
  "xl": 1.375rem,
);

.ui-list {
  display: block;
  padding-left: 0.75rem;
  @include font-sizes($list-sizes);
  &__item {
    $item: &;
    font-size: 1.25em;
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
