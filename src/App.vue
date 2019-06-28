<template lang="html">
  <div>
    <h1>Studio Ghibli Films App</h1>

    <router-view :films="films"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      films: [],
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => this.films = data);
  }
}
</script>

<style lang="css" scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto);

div {
  font-family: Roboto, sans-serif;
}
</style>
