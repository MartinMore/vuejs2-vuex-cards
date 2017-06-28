/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './common/actions';
import * as getters from './common/getters';

import giftcards from './modules/giftcards';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    giftcards,
  },
  strict: debug,
});
