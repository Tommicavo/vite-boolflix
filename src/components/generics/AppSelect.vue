<script>

export default {
  data() {
    return {
      defaultValue: '-1'
    }
  },
  components: {},
  props: {
    modelValue: String,
    options: Array
  },
  computed: {},
  methods: {
    isSelectChanged(value) {
      this.$emit('update:modelValue', value);
      this.$emit('select-changed');
    }
  },
  emits: ['update:modelValue', 'select-changed']
}
</script>

<template>
  <select class="form-select"
  :value="modelValue" @change="isSelectChanged($event.target.value)">
    <option class="defaultOption" :value="defaultValue">by genre</option>
    <option v-for="genre in options" :key="genre.id"
    :value="genre.id"> {{ genre.name }} </option>
  </select>
</template>

<style lang="scss" scoped>
.form-select{
  border-radius: 0;
}


</style>
