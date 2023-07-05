<script>

import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store,
      defaultValue: -1
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    isSelectChanged() {
      this.$emit('select-changed');
    }
  },
  mounted() {
    store.selectedGenre = this.defaultValue;
  },
  emits: ['select-changed']
}
</script>

<template>
  <select class="form-select" v-model="store.selectedGenre" @change="isSelectChanged">
    <option :value="defaultValue">Choose genre</option>
    <option v-for="genre in store.myGenres" :key="genre.id"
    :value="genre.id"> {{ genre.name }} </option>
  </select>
</template>

<style lang="scss" scoped>

</style>
