const state = {
  baseUrl: '',
  apiKey: ''
}

const getters = {
  getSpace: state => {
    return state.baseUrl + '/api/v2/space' + '?apiKey=' + state.apiKey
  },
  getProjects: state => {
    return state.baseUrl + '/api/v2/projects' + '?apiKey=' + state.apiKey
  }
}

export default {
  namespaced: true,
  state,
  getters
}
