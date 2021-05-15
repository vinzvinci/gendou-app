import { addresses, client, contractFactory } from '@devprotocol/dev-kit'
import BigNumber from 'bignumber.js'

// TODO: temporary value
export const HTTP_PROVIDER_URL =
  'https://mainnet.infura.io/v3/f7a4c86a99304a2993a35bf53017fa38'

export const getContractAddress = async (client, contract) => {
  const address = await client.registry(addresses.eth.main.registry)[contract]()
  return address
}

export const getStats = async () => {
  return await client.getStats(HTTP_PROVIDER_URL)
}

export const getTotalStakingAmountOnProtocol = async (web3) => {
  const contracts = contractFactory(web3.currentProvider)
  return contracts
    .lockup(await getContractAddress(contracts, 'lockup'))
    .getAllValue()
}

export const calculateMaxRewardsPerBlock = async (web3) => {
  const contracts = contractFactory(web3.currentProvider)
  return contracts
    .allocator(await getContractAddress(contracts, 'allocator'))
    .calculateMaxRewardsPerBlock()
}

export const holdersShare = async (web3, amount, lockedups) => {
  const contracts = contractFactory(web3.currentProvider)
  return contracts
    .policy(await getContractAddress(contracts, 'policy'))
    .holdersShare(amount, lockedups)
}

export const getAPY = async (web3) => {
  const maxRewards = await calculateMaxRewardsPerBlock(web3)
  const totalStaking = await getTotalStakingAmountOnProtocol(web3)
  const holders = await holdersShare(web3, maxRewards, totalStaking)

  const stakers = new BigNumber(maxRewards).minus(new BigNumber(holders))
  const year = new BigNumber(2102400)
  const apy = stakers.times(year).div(totalStaking).times(100)
  const creators = new BigNumber(holders)
    .times(year)
    .div(totalStaking)
    .times(100)

  return { apy, creators }
}
