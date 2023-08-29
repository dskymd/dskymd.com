<template>
  <div class="works__model__overlay">
    <div class="works__model"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.works__model__overlay {
  &.show {
    opacity: 1;
    visibility: visible;
  }
  opacity: 0;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: $gutter;
}
.works__model {
  background-color: $color-white;
  padding: $gutter * 2;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
}
</style>
