<template>
  <div class="p-4">
    <h1>Icons</h1>
    <div :style="{ maxWidth: '250px', fontSize: '1em', color: 'gray' }">
      <ui-icon class="my-custom-class" name="archive" />
      <ui-icon class="my-custom-class" name="grid" />
      <ui-icon class="my-custom-class" name="watch" />
    </div>
    <h1>Lists</h1>
    <my-list
      class="splash__details"
      :style="{ color: 'red' }"
      :items="[
        { id: 'duration', icon: 'watch', content: '90 seconds' },
        { id: 'items-per-board', icon: 'grid', content: '9 per board' },
        { id: 'term-count', icon: 'archive', content: '100 terms' },
      ]"
    ></my-list>
  </div>
</template>

<script>
import { UiIcon, UiList, UiListItem } from "@/components/";

const MyList = ({ items, ...rest }) => (
  <UiList {...rest}>
    {items.map((item) => {
      const { content, id, ...rest } = item;
      return (
        <UiListItem dense key={id} id={id} {...rest}>
          {content}
        </UiListItem>
      );
    })}
  </UiList>
);

export default {
  name: "UI",
  components: {
    UiIcon,
    MyList,
  },
};
</script>

<style lang="scss"></style>
