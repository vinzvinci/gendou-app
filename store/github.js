const isConnected = false
const username = ''
const code = ''
const requestState = ''

export const state = () => ({
  isConnected,
  username,
  code,
  requestState,
})

export const mutations = {
  setCode: (state, value) => (state.code = value),
  setRequestState: (state, value) => (state.requestState = value),
}

export const actions = {
  fetchClaimInfo({ commit }, code) {
    // TODO: fetch new api with code
    commit('setCode', code)
  },
  generateReuqestState({ commit }) {
    // TODO: use random param
    commit('setRequestState', 'abc')
  },
}
