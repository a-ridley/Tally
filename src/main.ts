import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faStar, faThumbsDown} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faFacebookSquare, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import router from './router';
import store from './store';

library.add(faThumbsUp, faStar, faThumbsDown);
library.add(faFacebookSquare, faTwitter, faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
