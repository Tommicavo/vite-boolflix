<script>

import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    isInputSubmitted() {
      this.$emit('input-submitted');
    }
  },
  emits: ['input-submitted']
}
</script>

<template>
  <div class="input-group p-5">
    <input type="text" class="form-control" placeholder="Search..."
    v-model="store.searchedText" @keyup.enter="isInputSubmitted">
    <button class="btn btn-primary" type="button"
    @click="isInputSubmitted">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
