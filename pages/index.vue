<template>
  <main class="main">
    <div class="container gutter">
      <work-model />

      <div class="group">
        <h1 class="group__title">Skills</h1>
        <div class="skills__body">
          <ul class="skills__list list">
            <li>
              JavaScript
              <span class="small">(Nuxt.js, Vue.js, TypeScript)</span>
            </li>
            <li>
              HTML, CSS
              <span class="small">(SCSS, LESS)</span>
            </li>
            <li>Web Design</li>
            <li>WordPress</li>
            <li>Magento</li>
            <!-- <li>English (TOEIC 685), Chinese (HKS 4)</li> -->
          </ul>
        </div>
      </div>

      <div class="group">
        <h1 class="group__title">Works</h1>
        <ul class="works__list">
          <li>
            <div class="item item--video">
              <div class="thumb">
                <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video>
              </div>
              <div class="item__card">
                <a href="https://bluelug.com/">bluelug.com</a>
              </div>
            </div>
          </li>
          <li>
            <div class="item item--video">
              <div class="thumb">
                <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video>
              </div>
              <div class="item__card">
                <a href="https://t430.com">t430.com</a>
              </div>
            </div>
          </li>
          <li>
            <div class="item item--video">
              <div class="thumb">
                <!-- <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video> -->
              </div>
              <div class="item__card">
                <a href="https://t430.com">t430.com</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="group">
        <h1 class="group__title">Favorites</h1>
        <div class="group__body">
          <ul class="favorites__list">
            <li class="emoji">🍉🍺🥦☕️</li>
            <li>Ride BMX</li>
          </ul>
        </div>
      </div>

      <div class="group">
        <h1 class="group__title">Why yellow?</h1>
        <div class="group__body">
          <p>Because, I love it🍋</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
    workModel: () => import('~/components/work__modal.vue')
    // Logo: () => import('~/components/Logo.vue')
  }
}
</script>

<style lang="scss">
.container {
  a {
    color: $color-orange;
  }
  // background: $color-yellow;
}

.group {
  // display: grid;
  padding: 0;
  margin: 0 0 $gutter * 4;
}
.group__title {
  // flex-basis: 200px;
  padding: $gutter 0;
  margin: 0 0 $gutter;
  // background-color: $color-yellow;
}
// ul.skills__list {
//   li {
//     //
//   }
// }

ul.works__list {
  width: 100%;
  // display: flex;
  // flex-wrap: wrap;
  li {
    // @include flex-2-gutter;
    padding: $gutter / 2 0;
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  padding: $gutter;
  background: $color-white;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  // .item--video {
  // width: 100%;
  // background: $color-yellow3;
  // overflow: hidden;
  // }
  .thumb {
    width: 100%;
    height: 300px;
    overflow: hidden;
    video {
      -o-object-fit: cover;
      object-fit: cover;
      max-width: none;
      width: 100%;
      height: 100%;
    }
  }
  .item__card {
    width: 100%;
    background: $color-yellow;

    padding: $gutter;
    a {
      color: $color-white;
    }
  }
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
  ul.works__list {
    @include display-flex-wrap;
    li {
      @include flex-2-gutter;
    }
  }
}

@media (min-width: $screen__l) {
  ul.works__list {
    li {
      @include flex-3-gutter;
    }
  }
}
</style>
