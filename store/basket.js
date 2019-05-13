export const state = () => ({
  basket: []
})

export const getters = {
  basket: s => s.basket,
  basketLength: s => s.basket.length,
  basketSum(state) {
    let result = 0
    state.basket.map(el => {
      result+= el.sum
    })
    return result
  }
}

export const mutations = {
  addToBasket(state, {item, face}) {
    state.basket.push({
      id: item.id,
      image: item.image,
      code: item.code,
      title: item.title,
      face: face,
      quality: 1,
      sum: face*1,
    })
  },
  changeQuality(state, {id, quality}) {
    let item = state.basket.find(el => el.id === id)
    item.quality = quality
    item.sum = quality*item.face
  },
  deleteItem(state, item) {
    state.basket.splice(state.basket.indexOf(item), 1)
  }
}