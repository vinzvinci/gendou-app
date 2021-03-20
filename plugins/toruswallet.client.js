import Torus from '@toruslabs/torus-embed'
import Web3 from 'web3'

const torusPlugin = (context, inject) => {
  inject('torus', {
    async connect() {
      const torus = new Torus()
      await torus.init()
      await torus.login() // await torus.ethereum.enable()
      const web3 = new Web3(torus.provider)
      const userInfo = await torus.getUserInfo()
      const accounts = await web3.eth.getAccounts()

      return { account: accounts[0], userInfo, web3 }
    },
  })
}

export default torusPlugin
