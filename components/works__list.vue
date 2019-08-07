<template>
  <ul class="works__list">
    <li>
      <div class="item">
        <nuxt-link to="/works/bl-bike-catalog/">
          <div class="thumb">
            <img src="/images/works__bl-bike-catalog__thumb.jpg" alt="BLUE LUG - BIKE CATALOG" />
          </div>
          <div class="item__card">
            <!-- BLUE LUG -  -->
            BIKE CATALOG
            <div class="tags">
              <span>Vue.js</span>
              <span>JavaScript</span>
              <!-- <span>WordPress</span> -->
              <!-- <span>Flickr API</span> -->
            </div>
          </div>
        </nuxt-link>
      </div>
    </li>
    <li>
      <div class="item">
        <nuxt-link to="/works/430/">
          <div class="thumb">
            <img src="/images/works__430__thumb.jpg" alt="t430.com" />
          </div>
          <div class="item__card">
            t430.com
            <div class="tags">
              <span>Nuxt.js</span>
              <span>WP-REST</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </li>
    <li>
      <div class="item">
        <nuxt-link to="/works/430-contact/">
          <div class="thumb">
            <img src="/images/works__430-contact__thumb.jpg" alt="t430.com/contact" />
          </div>
          <div class="item__card">
            t430.com/contact
            <div class="tags">
              <span>Nuxt.js</span>
              <span>reCAPTCHA</span>
              <span>PHP</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </li>

    <!-- <li>
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
    </li>-->
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

// as list at wotks dettail bottom
.group--list {
  ul.works__list {
    // background-color: #f90000;
    display: flex;
    flex-wrap: wrap;
    // li {
    //   // @include flex-2-gutter;
    // }
  }
}

.item {
  height: 100%;
  // .item--video {
  // width: 100%;
  // background: $color-yellow3;
  // overflow: hidden;
  // }
  a {
    display: flex;
    flex-wrap: wrap;
    background: $color-white;
    display: inline-block;
    padding: $gutter;
    color: $color-black;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
    height: 100%;

    &:hover,
    &:active {
      box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.3);
      // background: $color-text;
    }

    .thumb {
      width: 100%;
      height: 260px;
      overflow: hidden;
      video,
      img {
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
    background-color: $color-black-000; // $color-black;
  }
}
</style>
