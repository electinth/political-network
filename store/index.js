import top_20 from '../data/top_20.csv'
import categories from '../data/categories.csv'
import top_20_name from '../data/top_20_name.csv'
import HHI_Overall from '../data/HHI_Overall.csv'
import HHI_Surname from '../data/HHI_Surname.csv'
import HHI_Party from '../data/HHI_Party.csv'
import categories_names from '../data/categories_names.csv'
import district from '../data/district.csv'

const state = () => ({
  categories: categories,
  top_20: top_20,
  top_20_name: top_20_name,
  HHI_Overall: HHI_Overall,
  HHI_Surname: HHI_Surname,
  HHI_Party: HHI_Party,
  categories_names: categories_names,
  district: district,
  selected: [],
  selected_district: null,

  // filter_name: [],
})

const getters = {}

const mutations = {
  SELECTED(state, payload) {
    state.selected_district = payload.district
    state.selected = payload
  },
  SET_HHI_OVERALL(state, payload) {
    state.HHI_Overall = payload
  },
  SET_DISTRICT(state, payload) {
    state.selected_district = payload
  },
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
