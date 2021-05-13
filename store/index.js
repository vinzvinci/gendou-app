export const state = () => ({
  isConnected: false,
  account: '',
  githubUserName: '',
  userInfo: undefined,
  reward: 0,
  rewardFindAt: '',
  buttonLoadingConnect: false,
})

export const mutations = {
  setIsConnected: (state, value) => (state.isConnected = value),
  setAccount: (state, value) => (state.account = value),
  setGitHubUserName: (state, value) => (state.githubUserName = value),
  setUserInfo: (state, value) => (state.userInfo = value),
  setReward: (state, value) => (state.reward = value),
  setRewardFindAt: (state, value) => (state.rewardFindAt = value),
  setButtonLoadingConnect: (state, value) =>
    (state.buttonLoadingConnect = value),
}

const GET_GITHUB_USER_API_URL = 'https://api.github.com/user/'
const fetchGitHubUserName = async (axios, githubUserId) => {
  const url = GET_GITHUB_USER_API_URL + githubUserId
  const res = await axios.get(url)
  return res.data.login
}

const GET_GENDOU_API_URL = 'https://send-reward-ropsten.azurewebsites.net/'
const fetchPrizeInfo = async (axios, githubUserId) => {
  const url = GET_GENDOU_API_URL + `v1/info/${githubUserId}`
  try {
    return await axios.get(url)
  } catch (e) {
    throw new Error(e)
  }
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
      // Todo TorusでGithubログインを選択するとエラーになるのでハードコーディングする
      // commit('setGitHubUserName', 'kazu80')
      // commit('setGitHubUserName', 'git-id1')

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
  async getPrizeInfo({ commit, state }) {
    const { data } = await fetchPrizeInfo(this.$axios, state.githubUserName)

    if (data.reward) {
      commit('setReward', data.reward)
      commit('setRewardFindAt', data.rewardFindAt)
    }
  },
  isGotPrize({ state }) {
    return state.reward > 0
  },
  isConnected({ state }) {
    return state.isConnected
  },
  startLoadingConnectButton({ commit }) {
    commit('setButtonLoadingConnect', true)
  },
  stopLoadingConnectButton({ commit }) {
    commit('setButtonLoadingConnect', false)
  },
}

export const getters = {
  getButtonLoadingConnect({ state }) {
    return state.buttonLoadingConnect
  },
}
