import Vue from "vue";
import Router from "vue-router";
import FilmView from "@/views/FilmView"
import WatchedFilmView from "@/views/WatchedFilmView"
import PeopleView from "@/views/PeopleView"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/films",
      name: "film-view",
      component: FilmView
    },
    {
      path: "/watchedfilms",
      name: "watched-film-view",
      component: WatchedFilmView
    },
    {
      path:"/people",
      name: "people-view",
      component: PeopleView
    }
  ]
})

export default router;
