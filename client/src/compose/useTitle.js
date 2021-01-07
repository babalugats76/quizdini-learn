import { unref, watchEffect } from "vue";

export default function useTitle(title) {
  watchEffect(function () {
    document.title =
      process.env.VUE_APP_WEBSITE_NAME + " - " + unref(title) || "loading...";
  }, title);
}
