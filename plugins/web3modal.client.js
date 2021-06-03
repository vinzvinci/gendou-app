import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const infuraId = process.env.INFURA_ID || ''
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId,
    },
  },
}

const web3modalPlugin = (_, inject) => {
  const web3modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
  })
  let isConnected = false
  inject('web3modal', {
    connect() {
      const provider = web3modal.connect()
      isConnected = true
      return provider
    },
    getProvider() {
      return isConnected
    },
  })
}

export default web3modalPlugin
