<template>
  <main class="main">
    <div class="container gutter">
      <div class="group">
        <h1 class="group__title">Accounts</h1>
        <ul>
          <li>
            <a href="https://dskymd.com/portfolio">dskymd - Portfolio</a>
          </li>
          <li>
            <a href="https://blog.dskymd.com">blog - dskymd.com</a>
          </li>
          <li>
            <a href="https://github.com/dskymd">dskymd@github.com</a>
          </li>
          <li>
            <a href="https://qiita.com/dskymd">dskymd@qiita.com</a>
          </li>
          <li>
            <a href="https://instagram.com/dskymd">dskymd@instagram.com</a>
          </li>
          <li>
            <a href="https://twitter.com/dskymd">dskymd@twitter.com</a>
          </li>
          <li>
            <a href="https://www.facebook.com/daisuke.yamada.7737769/">dskymd@facebook.com</a>
          </li>
        </ul>
      </div>
      <div class="group">
        <h1 class="group__title">Work</h1>
        <ul>
          <li>
            <a href="https://bluelug.com/">bluelug.com</a>
          </li>
          <li>
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
}
</style>
