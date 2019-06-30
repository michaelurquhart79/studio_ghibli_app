<template lang="html">
  <div>
    <nav-bar></nav-bar>
    <sg-header title="Studio Ghibli Films App"></sg-header>

    <router-view :films="films" :watchedFilms="watchedFilms" :people="people" :selectedPerson="selectedPerson" :species="species"
    :personsFilms="personsFilms"></router-view>

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
      watchedFilms: [],
      people: [],
      selectedPerson: null,
      species: [],
      personsFilms: []
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => this.films = data);
    fetch("https://ghibliapi.herokuapp.com/people/")
    .then(res => res.json())
    .then(data => this.people = data);
    fetch("https://ghibliapi.herokuapp.com/species")
    .then(res => res.json())
    .then(data => this.species = data);
    eventBus.$on("wlbutton-clicked", (film) => {
      this.watchedFilms.push(film);
    })
    eventBus.$on('person-selected', (person) => {
      this.selectedPerson = person;
      this.personsFilms=[];
      this.selectedPerson.films.forEach(film =>
        fetch(film)
        .then(res => res.json())
        .then(data => (this.personsFilms).push(data))
      )

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
