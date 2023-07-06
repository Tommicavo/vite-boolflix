<script>

export default {
  data() {
    return {}
  },
  components: {},
  props: {
    solid: Number,
    regular: Number
  },
  computed: {
  },
  methods: {}
}
</script>

<template>
  <span class="cardVote">
    <span v-for="(star, i) in solid" :key="i">
      <font-awesome-icon icon="fa-solid fa-star" />
    </span>
    <span v-for="(star, i) in regular" :key="i">
      <font-awesome-icon icon="fa-regular fa-star" />
    </span>
  </span>
</template>

<style lang="scss" scoped>

.fa-star{
  color: gold;
}

</style>
