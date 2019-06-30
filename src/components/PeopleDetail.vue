<template lang="html">
  <div v-if="selectedPerson" class='person-detail'>
    <h3>Name: {{selectedPerson.name}}</h3>
    <p>Age: {{selectedPerson.age}}</p>
    <p>Gender: {{selectedPerson.gender}}</p>
    <p>Species: {{speciesOfPerson.name}}</p>
    <p>Film(s):</p>
    <ul>
      <li v-for="film in personsFilms">{{film.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'people-detail',
  props: ['selectedPerson', 'species', 'personsFilms'],
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
.person-detail {
  max-width: 400px;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 2px;
}

</style>
