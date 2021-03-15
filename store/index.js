import top_20 from '../data/top_20.csv'
import categories from '../data/categories.csv'
import top_20_name from '../data/top_20_name.csv'
const state = () => ({
  categories: categories,
  top_20: top_20,
  top_20_name: top_20_name,
  // filter_name: [],
})

const getters = {}

const mutations = {
  // SET_FILTER_NAME(state, payload) {
  //   state.filter_name
  // },
}
const actions = {
  // updateValue({ commit }, payload) {
  //   commit('updateValue', payload)
  // },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
