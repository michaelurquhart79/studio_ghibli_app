<template lang="html">
  <div>
    <p>Select a person from the drop-down box to see more details about them</p>
    <label for="person_select">Select Person: </label>
    <select name="person_select" v-model="selectedPerson" v-on:change="handleSelect">
      <option disabled value="">Select a Person</option>
      <option v-for="person in people" :value="person">{{person.name}}</option>

    </select>
  </div>
</template>

<script>

import { eventBus } from '@/main'

export default {
  name: 'people-select',
  props: ['people'],
  data () {
    return {
      selectedPerson: null,
      // personsFilms: []
    }
  },
  methods: {
    handleSelect() {
      eventBus.$emit('person-selected', this.selectedPerson);

      // this.personsFilms=[];
      // this.selectedPerson.films.forEach(film =>
      //   fetch(film)
      //   .then(res => res.json())
      //   .then(data => (this.personsFilms).push(data))
      // )

    }
  },
}
</script>

<style lang="css" scoped>
</style>
