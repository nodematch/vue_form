import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/medi",
    name: "medi",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/print",
    name: "print",
    props: true,
    component: () => import("../views/PrintView.vue"),
  },
  {
    path: "/printv2",
    name: "printv2",
    props: true,
    component: () => import("../views/PrintView_v2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
