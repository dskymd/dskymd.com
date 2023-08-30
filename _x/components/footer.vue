<template>
  <footer class="footer">
    <div class="container">
      <accounts />
      <!-- <span class="copyrights">© dskymd</span>️ -->
    </div>
  </footer>
</template>

<script>
export default {
  components: { Accounts: () => import('~/components/accounts.vue') }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: $gutter;
  background-color: $color-black; // $color-yellow;

  .container {
    text-align: center;
  }

  .copyrights {
    color: $color-gray;
  }
}

// @media (min-width: $screen__m) {
// }

@media (prefers-color-scheme: dark) {
  .footer {
    background-color: $color-black;
    border-top: 1px solid $color-gray;
  }
}
</style>
