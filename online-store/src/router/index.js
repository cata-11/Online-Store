import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Shirt from "@/views/Shirt.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Shirt",
    path: "/shirt/:id",
    component: Shirt,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
