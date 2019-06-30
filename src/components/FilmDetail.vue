<template lang="html">
  <div>
    <h3>Film Details</h3>
    <p>Title: {{film.title}}</p>
    <p>Released: {{film.release_date}}</p>
    <p>Director: {{film.director}}</p>
    <p>Description: {{film.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
h3 {
  margin-top: 0px;
}

</style>
