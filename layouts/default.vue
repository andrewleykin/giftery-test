<template lang="pug">
  div
    navbar
    main.mt-4
      b-container(fluid)
        nuxt
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
