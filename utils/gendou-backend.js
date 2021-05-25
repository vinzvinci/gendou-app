const GET_GENDOU_API_URL = 'https://send-reward-ropsten.azurewebsites.net/v1'

export const fetchPrizeInfo = async (axios, githubUserId) => {
  const url = GET_GENDOU_API_URL + `/info/${githubUserId}`
  return await axios.get(url)
}

export const fetchClaimUrl = async (axios, code) => {
  const url = GET_GENDOU_API_URL + `/findClaimUrl`
  return await axios.post(url, { code })
}
