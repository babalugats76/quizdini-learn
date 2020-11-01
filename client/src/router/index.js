/* eslint-disable no-unused-vars */
import { createWebHistory, createRouter } from "vue-router";
import { Match, Matches } from "@/components/";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
