<template lang="html">
  <div>
    <nav-bar></nav-bar>
    <sg-header title="Studio Ghibli Films App"></sg-header>

    <router-view :films="films" :watchedFilms="watchedFilms"></router-view>

  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import NavBar from '@/components/NavBar'
import SGHeader from '@/components/Header'
export default {
  name: 'app',
  data() {
    return {
      films: [],
      watchedFilms: []
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => this.films = data);
    eventBus.$on("wlbutton-clicked", (film) => {
      this.watchedFilms.push(film);
    })
  },
  components:{
    'nav-bar': NavBar,
    'sg-header': SGHeader
  }
}
</script>

<style lang="css" scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto);

div {
  font-family: Roboto, sans-serif;
}
</style>
