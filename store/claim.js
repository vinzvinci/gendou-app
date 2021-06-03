export const state = () => ({
  currentStep: 0,
  walletConnected: false,
})

export const mutations = {
  setCurrentStep: (state, value) => (state.currentStep = value),
  setWalletConnected: (state, value) => (state.walletConnected = value),
}
