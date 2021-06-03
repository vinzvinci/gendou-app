import { v4 as uuidv4 } from 'uuid'
import {
  fetchClaimUrl,
  fetchInfoByCode as _fetchInfoByCode,
} from '~/utils/gendou-backend'
import { toNaturalNumber } from '~/utils/bignumber'

const isConnected = false
const username = ''
const code = ''
const requestState = ''
const accessToken = ''

export const state = () => ({
  isConnected,
  username,
  code,
  requestState,
  accessToken,
})

export const mutations = {
  setCode: (state, value) => (state.code = value),
  setRequestState: (state, value) => (state.requestState = value),
  setAccessToken: (state, value) => (state.accessToken = value),
  setUsername: (state, value) => (state.username = value),
}

export const getters = {
  getStateFromStorage: () => window.sessionStorage.getItem('github-app-state'),
  getAccessToken: (state) => state.accessToken,
  getUsername: (state) => state.username,
}

export const actions = {
  async fetchClaimInfo({ commit }, code) {
    commit('setCode', code)

    const res = await fetchClaimUrl(this.$axios, code)
    commit('setClaimUrl', res.data.claim_url, { root: true })
    commit('setReward', toNaturalNumber(res.data.reward), { root: true })
  },
  async fetchInfoByCode({ commit }, code) {
    commit('setCode', code)

    const res = await _fetchInfoByCode(this.$axios, code)
    const {
      github_id: githubId,
      reward,
      access_token: accessToken,
      contributions,
    } = res.data || {}
    accessToken && commit('setAccessToken', accessToken)
    githubId && commit('setUsername', githubId)
    reward && commit('setReward', toNaturalNumber(reward), { root: true })
    contributions && commit('setContributions', contributions, { root: true })
  },
  generateReuqestState({ commit }) {
    const state = uuidv4()
    commit('setRequestState', state)
    window.sessionStorage.setItem('github-app-state', state)
  },
}
