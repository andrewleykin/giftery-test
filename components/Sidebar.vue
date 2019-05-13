<template lang="pug">
  b-list-group.sidebar
    b-list-group-item(:active="sortActive === null" button @click.prevent="sortBrands(null)") Все категории
    b-list-group-item(v-for="cat in categories" :key="cat.id" :active="sortActive === cat.id" button @click.prevent="sortBrands(cat.id)") {{cat.title}}
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'sidebar',
  computed: {
    ...mapGetters([ 'resultById', 'sortActive' ]),
    categories() {
      return this.resultById('categories')
    }
  },
  methods: {
    sortBrands(id) {
      this.$store.commit('setSort', id)
    }
  }
}
</script>

<style scoped>
.sidebar .list-group-item.active {
  background-color: #f16536;
  border-color: #f16536;
}
</style>
