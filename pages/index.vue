<template lang="pug">
  b-row
    b-col(cols="3")
      Sidebar
    b-col(cols="9")
      Brands
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Brands from '@/components/Brands'

export default {
  components: {
    Sidebar, Brands
  }
}
</script>
