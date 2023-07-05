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
    submitInput() {
      this.$emit('submit-input');
    }
  },
  emits: ['submit-input']
}
</script>

<template>
  <div class="container input-group p-5">
    <input type="text" class="form-control" placeholder="Search..."
    v-model="store.searchedText">
    <button class="btn btn-primary" type="button"
    @click="submitInput">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
