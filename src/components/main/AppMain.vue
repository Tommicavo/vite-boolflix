<script>

import MainSection from '@/components/main/MainSection.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    MainSection
  },
  props: {},
  computed: {
    isSearchEmpty() {
      return !store.myMovies.length && !store.myTvs.length;
    }
  },
  methods: {}
}
</script>

<template>
  <main :class="{emptyMain : isSearchEmpty}">
    <MainSection :storePlaylist="store.myMovies" title="Movies"/>
    <MainSection :storePlaylist="store.myTvs" title="Tv Series"/>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/partials/_vars.scss' as *;

main{
  background-color: #181818;
}

.emptyMain{
  height: $mainHeight;
}

</style>
