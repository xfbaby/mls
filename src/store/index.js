import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import good from './modules/good'
import userinfo from './modules/userinfo'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app,
    good,
    userinfo
  },
  getters
})

export default store
