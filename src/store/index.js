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
  },
  // 建立对于子模块的快捷访问
  getters: {
    homelist: state => state.home.homelist, // 建立home下的homelist属性的快捷访问
    currenthome: state => state.home.currenthome
  }
});
