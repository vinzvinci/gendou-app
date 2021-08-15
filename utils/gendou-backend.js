const { GET_GENDOU_API_URL } = process.env

export const fetchAirdropReward = async (axios, address, sign) => {
  const url = GET_GENDOU_API_URL + '/airdrop'
  return await axios.post(url, { address, sign }).catch((err) => err)
}

// info API for v1/v2
export const fetchPrizeInfo = async (axios, githubUserId) => {
  const url = GET_GENDOU_API_URL + `/info/${githubUserId}`
  return await axios.get(url).catch((err) => err)
}

// claimUrl API for v1
export const fetchClaimUrl = async (axios, code) => {
  const url = GET_GENDOU_API_URL + `/findClaimUrl`
  return await axios.post(url, { code }).catch((err) => err)
}

// infoByCode API for v2
export const fetchInfoByCode = async (axios, code) => {
  const url = GET_GENDOU_API_URL + `/infoByCode`
  return await axios.post(url, { code }).catch((err) => err)
}

// entry API for v2
export const fetchEntry = async (axios, accessToken, signature) => {
  const url = GET_GENDOU_API_URL + `/entry`
  return await axios
    .post(url, { access_token: accessToken, sign: signature })
    .catch((err) => err)
}
