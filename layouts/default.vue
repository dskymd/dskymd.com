<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
export default {
  components: {
    MyHeader: () => import('~/components/header.vue'),
    MyFooter: () => import('~/components/footer.vue')
  }
}
</script>

<style lang="scss">
body {
  // background-color: $color-yellow;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
