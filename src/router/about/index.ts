import { RouteRecordRaw } from "vue-router";
import AboutView from "../../views/about/AboutView.vue";

const routerAbout: RouteRecordRaw = {
  path: "/about",
  name: "about",
  component: AboutView,
};

export default routerAbout;
