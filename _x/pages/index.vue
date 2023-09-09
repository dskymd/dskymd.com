<template>
  <main class="main">
    <div class="container gutter">
      <div class="group">
        <h1 class="group__title">Skills</h1>
        <div class="skills__body">
          <ul class="skills__list list">
            <li>
              JavaScript
              <span class="small">(ES6, Vue.js, Nuxt.js, TypeScript)</span>
            </li>
            <li>
              HTML, CSS
              <span class="small">(Sass, Less)</span>
            </li>
            <li>Git, Webpack, Babel</li>
          </ul>
        </div>
      </div>

      <div class="group">
        <h1 class="group__title">Works</h1>
        <div class="description">
          <!-- <p>...</p> -->
        </div>
        <works-list />
      </div>

      <div class="group">
        <h1 class="group__title">OSS contributions</h1>
        <div class="group__body">
          <ul class>
            <li>
              <a href="https://developer.mozilla.org/ja/profiles/dskymd">Translation of MDN web docs</a>
            </li>
            <li>
              <a href="https://github.com/nuxt/docs/pulls?utf8=✓&q=author%3Adskymd">Typo fix of Nuxt.js docs</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="group">
        <h1 class="group__title">Profile</h1>
        <div class="group__body">
          <ul class>
            <li>Date of Birth - 1982/4/13</li>
            <li>Born in Niigata, Japan</li>
            <li>Former Blue Lug Bike Shop as front-end engineer and web manager.</li>
          </ul>
        </div>
      </div>

      <div class="group">
        <h1 class="group__title">Favorites</h1>
        <div class="group__body">
          <ul class="favorites__list">
            <li class="emoji">🍉🍺🥦☕️</li>
            <li>BMX, Bicycle🚲</li>
            <li>Travel✈️</li>
            <li>Climbing Mountains⛰</li>
            <li>Radio📻🐒</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
    worksList: () => import('~/components/works__list.vue')
    // worksModel: () => import('~/components/works__modal.vue')
    // Logo: () => import('~/components/Logo.vue')
  }
}
</script>

<style lang="scss">
.container {
  a {
    color: $color-orange;
  }
}

.group {
  // display: grid;
  padding: 0;
  margin: 0 0 12rem;
}
.group__title {
  // flex-basis: 200px;
  padding: $gutter 0;
  margin: 0 0 $gutter;
  // background-color: $color-yellow;
}
.description {
  padding: 0 0 $gutter;
  p {
    font-size: 1.4rem;
  }
}
// ul.skills__list {
//   li {
//     //
//   }
// }

.wip {
  padding: $gutter 0;
}

ul.favorites__list {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    &.emoji {
      font-size: 2.4rem;
    }
  }
}

@media (min-width: $screen__m) {
}

@media (min-width: $screen__l) {
}

@media (prefers-color-scheme: dark) {
}
</style>
