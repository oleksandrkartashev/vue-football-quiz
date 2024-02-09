import * as VueRouter from "vue-router";
import vHome from "@/views/vHome.vue";
import vLogin from "@/views/vLogin.vue";
import vRegister from "@/views/vRegister.vue";

const routes = [
  { name: "home", path: "/", component: vHome },
  { name: "login", path: "/login", component: vLogin },
  { name: "register", path: "/register", component: vRegister },
];

const router = VueRouter.createRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  history: VueRouter.createWebHistory(),
  routes: routes,
});

export default router;