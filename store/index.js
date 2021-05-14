import { BigNumber } from '@ethersproject/bignumber'

export const state = () => ({
  isConnected: false,
  account: '',
  githubUserName: '',
  userInfo: undefined,
  reward: 0,
  rewardFindAt: '',
  buttonLoadingConnect: false,
  web3Provider: undefined,
})

export const mutations = {
  setIsConnected: (state, value) => (state.isConnected = value),
  setAccount: (state, value) => (state.account = value),
  setGitHubUserName: (state, value) => (state.githubUserName = value),
  setUserInfo: (state, value) => (state.userInfo = value),
  setWeb3Provider: (state, value) => (state.web3Provider = value),
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

const fetchClaimUrl = async (web3, axios, githubUserId, address) => {
  // Todo Signatureを生成して送る
  console.log('bar', githubUserId, address)
  // const web3 = new Web3(Web3.givenProvider)

  // web3.eth.getAccounts(console.log)

  const signature = await web3.eth.personal.sign(githubUserId, address, '')
  // const signature = await web3.eth.sign(
  //   githubUserId,
  //   '0x5F454f79a0871fFc9C09eD4F177409646E69b8Da'
  // )

  console.log({ signature })

  const url = GET_GENDOU_API_URL + `v1/findClaimUrl`
  try {
    return await axios.post(url, {
      params: {
        github_id: githubUserId,
        signature,
        address,
      },
    })
  } catch (e) {
    throw new Error(e)
  }
}

export const actions = {
  async connectTorusWallet({ commit }) {
    const { account, userInfo, web3 } = await this.$torus.connect()
    if (account) {
      commit('setIsConnected', true)
    }
    commit('setAccount', account)
    commit('setUserInfo', userInfo)
    commit('setWeb3Provider', web3)
    if (userInfo) {
      // Todo TorusでGithubログインを選択するとエラーになるのでハードコーディングする
      // commit('setGitHubUserName', 'kazu80')
      commit('setGitHubUserName', 'git-id1')

      /*
      const verifierId = userInfo.verifierId
      const githubUserId = verifierId.split('github|')[1]
      if (!githubUserId) {
        return
      }

      const userName = await fetchGitHubUserName(this.$axios, githubUserId)
      if (userName) {
        commit('setGitHubUserName', userName)
      }
       */
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
  async getClaimInfo({ commit, state }) {
    console.log('foo')

    const res = await fetchClaimUrl(
      state.web3Provider,
      this.$axios,
      state.githubUserName,
      state.account
    )

    console.log(res)
  },
  getPrize({ state }) {
    const decimalNumber = Math.pow(10, 18).toString()
    return BigNumber.from(state.reward).div(decimalNumber).toString()
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
