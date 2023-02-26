import { createRouter, createWebHistory } from "vue-router";

import routerHome from "./home";
import routerAbout from "./about";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [routerHome, routerAbout],
});

export default router;
