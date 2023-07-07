<script>

import AppSelect from '@/components/generics/AppSelect.vue';
import AppInput from '@/components/generics/AppInput.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppSelect,
    AppInput
  },
  props: {},
  computed: {
    isEmptyFields() {
      return !store.searchedText && store.selectedGenre === -1;
    }
  },
  methods: {
    isSelectChanged(genre) {
      store.selectedGenre = genre;
      this.$emit('select-changed');
    },
    searchText(text) {
      store.searchedText = text;
      this.$emit('text-written');
    },
    clearFilters() {
      store.searchedText = '';
      store.selectedGenre = -1;
      this.searchText();
    }
  },
  emits: ['select-changed', 'text-written']
}
</script>

<template>
  <header class="d-flex justify-content-center align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="headerLogo">BOOLFLIX</div>
      <div class="headerNav d-flex align-items-center">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">Search Media</span>          
          <span><AppSelect @select-changed="isSelectChanged" :options="store.myGenres"/></span>
          <span><AppInput @text-written="searchText"/></span>
          <button @click="clearFilters" :class="{disabled : isEmptyFields}"
          class="btn btn-warning" type="button">Clear</button>
        </div>
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
