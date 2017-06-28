import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import accounting from 'accounting';
import pluralize from 'pluralize';

import App from './App';
import store from './store';
import router from './router';

Vue.use(ElementUI);
Vue.filter('pluralize', pluralize);
Vue.filter('formatMoney', accounting.formatMoney);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
