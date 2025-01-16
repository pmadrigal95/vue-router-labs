// import ListPage from "@/modules/pokemon/pages/ListPage";
// import AboutPage from "@/modules/pokemon/pages/AboutPage";
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage";
// import NoPageFound from "@/modules/shared/pages/NoPageFound.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
      ),
  }, // Lazy loading
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
      ),
  }, // Lazy loading
  {
    path: "/pokemon/:id",
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
      ),
  }, // Lazy loading
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound"
      ),
  }, // Lazy loading
  // {path: "/:pathMatch(.*)*", redirect: "/"}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
