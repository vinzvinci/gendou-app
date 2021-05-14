import Torus from '@toruslabs/torus-embed'
import Web3 from 'web3'

const torusPlugin = (context, inject) => {
  const torus = new Torus()
  inject('torus', {
    async connect() {
      await torus.init()
      await torus.login() // await torus.ethereum.enable()
      const web3 = new Web3(torus.provider)
      const userInfo = await torus.getUserInfo()
      const accounts = await web3.eth.getAccounts()

      return { account: accounts[0], userInfo, web3 }
    },
    async getUserInfo() {
      try {
        const userInfo = await torus.getUserInfo()
        return userInfo
      } catch {
        // not logged in yet. -> ignore
      }
    },
    getProvider() {
      return torus.provider
    },
    async cleanUp() {
      await torus.cleanUp()
    },
  })
}

export default torusPlugin
