<script>

import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
      store,
      timeoutId: null
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    searchText() {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.$emit('text-written');
      }, 1000);
    }
  },
  emits: ['text-written']
}
</script>

<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="by title"
    v-model="store.searchedText" @keyup="searchText">
  </div>
</template>

<style lang="scss" scoped>
.form-control{
  border-radius: 0;
}

</style>
