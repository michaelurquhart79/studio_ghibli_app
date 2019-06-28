<template lang="html">
  <div>
    <h1>Hello Mike</h1>


  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      filmsArray: [],
    }
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => this.filmsArray = data);
  }
}
</script>

<style lang="css" scoped>
</style>
