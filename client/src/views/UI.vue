<template>
  <div class="p-4 montserrat">
    <h1>Icons</h1>
    <h2>Colors</h2>
    <div :style="{ color: 'black' }">
      <ui-icon class="my-custom-class" name="archive" color="dark" />
      <ui-icon class="text-white bg-blue" name="grid" color="light" />
      <ui-icon class="my-custom-class" name="watch" color="primary" />
      <ui-icon class="my-custom-class" name="check" color="success" />
      <ui-icon class="my-custom-class" name="x" color="danger" />
      <ui-icon class="my-custom-class" name="award" color="yellow-600" />
    </div>
    <h2>Full Width</h2>
    <div
      :style="{
        display: 'inline-block',
        width: '100px',
        height: '100px',
        verticalAlign: 'middle',
      }"
    >
      <ui-icon full name="archive" color="success" />
    </div>
    <div
      :style="{
        display: 'inline-block',
        width: '50px',
        height: '50px',
        verticalAlign: 'middle',
      }"
    >
      <ui-icon full name="grid" color="primary" />
    </div>
    <div
      :style="{
        display: 'inline-block',
        width: '25px',
        height: '25px',
        verticalAlign: 'middle',
      }"
    >
      <ui-icon full name="watch" color="quaternary" />
    </div>
    <hr />
    <h1>Lists</h1>
    <ui-list>
      <ui-list-item dense>
        <ui-list-icon name="check" color="success" />Good Stuff
      </ui-list-item>
      <ui-list-item dense>
        <ui-list-icon name="x" color="danger" />Bad Stuff
      </ui-list-item>
    </ui-list>
    <hr />
    <h1>Buttons</h1>
    <h2>Themes</h2>
    <ui-button primary>Primary</ui-button>
    <ui-button secondary>Secondary</ui-button>
    <ui-button tertiary>Tertiary</ui-button>
    <ui-button quaternary>Quaternary</ui-button>
    <ui-button light>Light</ui-button>
    <ui-button dark>Dark</ui-button>
    <ui-button alert>Alert</ui-button>
    <ui-button danger>Danger</ui-button>
    <ui-button error>Error</ui-button>
    <ui-button negative>Negative</ui-button>
    <ui-button warning>Warning</ui-button>
    <ui-button info>Info</ui-button>
    <ui-button success>Success</ui-button>
    <ui-button positive>Positive</ui-button>
    <ui-button>Default</ui-button>
    <h2>Themes (Disabled)</h2>
    <ui-button primary disabled>Primary</ui-button>
    <ui-button secondary disabled>Secondary</ui-button>
    <ui-button tertiary disabled>Tertiary</ui-button>
    <ui-button quaternary disabled>Quaternary</ui-button>
    <ui-button light disabled>Light</ui-button>
    <ui-button dark disabled>Dark</ui-button>
    <ui-button alert disabled>Alert</ui-button>
    <ui-button danger disabled>Danger</ui-button>
    <ui-button error disabled>Error</ui-button>
    <ui-button negative disabled>Negative</ui-button>
    <ui-button warning disabled>Warning</ui-button>
    <ui-button info disabled>Info</ui-button>
    <ui-button success disabled>Success</ui-button>
    <ui-button positive disabled>Positive</ui-button>
    <ui-button disabled>Default</ui-button>
  </div>
</template>

<script>
import {
  UiButton,
  UiIcon,
  UiList,
  UiListItem,
  UiListIcon,
} from "@/components/";
export default {
  name: "UI",
  components: {
    UiButton,
    UiIcon,
    UiList,
    UiListIcon,
    UiListItem,
  },
};
</script>

<style lang="scss">
hr {
  background-color: $gray-500;
  margin: 1rem 0;
  height: 1px;
}
</style>
