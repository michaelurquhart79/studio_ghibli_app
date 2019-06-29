<template lang="html">
  <div>
    <h2>List of all Studio Ghibli films you've seen</h2>
    <no-watched-films v-if="noWatched"></no-watched-films>
    <film-list :films="watchedFilms"></film-list>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList'
import NoWatchedFilms from '@/components/NoWatchedFilms'
export default {
  name: 'watched-film-view',
  props: ['watchedFilms'],
  components: {
    'film-list': FilmList,
    'no-watched-films': NoWatchedFilms
  },
  computed: {
    noWatched: function() {
      return this.watchedFilms.length === 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>
