import { toNaturalNumber } from '~/utils/bignumber'
import { fetchAirdropReward } from '~/utils/gendou-backend'

// TODO: use temporary value now...
const REWARD_100_URL = 'https://localhost:7071/v2/reward1'
const REWARD_400_URL = 'https://localhost:7071/v2/reward2'
const REWARD_1000_URL = 'https://localhost:7071/v2/reward3'

export const state = () => ({
  currentStep: 0,
  walletConnected: false,
})

export const mutations = {
  setCurrentStep: (state, value) => (state.currentStep = value),
  setWalletConnected: (state, value) => (state.walletConnected = value),
}

export const actions = {
  async fetchAirdropRewardInfo({ commit }, { address, sign }) {
    const res = await fetchAirdropReward(this.$axios, address, sign)
    const reward = toNaturalNumber(res.data.reward)
    const claimUrl =
      reward === 100
        ? REWARD_100_URL
        : reward === 400
        ? REWARD_400_URL
        : reward === 1000
        ? REWARD_1000_URL
        : undefined
    commit('setClaimUrl', claimUrl, { root: true })
    commit('setReward', reward, { root: true })
  },
}
