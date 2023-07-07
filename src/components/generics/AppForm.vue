<script>

import AppSelect from '@/components/generics/AppSelect.vue';
import AppInput from '@/components/generics/AppInput.vue';
import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store,
      inputText: '',
      optionValue: '-1'
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
    isSelectChanged() {
      store.selectedGenre = parseInt(this.optionValue);
      console.log('select changed: ', store.selectedGenre);
      this.$emit('select-changed');
    },
    searchText() {
      store.searchedText = this.inputText;
      console.log('search text: ', store.searchedText);
      this.$emit('text-written');
    },
    clearFilters() {
      this.inputText = '';
      this.optionValue = '-1';
      this.searchText();
      this.isSelectChanged();
    }
  },
  emits: ['select-changed', 'text-written']
}
</script>

<template>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon1">Search Media</span>          
    <span><AppSelect
      v-model="optionValue"
      :options="store.myGenres"
      @select-changed="isSelectChanged"/></span>

    <span><AppInput
      v-model="inputText"
      @text-written="searchText"/></span>

    <button @click="clearFilters" :class="{disabled : isEmptyFields}"
    class="btn btn-warning" type="button">Clear</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
