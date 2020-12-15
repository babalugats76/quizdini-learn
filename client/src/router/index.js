import { createWebHistory, createRouter } from "vue-router";

import { Match } from "@/games";
import Matches from "@/views/Matches";
import UI from "@/views/UI";

const routes = [
  {
    path: "/",
    name: "ui",
    component: UI,
    props: false,
  },
  {
    path: "/",
    name: "matches",
    component: Matches,
    props: false,
  },
  {
    path: "/match/:id",
    name: "match",
    component: Match,
    props: false,
  },
  {
    path: "/ui",
    name: "ui",
    component: UI,
    props: false,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
