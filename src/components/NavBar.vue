<template lang="html">
  <nav>
    <router-link :to="{ name: 'film-view'}">All Films</router-link> |
    <router-link :to="{ name: 'watched-film-view'}">Watched Films</router-link>
  </nav>

</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="css" scoped>
</style>
