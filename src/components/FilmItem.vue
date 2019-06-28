<template lang="html">
  <li>{{film.title}}, Released: {{film.release_date}}</li>
</template>

<script>
export default {
  name: 'film-item',
  props: ['film']
}
</script>

<style lang="css" scoped>
li {
  list-style-type: none;
}
</style>
