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

const GET_GITHUB_USER_API_URL = 'https://api.github.com/user/'
const fetchGitHubUserName = async (axios, githubUserId) => {
  const url = GET_GITHUB_USER_API_URL + githubUserId
  const res = await axios.get(url)
  return res.data.login
}

export const actions = {
  async connectTorusWallet({ commit }) {
    const { account, userInfo } = await this.$torus.connect()
    if (account) {
      commit('setIsConnected', true)
    }
    commit('setAccount', account)
    commit('setUserInfo', userInfo)
    if (userInfo) {
      const verifierId = userInfo.verifierId
      const githubUserId = verifierId.split('github|')[1]
      if (!githubUserId) {
        return
      }
      const userName = await fetchGitHubUserName(this.$axios, githubUserId)
      if (userName) {
        commit('setGitHubUserName', userName)
      }
    }
  },
  async getTorusUserInfo({ commit }) {
    const userInfo = await this.$torus.getUserInfo()
    commit('setUserInfo', userInfo)
    if (!userInfo) {
      return {}
    }
    commit('setIsConnected', true)
    const verifierId = userInfo.verifierId
    const githubUserId = verifierId.split('github|')[1]
    if (!githubUserId) {
      return
    }
    const userName = await fetchGitHubUserName(this.$axios, githubUserId)
    if (userName) {
      commit('setGitHubUserName', userName)
    }
    return userInfo
  },
}
