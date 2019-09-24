import backlog from '../../api/backlog'

const state = {
  baseUrl: '',
  apiKey: '',
  authenticated: false
}

const getters = {
  isAuthenticated: state => {
    return state.authenticated
  }
}

const actions = {
  authenticate ({ commit }) {
    backlog.authenticate(
      state.baseUrl, state.apiKey,
      response => {
        console.log(response.data)
        commit('updateAuthenticated', true)
      },
      error => {
        console.log('error')
        console.log(error)
        commit('updateAuthenticated', false)
        // TODO 何かしらのエラー処理を
      })
    // commit('updateAuthenticated', true)
  }
}

const mutations = {
  updateBaseUrl (state, baseUrl) {
    state.baseUrl = baseUrl
  },
  updateApiKey (state, apiKey) {
    state.apiKey = apiKey
  },
  updateAuthenticated (state, auth) {
    state.authenticated = auth
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
