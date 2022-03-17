import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import bootstrap from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router, store, bootstrap).mount("#app");
