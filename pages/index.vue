<template>
  <div class="container">
    <h1>Accounts</h1>
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

    <h1>Work</h1>
    <ul>
      <li>
        <a href="https://bluelug.com/">bluelug.com</a>
      </li>
      <li>
        <a href="https://t430.com">t430.com</a>
      </li>
    </ul>
    <Logo />
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo: () => import('~/components/Logo.vue')
  }
}
</script>

<style lang="scss">
.container {
  a {
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
