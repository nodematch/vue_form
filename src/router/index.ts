import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/titleinformation1",
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
    path: "/titleinformation2",
    name: "TitleInformation2",
    props: false,
    component: () => import("../views/TitleInformation2.vue"),
  },
  {
    path: "/testview",
    name: "TestView",
    component: () => import("../views/TestView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return { top: 0 }
  },
});

export default router;
