import Vue from "vue";
import Vuex from "vuex";
import home from './modules/home'
import about from './modules/about'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    home,
    about
  }
});
