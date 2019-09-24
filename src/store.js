import Vue from 'vue'
import Vuex from 'vuex'
import setup from './store/modules/setup'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    setup
  }
})
