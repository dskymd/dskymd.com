<template>
  <div class="group group--list other-works">
    <h3>Other Works</h3>
    <works-list />
  </div>
</template>

<script>
export default {
  components: {
    worksList: () => import('~/components/works__list')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/works.scss';
</style>
\