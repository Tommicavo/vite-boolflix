<script>

export default {
  data() {
    return {
      timeoutId: null,
    }
  },
  components: {},
  props: {
    modelValue: String
  },
  computed: {},
  methods: {
    searchText(text) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.$emit('update:modelValue', text);
        this.$emit('text-written');
      }, 1000);
    }
  },
  emits: ['update:modelValue', 'text-written']
}
</script>

<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="by title"
    :value="modelValue" @keyup="searchText($event.target.value)">
  </div>
</template>

<style lang="scss" scoped>
.form-control{
  border-radius: 0;
}

</style>
