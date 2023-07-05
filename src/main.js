import { createApp } from 'vue';
import App from './App.vue';

// Font-Awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Font-Awesome Icons

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
