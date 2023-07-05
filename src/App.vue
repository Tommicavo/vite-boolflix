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

export default {
  data() {
    return {
      searchedText: ''
    }
  },
  components: {},
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
  <div class="container input-group p-5">
    <input type="text" class="form-control" placeholder="Search..."
    v-model="searchedText">
    <button class="btn btn-primary" type="button"
    @click="findFilms()">Search</button>
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
