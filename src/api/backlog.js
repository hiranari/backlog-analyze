import axios from 'axios'

const authenticate = async (baseUrl, apiKey, cb, errorCb) => {
  const res = await axios.get(`${baseUrl}/api/v2/space?apiKey=${apiKey}`).catch(res => errorCb(res))
  cb(res)
}

const getters = {
  getSpace: state => {
    return state.baseUrl + '/api/v2/space' + '?apiKey=' + state.apiKey
  },
  getProjects: state => {
    return state.baseUrl + '/api/v2/projects' + '?apiKey=' + state.apiKey
  },
  getIssues: state => {
    return state.baseUrl + '/api/v2/issues' + '?apiKey=' + state.apiKey
  },
  getIssueTypes: state => {
    return state.baseUrl + '/api/v2/projects/' + state.project + '/issueTypes' + '?apiKey=' + state.apiKey
  },
  getCategories: state => {
    return state.baseUrl + '/api/v2/projects/' + state.project + '/categories' + '?apiKey=' + state.apiKey
  },
  getVersions: state => {
    return state.baseUrl + '/api/v2/projects/' + state.project + '/versions' + '?apiKey=' + state.apiKey
  },
  getUsers: state => {
    return state.baseUrl + '/api/v2/projects/' + state.project + '/users' + '?apiKey=' + state.apiKey
  }
}

export default {
  namespaced: true,
  getters,
  authenticate
}
