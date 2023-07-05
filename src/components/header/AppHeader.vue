<script>

import AppSelect from '@/components/generics/AppSelect.vue';
import AppInput from '@/components/generics/AppInput.vue';

export default {
  data() {
    return {}
  },
  components: {
    AppSelect,
    AppInput
  },
  props: {},
  computed: {},
  methods: {
    isInputSubmitted() {
      this.$emit('input-submitted');
    },
    isSelectChanged() {
      this.$emit('select-changed');
    }
  },
  emits: ['input-submitted', 'select-changed']
}
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div class="headerLogo">
        LOGO BOOLFLIX
      </div>
      <div class="headerNav d-flex align-items-center gap-3">
        <AppSelect @select-changed="isSelectChanged"/>
        <AppInput @input-submitted="isInputSubmitted"/>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>
