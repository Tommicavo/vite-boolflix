<script>

const urlData = {
  baseUri: 'https://api.themoviedb.org/3',
  category: {
    movie: '/search/movie',
    tv: '/search/tv'
  },
  apiKey: 'b2955b1b545c26b1b74bcc846aea4325'
}

import axios from 'axios';
import AppHeader from '@/components/header/AppHeader.vue';
import AppMain from '@/components/main/AppMain.vue';

export default {
  data() {
    return {
      searchedText: ''
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  props: {},
  computed: {
    currentMovieUrl() {
      return `${urlData.baseUri}${urlData.category.movie}?api_key=${urlData.apiKey}&query=${this.searchedText}`;
    },
    currentTvUrl() {
      return `${urlData.baseUri}${urlData.category.tv}?api_key=${urlData.apiKey}&query=${this.searchedText}`;
    }
  },
  methods: {
    findMovie(url) {
      axios.get(url).then(res => {
        console.log(res.data.results);
      })
    },
    findTv(url) {
      axios.get(url).then(res => {
        console.log(res.data.results);
      })
    },
    findFilms() {
      this.findMovie(this.currentMovieUrl);
      this.findTv(this.currentTvUrl);
    }
  }
}
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
