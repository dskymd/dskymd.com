<template>
  <header class="header">
    <div class="container">
      <h1>
        dskymd
        <span class="small">Front-end Developer</span>
      </h1>
      <div class="menu">
        <button class="button__menu" @click="toggleMenu">menu</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu: function() {
      // toggleMenu
      console.log('toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-yellow;
  border-bottom: 1px solid $color-yellow3;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: $gutter;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
h1 {
  font-size: 1.8rem;
  font-family: $font-playfair;
  // color: $color-white;
}
.small {
  font-size: 1.2rem;
  font-weight: 400;
}

button.button__menu {
  padding: $gutter / 2 $gutter;
  margin: 0;
  border: 1px solid $color-black;
  border-radius: 3px;
  color: $color-yellow;
  text-transform: uppercase;
  font-size: 1.2rem;
  background: $color-black;
}

@media (min-width: $screen__m) {
  h1 {
    font-size: 2.4rem;
  }
  .small {
    font-size: 1.6rem;
  }
}
</style>
