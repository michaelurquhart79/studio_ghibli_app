<template lang="html">
  <div>
    <h2>You have no films in your watched film list</h2>
    <p>Why not add some <router-link :to="{ name: 'film-view'}">here?</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'no-watched-films'
}
</script>

<style lang="css" scoped>
</style>
