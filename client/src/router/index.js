import { createWebHistory, createRouter } from "vue-router";

import { Match } from "@/games";
import Matches from "@/views/Matches";

const routes = [
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
  /*{
    path: "/newmatch/:id",
    name: "newmatch",
    component: NewMatch,
    props: false,
  },*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
