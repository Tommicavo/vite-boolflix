<script>

import { store } from '@/assets/data/store.js';
import FilmCard from '@/components/generics/FilmCard.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    FilmCard
  },
  props: {},
  computed: {},
  methods: {}
}
</script>

<template>
  <h2 class="text-center p-3">Film</h2>
  <div class="filmList my-3">
    <div class="container">
      <div class="row row-cols-4">
        <div class="col mb-3" v-for="card in store.myMovies" :key="card.id">
          <FilmCard :cardData="card"/>
        </div>
      </div>
    </div>
  </div>
  <h2 class="text-center p-3">Tv Series</h2>
  <div class="tvList">
    <div class="container my-3">
      <div class="row row-cols-4">
        <div class="col mb-3" v-for="card in store.myTvs" :key="card.id">
          <FilmCard :cardData="card"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
