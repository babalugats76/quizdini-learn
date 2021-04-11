import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "./global";

createApp(App).use(router).use(components).mount("#quizdini");
