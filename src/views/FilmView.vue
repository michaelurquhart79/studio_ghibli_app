<template lang="html">
  <div>
    <h2>List of all Studio Ghibli films released</h2>
    <film-list :films="films"></film-list>
  </div>
</template>

<script>

import FilmList from '@/components/FilmList'
export default {
  name: 'film-view',
  props: ['films'],
  components: {
    'film-list': FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
