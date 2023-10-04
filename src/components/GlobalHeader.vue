<script setup lang="ts">
import SmallClock from '../components/SmallClock.vue'

</script>

<template>
  <header class="globalHeader">
    <h1>dskymd.com</h1>
    <div class="clockWrapper">
      <SmallClock />
    </div>
  </header>
</template>

<style scoped>
.globalHeader {
  background-color: #fcca0a;
  padding: 2rem;
  margin: 0 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* .clockWrapper {} */


@media (max-width: 768px) {

  .globalHeader {
    flex-wrap: wrap;

    justify-content: center;

  }

  h1 {
    width: 100%;
    text-align: center;
  }
}
</style>
