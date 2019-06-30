<template lang="html">
  <div>
    <h2>List of all Studio Ghibli films released</h2>
    <div class=film-flex>
      <film-list :films="films"></film-list>
      <film-detail v-if="selectedFilm" :film="selectedFilm" class=film-details></film-detail>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'
import FilmList from '@/components/FilmList'
import FilmDetail from '@/components/FilmDetail'
export default {
  name: 'film-view',
  props: ['films'],
  components: {
    'film-list': FilmList,
    'film-detail': FilmDetail
  },
  data() {
    return {
      selectedFilm: null
    }
  },
  mounted(){
    eventBus.$on('film-selected', film => this.selectedFilm = film)
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
