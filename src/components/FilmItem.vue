<template lang="html">
  <div>
      <li>{{film.title}}, Released: {{film.release_date}}</li>
      <button v-if="!onWatchedView"
      v-on:click = "handleWLClick">Add to watched list</button>
      <button v-on:click="displayInfo">Click for more details</button>
    <hr>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'film-item',
  props: ['film'],
  methods: {
    handleWLClick() {
      eventBus.$emit("wlbutton-clicked", this.film)
    },
    displayInfo() {
      eventBus.$emit('film-selected', this.film)
    }
  },
  computed: {
    onWatchedView: function(){
      return this.$route.name === "watched-film-view"
    }
  }
}
</script>

<style lang="css" scoped>
li {
  list-style-type: none;
}
button {
  font-family: Roboto, sans-serif;
}
</style>
