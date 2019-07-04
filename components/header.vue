<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="container">
        <h1>
          <span class="emoji">😗</span> dskymd
          <span class="emoji">😗</span>
          <span class="small">Front-end Developer 🦐</span>
        </h1>
        <div class="menu">
          <!-- <button class="button__menu" @click="toggleMenu">menu</button> -->
        </div>
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
  padding-bottom: $gutter;
  background-color: $color-yellow;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.header__wrapper {
  border-bottom: 1px dashed $color-black;
  padding: $gutter;
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
  background: $color-black;
  border-radius: 3px;
  color: $color-yellow;
  text-transform: uppercase;
  font-size: 1.2rem;
  &:hover {
    background-color: $color-black-hover;
    cursor: pointer;
  }
  &:active {
    background-color: $color-gray;
    background-color: $color-black-hover;
  }
}

@media (min-width: $screen__m) {
  h1 {
    font-size: 2.4rem;
  }
  .small {
    font-size: 1.6rem;
  }
}

@media (max-width: $screen__xs) {
  .emoji {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    background-color: $color-black;
  }
  .header__wrapper {
    border-color: $color-yellow;
  }

  button.button__menu {
    background: $color-yellow;
    border-color: $color-yellow;
    color: $color-black;
    &:hover {
      background-color: $color-yellow-dark;
    }
    &:active {
      background-color: $color-yellow-dark;
      // color: $color-red;
    }
  }
}
</style>
