<script>

import AppSelect from '@/components/generics/AppSelect.vue';
import AppInput from '@/components/generics/AppInput.vue';

export default {
  data() {
    return {
      inputText: '',
      optionValue: '-1'
    }
  },
  components: {
    AppSelect,
    AppInput,
  },
  props: {
    options: Array
  },
  computed: {
    isEmptyFields() {
      return !this.inputText && this.optionValue == -1;
    }
  },
  methods: {
    searchText() {
      this.$emit('text-written', this.inputText);
    },
    isSelectChanged() {
      this.$emit('select-changed', this.optionValue);
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
      :options="options"
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
