import { createApp } from 'vue';
import App from './App.vue';

// Font-Awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as startSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as startRegular } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

library.add(startSolid, startRegular, faMagnifyingGlass);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
