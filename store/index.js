import { fetchClaimUrl, fetchPrizeInfo } from '~/utils/gendou-backend'
import { toNaturalNumber } from '~/utils/bignumber'

export const state = () => ({
  account: '',
  githubId: '',
  reward: 0,
  claimUrl: '',
})

export const getters = {
  getClaimUrl: (state) => state.claimUrl,
  isGotPrize: (state) => state.reward > 0,
}

export const mutations = {
  setAccount: (state, value) => (state.account = value),
  setGitHubId: (state, value) => (state.githubId = value),
  setReward: (state, value) => (state.reward = value),
  setClaimUrl: (state, value) => (state.claimUrl = value),
}

export const actions = {
  async getPrizeInfo({ commit }, githubId) {
    commit('setGitHubId', githubId)
    const { data } = await fetchPrizeInfo(this.$axios, githubId)

    if (data.reward) {
      commit('setReward', toNaturalNumber(data.reward))
      commit('setRewardFindAt', data.rewardFindAt)
    }
  },
  async getClaimInfo({ commit }, code) {
    const { data } = await fetchClaimUrl(this.$axios, code)

    if (data.reward) {
      commit('setReward', data.reward)
      commit('setClaimUrl', data.claim_url)
    }
  },
}
