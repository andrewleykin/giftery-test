<template lang="pug">
  .brand
    h1 {{brandsName}}
    .d-flex.flex-wrap
      .brand__card.mb-2(v-for="brand in brandsSort" :key="brand.id")
        .brand__img
          img(:src="brand.image" :alt="brand.code")
        .brand__info
          h4.brand__info-title {{brand.title}}
          .brand__info-badge
            p(v-if="brand.faces.length === 0") Карта отсутствует
            b-badge(href="#" variant="primary" v-for="face in brand['faces']" :key="face" @click.prevent="addToBasket(brand, face)") {{face}}
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'brands',
  computed: {
    ...mapGetters([ 'brands', 'brandsName', 'brandsSort' ])
  },
  methods: {
    addToBasket(item, face) {
      this.$store.commit('basket/addToBasket', {item, face})
    }
  }
}
</script>

<style scoped>
.brand {
  margin: 0 -5px;
}

.brand__card {
  width: 32%;
  position: relative;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  overflow: hidden;
  padding-bottom: 60px;
  margin: 0 5px;
}

.brand__img img {
  max-width: 100%;
}

.brand__card:hover .brand__info {
  top: 30%;
  bottom: 0;
}

.brand__info {
  padding: 0.75rem 1.25rem;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% - 60px);
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  transition: all .2s;
}

.brand__info-title {
  margin-bottom: 20px;
}

.brand__info-badge {
  margin: 0 -10px;
}

.brand__info-badge .badge {
  width: 50px;
  height: 20px;
  margin: 0 10px;
  
}
</style>
