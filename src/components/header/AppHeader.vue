<script>

import AppForm from '@/components/generics/AppForm.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppForm
  },
  props: {},
  computed: {},
  methods: {
    searchText(text) {
      store.searchedText = text;
      console.log('text: ', store.searchedText);
      this.$emit('text-written');
    },
    isSelectChanged(option) {
      store.selectedGenre = parseInt(option);
      console.log('select changed: ', store.selectedGenre);
      this.$emit('select-changed');
    },
  },
  emits: ['text-written', 'select-changed']

}
</script>

<template>
  <header class="d-flex justify-content-center align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="headerLogo">BOOLFLIX</div>
      <div class="headerNav d-flex align-items-center">
        <AppForm
        @text-written="searchText"
        @select-changed="isSelectChanged"
        :options="store.myGenres"/>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/partials/_vars.scss' as *;

header{
  background-color: black;
  height: $headerHeight;
}

.headerLogo{
  font-size: 24px;
  font-weight: 700;
  color: red;
}

</style>
