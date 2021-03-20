export const state = () => ({
  isConnected: false,
  account: '',
  githubUserName: '',
  userInfo: undefined,
})

export const mutations = {
  setIsConnected: (state, value) => (state.isConnected = value),
  setAccount: (state, value) => (state.account = value),
  setGitHubUserName: (state, value) => (state.githubUserName = value),
  setUserInfo: (state, value) => (state.userInfo = value),
}

export const actions = {
  async connectTorusWallet({ commit }) {
    const { account, userInfo } = await this.$torus.connect()
    commit('setAccount', account)
    commit('setUserInfo', userInfo)
    if (account) {
      commit('setIsConnected', true)
    }
  },
}
