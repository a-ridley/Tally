import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import router from './router';
import store from './store';

library.add(faThumbsUp);
library.add(faFacebookSquare, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
