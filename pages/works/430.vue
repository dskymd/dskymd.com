<template>
  <main class="main">
    <div class="container gutter">
      <div class="work__detail">
        <div class="work__title">430 - Fourthiry Official Site.</div>
        <div class="works__images">
          <img src="/images/work__thumb-430.jpg" alt="430" />
        </div>
        <div class="work__description">
          <ul class="featured">
            <li>Nuxt.js</li>
          </ul>
          <p></p>
        </div>

        <div class="tags">
          <span>Nuxt.js</span>
          <span>Vue.js</span>
          <span>Design</span>
        </div>
      </div>

      <div class="group">
        <works-list />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    worksList: () => import('~/components/works__list')
  }
}
</script>

<style lang="scss" scoped></style>
