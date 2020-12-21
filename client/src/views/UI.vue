<template>
  <div class="p-4">
    <h1>Icons</h1>
    <div :style="{ maxWidth: '250px', fontSize: '1em', color: 'gray' }">
      <app-icon class="my-custom-class" name="archive" />
      <app-icon class="my-custom-class" name="grid" />
      <app-icon class="my-custom-class" name="watch" />
    </div>
    <h1>Lists</h1>
    <app-list class="ui__list" size="sm">
      <app-list-item dense key="duration" class="duration">
        <app-list-icon icon="watch" />90 seconds
      </app-list-item>
      <app-list-item dense key="itemsPerBoard" class="items-per-board">
        <app-list-icon icon="grid" />4 per board
      </app-list-item>
      <app-list-item dense key="terms" class="terms">
        <app-list-icon icon="archive" />100 terms
      </app-list-item>
    </app-list>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon";
import AppList from "@/components/AppList";
import AppListItem from "@/components/AppListItem";
import AppListIcon from "@/components/AppListIcon";

export default {
  name: "UI",
  components: {
    AppIcon,
    AppList,
    AppListItem,
    AppListIcon,
  },
};
</script>

<style lang="scss"></style>
