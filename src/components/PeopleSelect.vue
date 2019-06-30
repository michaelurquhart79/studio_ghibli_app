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
    }
  },
  methods: {
    handleSelect() {
      eventBus.$emit('person-selected', this.selectedPerson)
    }
  },
}
</script>

<style lang="css" scoped>
</style>
