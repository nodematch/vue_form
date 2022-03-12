import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "titleInf",
    component: () => import("../views/TitleInf.vue"),
  },
  {
    path: "/medi",
    name: "medi",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MediForm.vue"),
  },
  {
    path: "/print",
    name: "print",
    props: true,
    component: () => import("../views/PrintView.vue"),
  },
  {
    path: "/form",
    name: "scoreForm",
    component: () => import("../views/ScoreForm.vue"),
  },
  {
    path: "/printv2",
    name: "printv2",
    props: true,
    component: () => import("../views/PrintView_v2.vue"),
  },
  // {
  //   path: "/titleInf",
  //   name: "titleInf",
  //   props: false,
  //   component: () => import("../views/TitleInf.vue"),
  // },
  {
    path: "/titleInfv2",
    name: "titleInfv2",
    props: false,
    component: () => import("../views/TitleInf_v2.vue"),
  },
  {
    path: "/:catchAll(.#)",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
