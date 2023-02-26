import { RouteRecordRaw } from "vue-router";
import HomeView from "../../views/home/HomeView.vue";

const routerHome: RouteRecordRaw = {
  path: "/",
  name: "home",
  component: HomeView,
};

export default routerHome;
