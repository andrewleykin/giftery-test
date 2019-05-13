<template lang="pug">
  .basket
    h1 Корзина
    .basket__main(v-if="basket.length > 0")
      .basket__item(v-for="item in basket" :key="item.id")
        .basket__img
          img(:src="item.image" :alt="item.code")
        h4.basket__title {{item.title}}
        span.basket__face {{item.face}} руб.
        b-form-input.basket__input(type="number" :value="item.quality" @input="changeQuality(item.id, $event)")
        span.basket__sum {{item.sum}} руб.
        b-button.basket__delete(@click.prevent="deleteItem(item)" variant="danger") Удалить
      .basket__action
        span.basket__action-text К оплате {{basketSum}} руб.
        b-button(variant="success") Оплатить
    p(v-else) В корзине пусто. 
      nuxt-link(to="/") Категории
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('basket', [ 'basket', 'basketSum' ])
  },
  methods: {
    deleteItem(item) {
      this.$store.commit('basket/deleteItem', item)
    },
    changeQuality(id, quality) {
      this.$store.commit('basket/changeQuality', { id, quality })
    }
  }
}
</script>

<style scoped>
.basket__header {
  display: flex;
  justify-content: flex-end;
}

.basket__item {
  display: flex;
  align-items: center;
}

.basket__item:first-child .basket__face:before,
.basket__item:first-child .basket__sum:before {
  position: absolute;
  top: -40px;
}

.basket__item:first-child .basket__face:before {
  content: 'Номинал';
}

.basket__item:first-child .basket__sum:before {
  content: 'Сумма';
}

.basket__item:first-child .basket__face:after {
  content: 'Количество';
  position: absolute;
  top: -40px;
  left: calc(100% + 20px);
}

.basket__item + .basket__item {
  margin-top: 20px;
}

.basket__img {
  max-width: 180px;
  margin-right: 10px;
}

.basket__img img {
  max-width: 100%;
}

.basket__title {
  margin-right: auto;
}

.basket__face {
  width: 150px;
  margin-right: 20px;
  position: relative;
}

.basket__input {
  max-width: 50px;
  margin-right: 80px;
  position: relative;
}

.basket__sum {
  width: 100px;
  margin-right: 20px;
  position: relative;
}

.basket__action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.basket__action-text {
  margin-right: 10px;
}
</style>
