<template>
  <ul class="works__list">
    <li>
      <div class="item">
        <div class="thumb">
          <nuxt-link to="works/430/">
            <img src="images/work__thumb-430.jpg" alt="t430.com" />
          </nuxt-link>
        </div>
        <div class="item__card">
          <nuxt-link to="works/430/">t430.com</nuxt-link>
          <div class="tags">
            <span>Nuxt.js</span>
            <span>WordPress</span>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="item item--video">
        <div class="thumb">
          <nuxt-link to="works/430-contact/">
            <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video>
          </nuxt-link>
        </div>
        <div class="item__card">
          <nuxt-link to="works/430-contact/">t430.com/contact</nuxt-link>
          <div class="tags">
            <span>Nuxt.js</span>
            <span>reCAPTCHA</span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="item item--video">
        <div class="thumb">
          <nuxt-link to="works/bl-wheel/">
            <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video>
          </nuxt-link>
        </div>
        <div class="item__card">
          <nuxt-link to="works/bl-wheel/">Wheel Order Form</nuxt-link>
          <div class="tags">
            <span>Vue.js</span>
            <span>Magento</span>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="item item--video">
        <div class="thumb">
          <nuxt-link to="works/bl-bike-catalog/">
            <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video>
          </nuxt-link>
        </div>
        <div class="item__card">
          <nuxt-link to="works/bl-wheel/">Bike Catalog Input Assistant</nuxt-link>
          <div class="tags">
            <span>Vue.js</span>
            <span>Wordpress</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
  height: 100%;
  // .item--video {
  // width: 100%;
  // background: $color-yellow3;
  // overflow: hidden;
  // }
  .thumb {
    width: 100%;
    height: 260px;
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
    font-size: 1.4rem;
    a {
      color: $color-black;
    }
    .tags {
      padding: $gutter / 1.5 0 0;
      span {
        display: inline-block;
        padding: 4px 8px;
        margin: 0;
        background-color: $color-black;
        color: $color-yellow;
        border-radius: 4px;
        font-size: 1rem;
      }
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
  .item {
    .thumb {
      height: 220px;
    }
  }
}

@media (min-width: $screen__l) {
  ul.works__list {
    li {
      @include flex-3-gutter;
    }
  }
  .item {
    .thumb {
      height: 160px;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .item {
    background-color: #000; // $color-black;
  }
}
</style>
