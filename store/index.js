import brands from '../assets/brands.json'
import categories from '../assets/categories.json'

export const state = () => ({
  sortActive: null,
  result: {
    categories,
    brands
  }
})

export const getters = {
  result: s => s.result,
  resultById: s => id => s.result[id],
  sortActive: s => s.sortActive,
  brandsName(state) {
    let sortEl = state.result.categories.find(el => state.sortActive === el.id)
    return sortEl ? sortEl.title : 'Все категории'
  },
  brandsSort (state) {
    return state.sortActive ? state.result.brands.filter(el => el.categories.indexOf(state.sortActive) !== -1) : state.result.brands
  }
}

export const mutations = {
  setResult(state, {id, value}) {
    state.result[id] = value
  },
  setSort(state, id) {
    state.sortActive = id
  }
}