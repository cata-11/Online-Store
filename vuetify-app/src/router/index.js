import Vue from "vue";
import VueRouter from "vue-router";
import Room from "@/views/Room";
import Home from "@/views/Home";
import AllRooms from "@/views/AllRooms";
import Rezervari from "@/views/Rezervari";
Vue.use(VueRouter);

const routes = [
  {
    path: "/room/:type",
    component: Room,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    path: "/rooms",
    component: AllRooms,
  },
  {
    path: "/rezervari",
    component: Rezervari,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
