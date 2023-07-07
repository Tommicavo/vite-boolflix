<script>

import AppSelect from '@/components/generics/AppSelect.vue';
import AppInput from '@/components/generics/AppInput.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store,
      inputText: '',
      optionValue: ''
    }
  },
  components: {
    AppSelect,
    AppInput,
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
    searchText() {
      store.searchedText = this.inputText;
      console.log(store.searchedText);
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
  <div class="input-group">
    <span class="input-group-text" id="basic-addon1">Search Media</span>          
    <!-- <span><AppSelect :options="store.myGenres"/></span> -->
    <span><AppInput v-model="inputText" @text-written="searchText"/></span>
    <button @click="clearFilters" :class="{disabled : isEmptyFields}"
    class="btn btn-warning" type="button">Clear</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
