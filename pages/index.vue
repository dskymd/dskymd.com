<template>
  <main class="main">
    <div class="container">
      <div class="group">
        <h1 class="group__title">Accounts</h1>
        <ul>
          <li>
            <a href="https://dskymd.com/portfolio">dskymd - Portfolio</a>
          </li>
          <li>
            <a href="https://blog.dskymd.com">blog - blog.dskymd.com</a>
          </li>
          <li>
            <a href="https://github.com/dskymd">dskymd@github.com</a>
          </li>
          <li>
            <a href="https://qiita.com/dskymd">dskymd@qiita.com</a>
          </li>
          <li>
            <a href="https://instagram.com/dskymd"> <i class="fab fa-instagram"></i> instagram.com @dskymd </a>
          </li>
          <li>
            <a href="https://twitter.com/dskymd"> <i class="fab fa-twitter"></i> twitter.com @dskymd </a>
          </li>
          <li>
            <a href="https://www.facebook.com/daisuke.yamada.7737769/"> <i class="fab fa-facebook-square"></i> facebook @dskymd </a>
          </li>
        </ul>
      </div>
      <div class="group">
        <h1 class="group__title">Work</h1>
        <ul>
          <li>
            <div class="thumb">
              <!-- <video autoplay playsinline loop muted src="/videos/BK117_Thumbnail.mp4"></video> -->
            </div>
            <a href="https://bluelug.com/">bluelug.com</a>
          </li>
          <li>
            <div class="thumb">
              <video autoplay playsinline loop muted src="/videos/video-vue-input-wheel.mp4"></video>
            </div>
            <a href="https://t430.com">t430.com</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
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
  display: grid;

  .group__title {
    // flex-basis: 200px;
    padding: $gutter;
    margin: 0 0 $gutter;
    background-color: $color-yellow;
  }

  ul {
    list-style: none;
    // padding: 0;
    // margin: 0;
  }
  li {
    font-size: 1.4rem;
    padding: $gutter / 2 0;
  }

  .thumb {
    width: 300px;
    height: 140px;
    overflow: hidden;
    video {
      -o-object-fit: cover;
      object-fit: cover;
      max-width: none;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
