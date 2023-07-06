<script>

import AppSelect from '@/components/generics/AppSelect.vue';
import AppInput from '@/components/generics/AppInput.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {}
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
    isSelectChanged() {
      this.$emit('select-changed');
    },
    searchText(text) {
      this.$emit('text-written', text);
    },
    clearFilters() {
      store.searchedText = '';
      store.selectedGenre = -1;
    }
  },
  emits: ['select-changed', 'text-written']
}
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center p-5">
      <div class="headerLogo">
        LOGO BOOLFLIX
      </div>
      <div class="headerNav d-flex align-items-center">
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">Search Media</span>          
          <span><AppSelect @select-changed="isSelectChanged"/></span>
          <span><AppInput @text-written="searchText"/></span>
          <button @click="clearFilters" :class="{disabled : isEmptyFields}"
          class="btn btn-warning" type="button">Clear</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>
