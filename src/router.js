import Vue from "vue";
import Router from "vue-router";
import FilmView from "@/views/FilmView"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/films",
      name: "film-view",
      component: FilmView
    }
  ]
})

export default router;
