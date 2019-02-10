import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/petitions",
      name: "petitions",
      // route level code-splitting <-- SPAS are ususally one html file.
      // code splitting creates more than one .html file when bundling
      // vue will download/load(if cached) this html inside the
      // petitions.vue (file) only when needed (lazy-loading: only load
      // when you need it at the time u need it)
      // this generates a separate chunk (petitions.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "petitions" */ './views/Petitions.vue'),
    },
  ],
});
