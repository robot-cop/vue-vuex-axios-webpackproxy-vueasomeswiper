import Vue from 'vue'
import Vuex from 'vuex'
import pageIndexChoiceness from './modules/pageIndexChoiceness'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    pageIndexChoiceness
  },
})