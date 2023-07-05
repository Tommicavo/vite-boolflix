<script>

import { store } from '@/assets/data/store.js';

export default {
  data() {
    return {
    }
  },
  components: {},
  props: {
    cardData: Object
  },
  computed: {
  },
  methods: {
    getImageFlag(lang) {
      console.log(lang);
      if (store.myLanguages.includes(lang)) return new URL(`../../assets/img/${lang}.png`, import.meta.url).href;
    },
    setVote(vote) {
      return Math.ceil(vote * 0.5);
    }
  }
}
</script>

<template>
  <div class="myCard d-flex flex-column justify-content-between">
    <div class="cardTop d-flex flex-column">
      <div class="cardTitle py-2"> {{ cardData.title }} </div>
      <div class="cardLang">
        <img class="img-fluid" :src='getImageFlag(cardData.lang)' :alt='`Lang: ${cardData.lang}`'>
      </div>
    </div>
    
    <div class="cardInfo d-flex flex-column">
      <div class="cardOriginal">
        <span class="voiceMenu">Original Title: </span>
        <span> {{ cardData.originalTitle }} </span>
      </div>
      <div class="cardVote">
        <span class="voiceMenu">Voto: </span>
        <span> {{ setVote(cardData.vote) }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myCard{
  padding: 1rem;
  border-radius: 10px;
  background-color: aqua;
  height: 100%;
}

.cardTitle{
  align-self: center;
  font-size: 20px;
  font-weight: 600;
  height: 80px;
}

.cardLang{
  align-self: center;
  width: 80px;
  height: 50px;
}

.cardOriginal{
  height: 50px;
}

.voiceMenu{
  font-weight: 700;
}

</style>
