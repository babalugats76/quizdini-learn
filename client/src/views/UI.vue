<template>
  <div class="p-4">
    <h1>Icons</h1>
    <div :style="{ maxWidth: '250px', fontSize: '1em', color: 'gray' }">
      <app-icon class="my-custom-class" name="archive" />
      <app-icon class="my-custom-class" name="grid" />
      <app-icon class="my-custom-class" name="watch" />
    </div>
    <h1>Lists</h1>
    <my-list
      class="splash__details"
      :style="{ color: 'red' }"
      :items="[
        { id: 'duration', icon: 'watch', content: '90 seconds' },
        { id: 'items-per-board', icon: 'grid', content: '9 per board' },
      ]"
    ></my-list>
  </div>
</template>

<script>
import { UiList, UiListItem } from "@/components/UiList.vue";

const MyList = ({ items, ...rest }) => (
  <UiList {...rest}>
    {items.map((item) => {
      const { content, id, ...rest } = item;
      return (
        <UiListItem dense key={id} {...rest}>
          {content}
        </UiListItem>
      );
    })}
  </UiList>
);

export default {
  name: "UI",
  components: {
    // AppIcon,
    // AppList,
    //AppListItem,
    // AppListIcon,
    MyList,
    //UiList,
    //UiListItem,
  },
};
</script>

<style lang="scss"></style>
