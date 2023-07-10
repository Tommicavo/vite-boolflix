<script>

import FilmCard from '@/components/generics/FilmCard.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    FilmCard
  },
  props: {
    storePlaylist: String,
    title: String
  },
  computed: {
    isPlaylistEmpty() {
      return !store[this.storePlaylist].length;
    },
    filmCategory() {
      if (this.title === 'Movies') return 'movie';
      else return 'tv';
    }
  },
  methods: {}
}
</script>

<template>
  <section v-if="!isPlaylistEmpty">
    <h2 class="title container py-3"> {{ title }} </h2>
    <div class="filmList">
      <div class="container">
        <div class="row row-cols-4">
          <div class="col mb-5" v-for="card in store[this.storePlaylist]" :key="card.id">
            <FilmCard :cardData="card" :category="filmCategory"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.col{
  height: 400px;
}

.title{
  font-size: 32px;
  font-weight: 500;
  color: white;
}
</style>
