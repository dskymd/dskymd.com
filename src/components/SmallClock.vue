<script setup lang="ts">
import SmallClockNeedle from "../components/SmallClockNeedle.vue";
import SmallClockBase from "../components/SmallClockBase.vue";
</script>

<template>
  <div class="canvasView">

    <div class="smallCloclWrapper">
      <SmallClockBase></SmallClockBase>
      <SmallClockNeedle></SmallClockNeedle>
    </div>

  </div>
</template>

<style scoped>
.canvasView {
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 150px;

  .header {
    width: 100%;
    padding: 2em;
  }

  .body {
    width: 1000px;
    margin: auto;
    /* background: #eee; */
    /* border: 1px solid #eee; */
  }

  p {
    color: #F90;
  }
}

.smallCloclWrapper {
  position: relative;
  height: 150px;
}

.smallCloclWrapper canvas {
  position: absolute;
  left: 0;
  top: 0;
}

@media (max-width: 768px) {}
</style>
