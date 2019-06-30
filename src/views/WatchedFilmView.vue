<template lang="html">
  <div>
    <h2>List of all Studio Ghibli films you've seen</h2>
    <no-watched-films v-if="noWatched"></no-watched-films>
    <div class="film-flex">
      <film-list :films="watchedFilms"></film-list>
      <film-detail class="film-details" v-if="selectedFavFilm" :film="selectedFavFilm"></film-detail>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'
import FilmList from '@/components/FilmList'
import FilmDetail from '@/components/FilmDetail'
import NoWatchedFilms from '@/components/NoWatchedFilms'
export default {
  name: 'watched-film-view',
  props: ['watchedFilms'],
  components: {
    'film-list': FilmList,
    'no-watched-films': NoWatchedFilms,
    'film-detail': FilmDetail
  },
  computed: {
    noWatched: function() {
      return this.watchedFilms.length === 0
    }
  },
  data() {
    return {
      selectedFavFilm: null
    }
  },
  mounted(){
    eventBus.$on('film-selected', film => this.selectedFavFilm = film)
  }
}
</script>

<style lang="css" scoped>
.film-flex {
  display: flex;
  flex-wrap: wrap;
}

.film-details {
  margin: 0.5em;
  padding: 0.5em;
  border: 2px solid black;
  border-radius: 5px;
  width: 40%;
}
</style>
