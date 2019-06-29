<template lang="html">
  <div>
    <h2>List of all Studio Ghibli films you've seen</h2>
    <film-list :films="watchedFilms"></film-list>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList'
export default {
  name: 'watched-film-view',
  props: ['watchedFilms'],
  components: {
    'film-list': FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
