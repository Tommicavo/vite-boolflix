<script>

export default {
  data() {
    return {}
  },
  components: {},
  props: {
    cardData: Object
  },
  computed: {},
  methods: {}
}
</script>

<template>
  <div class="myCard">
    <div> {{ cardData.title }} </div>
    <!-- <div> {{ cardData.originalTitle }} </div> -->
    <div> {{ cardData.lang }} </div>
    <div> {{ cardData.vote }} </div>
  </div>
</template>

<style lang="scss" scoped>
.myCard{
  padding: 1rem;
  border-radius: 10px;
  background-color: aqua;
  height: 100%;
}
</style>
