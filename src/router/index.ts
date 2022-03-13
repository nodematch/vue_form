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
    name: "TitleInformation1",
    component: () => import("../views/TitleInformation1.vue"),
  },
  {
    path: "/inputform2",
    name: "InputForm2",
    component: () => import("../views/InputForm2.vue"),
  },
  {
    path: "/printview1",
    name: "PrintView1",
    props: true,
    component: () => import("../views/PrintView1.vue"),
  },
  {
    path: "/inputform1",
    name: "InputForm1",
    component: () => import("../views/InputForm1.vue"),
  },
  {
    path: "/printview2",
    name: "PrintView2",
    props: true,
    component: () => import("../views/PrintView2.vue"),
  },
  {
    path: "/titleInfv2",
    name: "TitleInformation2",
    props: false,
    component: () => import("../views/TitleInformation2.vue"),
  },
  {
    path: "/printBu2",
    name: "PrintBu2",
    component: () => import("../views/PrintBu2.vue"),
  },
  // {
  //   path: "/:catchAll(.#)",
  //   name: "notFound",
  //   component: () => import("../views/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
