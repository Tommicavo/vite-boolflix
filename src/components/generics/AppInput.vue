<script>

export default {
  data() {
    return {
      timeoutId: null,
      inputText: '',
    }
  },
  components: {},
  props: {},
  computed: {},
  methods: {
    searchText() {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.$emit('text-written', this.inputText);
      }, 1000);
    }
  },
  emits: ['text-written']
}
</script>

<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="by title"
    v-model="inputText" @keyup="searchText">
  </div>
</template>

<style lang="scss" scoped>
.form-control{
  border-radius: 0;
}

</style>
