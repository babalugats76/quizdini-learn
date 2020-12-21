<template>
  <div class="p-4">
    <h1>Icons</h1>
    <div :style="{ maxWidth: '250px', fontSize: '1em', color: 'gray' }">
      <app-icon class="my-custom-class" name="archive" />
      <app-icon class="my-custom-class" name="grid" />
      <app-icon class="my-custom-class" name="watch" />
    </div>
    <h1>Lists</h1>
    <ui-list
      class="my-new-ui-component"
      tag="div"
      size="xl"
      :style="{ color: 'red' }"
    >
      <ui-list-item
        :style="{ display: 'inline-block' }"
        id="yo"
        key="yo"
        dense
        class="duration"
        >bluh</ui-list-item
      >
    </ui-list>
    <my-list
      class="splash__details"
      size="xs"
      :style="{ color: 'red' }"
      :items="[
        { id: 'duration', icon: 'watch', label: '90 seconds' },
        { id: 'items-per-board', icon: 'grid', label: '9 per board' },
      ]"
    ></my-list>
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
import { UiList, UiListItem } from "@/components/UiList.vue";

const MyList = ({ items, size, ...rest }) => (
  <UiList tag="div" size={size} {...rest}>
    {items.map((item) => {
      const { icon = "", id, label, tag = "div", ...rest } = item;
      return (
        <UiListItem dense tag={tag} key={id} id={id} icon={icon} {...rest}>
          {label}
        </UiListItem>
      );
    })}
  </UiList>
);

export default {
  name: "UI",
  components: {
    AppIcon,
    AppList,
    AppListItem,
    AppListIcon,
    MyList,
    UiList,
    UiListItem,
  },
};
</script>

<style lang="scss"></style>
