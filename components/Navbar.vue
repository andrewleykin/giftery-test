<template lang="pug">
  b-navbar.header(variant="light")
    b-navbar-brand.header__logo(to="/")
      img(src="~assets/logo.svg" alt="giftery logo")
    nuxt-link.ml-auto.header__basket(to="/basket")
      b-badge(variant="info" tag="span" v-if="basketLength > 0") {{basketLength}}
      img(src="~assets/basket.svg" alt="basket")
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    basketLength() {
      return this.$store.getters['basket/basketLength']
    }
  },
}
</script>

<style scoped>
.header__logo {
  min-width: 100px;
}

.header__basket img {
  max-width: 30px;
}
</style>
