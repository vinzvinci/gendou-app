export const state = () => ({
  opening: false,
  opened: false,
  closed: true,
  history: [],
  controled: '',
})

export const getters = {
  opening: (state) => state.opening,
  opened: (state) => state.opened,
  closed: (state) => state.closed,
  history: (state) => state.history,
  controled: (state) => state.controled,
}

export const mutations = {
  open: (state, value) => {
    state.opening = value
    state.history = [...state.history, value]
  },
  toggle: (state, value) => {
    state.opened = value
    state.closed = !value
  },
  control: (state, value) => (state.controled = value),
}

export const actions = {
  open({ commit }, trueOrFalse) {
    commit('open', trueOrFalse)
  },
  toggle({ commit }, trueOrFalse) {
    commit('toggle', trueOrFalse)
  },
  control({ commit }, value) {
    commit('control', value)
  },
}
