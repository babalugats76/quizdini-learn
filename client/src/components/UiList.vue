<script>
//import { h } from "vue";
import classnames from "classnames";

//import AppIcon from "@/components/AppIcon";

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
      <Tag class={classnames("ui-list", `ui-list--${this.size}`)}>
        {this.$slots.default()}
      </Tag>
    );
    /*return h(
      this.tag,
      {
        class: classnames("ui-list", `ui-list--${this.size}`),
      },
      this.$slots.default()
    );*/
  },
};

export const UiListItem = {
  name: "ui-list-item",
  props: {
    dense: {
      type: Boolean,
    },
    id: {
      type: [String, Number],
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
        {this.$slots.default()}
      </Tag>
    );

    /*return h(
      this.tag,
      {
        class: classnames("ui-list__item", {
          "ui-list__item--dense": this.dense,
        }),
      },
      this.$slots.default()
    );*/
  },
};

export const UiListIcon = {};

export default UiList;
</script>

<style lang="scss">
$list-padding: 0 0 0 0.75rem;
$list-sizes: (
  "xs": 0.75rem,
  "sm": 0.875rem,
  "md": 1rem,
  "lg": 1.1875rem,
  "xl": 1.375rem,
);

.ui-list {
  display: block;
  padding: $list-padding;
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
}
</style>
