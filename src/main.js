import { createApp } from 'vue';
import App from './App.vue';

// Font-Awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as startSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as startRegular } from '@fortawesome/free-regular-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(startSolid, startRegular);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
