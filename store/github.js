import { v4 as uuidv4 } from 'uuid'
import { fetchClaimUrl } from '~/utils/gendou-backend'
import { toNaturalNumber } from '~/utils/bignumber'

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

export const getters = {
  getStateFromStorage: () => window.sessionStorage.getItem('github-app-state'),
}

export const actions = {
  async fetchClaimInfo({ commit }, code) {
    commit('setCode', code)

    const res = await fetchClaimUrl(this.$axios, code)
    commit('setClaimUrl', res.data.claim_url, { root: true })
    commit('setReward', toNaturalNumber(res.data.reward), { root: true })
  },
  generateReuqestState({ commit }) {
    const state = uuidv4()
    commit('setRequestState', state)
    window.sessionStorage.setItem('github-app-state', state)
  },
}
