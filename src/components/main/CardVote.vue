<script>

export default {
  data() {
    return {}
  },
  components: {},
  props: {
    solid: Number,
    total: Number
  },
  computed: {},
  methods: {
    iconClass(n) {
      return n <= this.solid ? 'fas' : 'far';
    }
  }
}
</script>

<template>
  <span class="cardVote">
    <span v-for="(star, i) in total">
      <font-awesome-icon :icon="[iconClass(star), 'star']" />
    </span>
  </span>
</template>

<style lang="scss" scoped>

.fa-star{
  color: gold;
}

</style>
