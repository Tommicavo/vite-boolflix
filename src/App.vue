<script>

import { store } from './assets/data/store.js';
import { urlData } from './assets/data/urlData.js';
import axios from 'axios';
import AppHeader from '@/components/header/AppHeader.vue';
import AppMain from '@/components/main/AppMain.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  props: {},
  computed: {
    currentMovieUrl() {
      return `${urlData.baseUri}${urlData.category.movie}?api_key=${urlData.apiKey}&query=${store.searchedText}`;
    },
    currentTvUrl() {
      return `${urlData.baseUri}${urlData.category.tv}?api_key=${urlData.apiKey}&query=${store.searchedText}`;
    }
  },
  methods: {
    fetchProduct(url, storePlaylist) {
      axios.get(url).then(res => {
        const products = res.data.results;

        const filteredProducts = this.filterGenres(products, store.selectedGenre);
        console.log('products: ', filteredProducts);

        store[storePlaylist] = filteredProducts.map(product=> {
          return {
            id: product.id,
            title: product.title || product.name,
            originalTitle: product.original_title || product.original_name,
            lang: product.original_language,
            vote: product.vote_average,
            genre: product.genre_ids,
            cover: product.poster_path,
            overview: product.overview
          }
        })
      })
    },
    findFilms() {
      this.fetchProduct(this.currentMovieUrl, 'myMovies');
      this.fetchProduct(this.currentTvUrl, 'myTvs');
    },
    getGenreList(url) {
      axios.get(url).then(res => {
        store.myGenres = res.data.genres;
      })
    },
    getLanguageList(url) {
      axios.get(url).then(res => {
        const languages = res.data;
        store.myLanguages = languages.map(lang => lang.iso_639_1);
      })
    },
    filterGenres(films, genre) {
      if (genre == -1) return films;
      return films.filter(film => {
          return film.genre_ids.includes(genre);
        });
    }
  },
  mounted() {
    this.getGenreList(`${urlData.baseUri}${urlData.genres}?api_key=${urlData.apiKey}`);
    this.getLanguageList(`${urlData.baseUri}${urlData.languages}?api_key=${urlData.apiKey}`);
  }
}
</script>

<template>
  <AppHeader
  @select-changed="findFilms"
  @text-written="findFilms"/>
  <AppMain/>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
