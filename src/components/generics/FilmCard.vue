<script>

import { urlData } from '@/assets/data/urlData.js';
import CardVote from '@/components/main/CardVote.vue';
import axios from 'axios';

export default {
  data() {
    return {
      availableLang: ['en', 'it'],
      maxStars: 5,
      actors: []
    }
  },
  components: {
    CardVote
  },
  props: {
    cardData: Object,
    category: String
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
    isPoster() {
      return this.cardData.cover;
    },
    getPosterPath() {
      return `${urlData.cover}${this.cardData.cover}`;
    },
    getCastUrl() {
      return `${urlData.baseUri}/${this.category}/${this.cardData.id}/credits?api_key=${urlData.apiKey}`;
    },
    getCast() {
      axios.get(this.getCastUrl).then(res => {
        this.actors = [];
        const casts = res.data.cast;
        for (let i = 0; i < 5; i++) {
          this.actors.push(casts[i].name);
        }
      }).catch(err => {
        this.actors.push(`Cast info unavailable for this ${this.category}...`);
      }).then(res => {
        console.log(this.actors);
      });
      return this.actors;
    }
  },
  methods: {}
}
</script>

<template>
  <div class="myCard">
    <div class="cardTitle py-2"> {{ cardData.title }} </div>

    <div class="cardFront text-center">
      <img v-if="isPoster" class="poster" :src="getPosterPath" :alt="cardData.title">
      <div v-else class="imgUnavailable">
        <div>Image</div>
        <div><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div>
        <div>Unavailable</div>
      </div>
    </div>
    <div class="cardBack flex-column justify-content-between">

      <div class="cardLang py-2">
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
          <CardVote :solid="solidStars" :total="maxStars"/>
        </div>
        <div class="cardOverview">
          <span class="voiceMenu">Overview: </span>
          <span> {{ cardData.overview }} </span>
        </div>
        <div class="cardCast">
          <div class="voiceMenu">Cast: </div>
          <div v-for="(cast, i) in getCast" :key="i">
            {{ cast }}
          </div>
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
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
}

.cardTitle{
  font-size: 18px;
  font-weight: 600;
  height: 90px;
  text-align: center;
}

.cardBack{
  height: 280px;
  overflow: auto;
}

.cardLang{
  align-self: center;
  width: 80px;
  height: 50px;
}

.voiceMenu{
  display: inline-block;
  font-weight: 700;
  padding-top: 10px;
}

.poster{
  border-radius: 10px;
}

.imgUnavailable{
  font-size: 24px;
  padding: 10px 0;
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
