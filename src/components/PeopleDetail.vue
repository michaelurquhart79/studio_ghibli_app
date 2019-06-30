<template lang="html">
  <div v-if="selectedPerson">
    <h3>Name: {{selectedPerson.name}}</h3>
    <p>Age: {{selectedPerson.age}}</p>
    <p>Gender: {{selectedPerson.gender}}</p>
    <p>Species: {{speciesOfPerson.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'people-detail',
  props: ['selectedPerson', 'species'],
  computed: {
    speciesRefOfPerson: function () {
      return this.selectedPerson.species.slice(40)
    },
    speciesOfPerson: function () {
      const foundSpec = this.species.find(spec =>
        spec.id === this.speciesRefOfPerson
      )
      return foundSpec
    }

  }
}
</script>

<style lang="css" scoped>
</style>
