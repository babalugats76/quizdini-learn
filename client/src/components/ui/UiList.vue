<script>
import classnames from "classnames";

import UiIcon from "@/components/ui/UiIcon";

export const UiList = {
  name: "ui-list",
  props: {
    size: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  render() {
    const Tag = `${this.tag}`;
    return (
      <Tag
        class={classnames("ui-list", { [`ui-list--${this.size}`]: this.size })}
      >
        {this.$slots.default()}
      </Tag>
    );
  },
};

export const UiListItem = {
  name: "ui-list-item",
  components: "UiIcon",
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
  render() {
    const Tag = `${this.tag}`;
    return (
      <Tag
        class={classnames("ui-list__item", {
          "ui-list__item--dense": this.dense,
          [`ui-list__item--${this.id}`]: this.id,
        })}
      >
        {this.icon && (
          <UiIcon class={classnames("ui-list__icon")} name={this.icon} />
        )}
        {this.$slots.default()}
      </Tag>
    );
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

.ui-list {
  display: block;
  padding-left: 0.75rem;
  @include fontSize($list-sizes, "md"); // the "default"
  @include sizes($list-sizes);
  &__item {
    $item: &;
    font-size: 1.25em;
    line-height: 1.25;
    font-family: "Montserrat";
    font-weight: 500;
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