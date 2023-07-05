<script>

const urlData = {
  baseUri: 'https://api.themoviedb.org/3',
  category: {
    movie: '/search/movie',
    tv: '/search/tv'
  },
  genres: '/genre/movie/list',
  apiKey: 'b2955b1b545c26b1b74bcc846aea4325'
}

import axios from 'axios';
import { store } from './assets/data/store.js';
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
    fetchMovie(url) {
      axios.get(url).then(res => {
        let movies = res.data.results;
        // console.log(movies);

        movies = this.filterGenres(movies, store.selectedGenre);
        // console.log(movies);

        console.log(movies);
        store.myMovies = movies.map(movie=> {
          const {id, original_title, title, original_language, vote_average, genre_ids} = movie;
          return {
            id: id,
            title: title,
            originalTitle: original_title,
            lang: original_language,
            vote: vote_average,
            genre: genre_ids
          }
        })
      })
    },
    fetchTv(url) {
      axios.get(url).then(res => {
        let tvs = res.data.results;
        // console.log(tvs);

        tvs = this.filterGenres(tvs, store.selectedGenre);
        // console.log(tvs);

        store.myTvs = tvs.map(tv => {
          const {id, original_name, name, original_language, vote_average, genre_ids} = tv;
          return {
            id: id,
            title: name,
            originalTitle: original_name,
            lang: original_language,
            vote: vote_average,
            genre: genre_ids
          }
        })
      })
    },
    findFilms() {
      this.fetchMovie(this.currentMovieUrl);
      this.fetchTv(this.currentTvUrl);
    },
    getGenreList(url) {
      axios.get(url).then(res => {
        store.myGenres = res.data.genres;
      })
    },
    filterGenres(films, genre) {
      if (store.selectedGenre === -1) return films;
      return films = films.filter(film => {
          return film.genre_ids.includes(genre);
        });
    }
  },
  mounted() {
    this.getGenreList(`${urlData.baseUri}${urlData.genres}?api_key=${urlData.apiKey}`);
  }
}
</script>

<template>
  <AppHeader
  @input-submitted="findFilms"
  @select-changed="findFilms"/>
  <AppMain/>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
