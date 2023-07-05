import { reactive } from 'vue';

export const store = reactive({
    searchedText: '',
    myMovies: [],
    myTvs: []
});
