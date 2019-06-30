<template lang="">
  <div>
    <people-select :people="people"></people-select>
    <people-detail :selectedPerson="selectedPerson" :species="species"
    :personsFilms="personsFilms"></people-detail>

  </div>

</template>

<script>
import PeopleSelect from '@/components/PeopleSelect'
import PeopleDetail from '@/components/PeopleDetail'

export default {
  name: 'people-view',
  props: ['films', 'people', 'selectedPerson', 'species', 'personsFilms'],
  components: {
    'people-select': PeopleSelect,
    'people-detail': PeopleDetail
  }
}
</script>

<style lang="css" scoped>
</style>
