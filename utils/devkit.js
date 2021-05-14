import { client } from '@devprotocol/dev-kit'

// TODO: temporary value
const HTTP_PROVIDER_URL =
  'https://mainnet.infura.io/v3/f7a4c86a99304a2993a35bf53017fa38'

const getStats = async () => {
  return await client.getStats(HTTP_PROVIDER_URL)
}

export default getStats
