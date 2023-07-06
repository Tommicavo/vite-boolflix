<script>

import FilmCard from '@/components/generics/FilmCard.vue';

export default {
  data() {
    return {}
  },
  components: {
    FilmCard
  },
  props: {
    storePlaylist: Array,
    title: String
  },
  computed: {
    isPlaylistEmpty() {
      return !this.storePlaylist.length;
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
          <div class="col mb-5" v-for="card in storePlaylist" :key="card.id">
            <FilmCard :cardData="card"/>
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
