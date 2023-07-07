<script>

import AppForm from '@/components/generics/AppForm.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    AppForm
  },
  props: {},
  computed: {},
  methods: {},
  emits: ['text-written']

}
</script>

<template>
  <header class="d-flex justify-content-center align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="headerLogo">BOOLFLIX</div>
      <div class="headerNav d-flex align-items-center">
        <AppForm @text-written="$emit('text-written')"/>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/partials/_vars.scss' as *;

header{
  background-color: black;
  height: $headerHeight;
}

.headerLogo{
  font-size: 24px;
  font-weight: 700;
  color: red;
}

</style>
