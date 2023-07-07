<script>

export default {
  data() {
    return {
      defaultValue: -1,
      optionValue: ''
    }
  },
  components: {},
  props: {
    options: Array
  },
  computed: {},
  methods: {
    isSelectChanged() {
      this.$emit('select-changed', this.optionValue);
    }
  },
  mounted() {
    this.optionValue = this.defaultValue;
  },
  emits: ['select-changed']
}
</script>

<template>
  <select class="form-select" v-model="optionValue" @change="isSelectChanged">
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
