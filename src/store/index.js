import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mails: []
  },
  mutations: {
    saveMail(state, list) {
      state.mails = list;
    }
  },
  actions: {
    async fetchMail({commit}) {
      let ret = (await axios.get(`${location.origin}/api/list`, {
        json: true
      })).data;
      commit('saveMail', ret);
    }
  },
  getters: {
    MailList(state) {
      return state.mails;
    }
  },
})
