import { BigNumber } from '@ethersproject/bignumber'

export const toNaturalNumber = (n) => {
  const decimalNumber = Math.pow(10, 18).toString()
  return BigNumber.from(n).div(decimalNumber).toNumber()
}
