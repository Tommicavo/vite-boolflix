<script>

import { urlData } from '@/assets/data/urlData.js';
import CardVote from '@/components/main/CardVote.vue';

export default {
  data() {
    return {
      availableLang: ['en', 'it'],
      maxStars: 5
    }
  },
  components: {
    CardVote
  },
  props: {
    cardData: Object
  },
  computed: {
    hasFlag() {
      return this.availableLang.includes(this.cardData.lang);
    },
    getImageFlag() {
      return new URL(`../../assets/img/${this.cardData.lang}.png`, import.meta.url).href;
    },
    solidStars() {
      return Math.ceil(this.cardData.vote * 0.5);
    },
    regularStars() {
      return this.maxStars - this.solidStars;
    },
    getPosterPath() {
      return `${urlData.cover}${this.cardData.cover}`;
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="myCard">
    <div class="cardTitle py-2"> {{ cardData.title }} </div>

    <div class="cardFront text-center h-100">
      <img :src="getPosterPath" :alt="cardData.title">
    </div>
    <div class="cardBack flex-column justify-content-between">

      <div class="cardLang">
        <img v-if="hasFlag" class="img-fluid" :src='getImageFlag' :alt='cardData.lang'>
        <div v-else>
          <span class="voiceMenu"> Lang: </span>
          <span> {{ cardData.lang }} </span>
        </div>
      </div>

      <div class="cardInfo d-flex flex-column">
        <div class="cardOriginal">
            <span class="voiceMenu">Original Title: </span>
            <span> {{ cardData.originalTitle }} </span>
          </div>
          <div class="cardVote">
            <span class="voiceMenu">Voto: </span>
            <CardVote :solid="solidStars" :regular="regularStars"/>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myCard{
  padding: 1rem;
  border-radius: 10px;
  background-color: black;
  color: white;
  height: 100%;
  cursor: pointer;
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
.voiceMenu{
  font-weight: 700;
}

.myCard .cardFront{
  display: block;
}

.myCard:hover .cardFront{
  display: none;
}

.myCard .cardBack{
  display: none;
}

.myCard:hover .cardBack{
  display: flex;
}

</style>
