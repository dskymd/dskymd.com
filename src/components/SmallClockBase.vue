<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasClock = ref<HTMLCanvasElement | undefined>()

const stage = 1000 * 2
const stageCenter = stage / 2
const radius = 360 * 2 // 半径
const angle360 = 360
const angle180 = angle360 / 2


// 放射線の数
const indexNum = 360

type Point = {
  x: number
  y: number
}


const calRadialPoint = (ang: number): Point => {
  const x = Math.sin(ang * (Math.PI / angle180))
  const y = Math.cos(ang * (Math.PI / angle180))
  return { x, y }
}


const isLong = (n: number) => {
  const x = indexNum / 12
  return n % x === 0
}



onMounted(() => {

  const ctx = canvasClock.value?.getContext("2d")!;

  // 外円
  // ctx.fillStyle = "#f00";
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 8 * 2
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, radius, Math.PI * 0, Math.PI * 2.5)
  // ctx.arc(radius.value, radius.value, radius.value, 0, Math.PI * 2)
  // * Math.PI / 180, 360 * Math.PI / 180, false )
  ctx.stroke()


  // 内円
  ctx.strokeStyle = "#bbb";
  ctx.lineWidth = 32 * 2
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, radius * 0.90, Math.PI * 0, Math.PI * 2)
  ctx.stroke()


  // 放射線
  for (let i = 0; i < indexNum; i++) {

    const ang = angle360 / indexNum * i // 角度を少し（=360/num）度づつ増やしていく
    const offset1 = 30 * 2
    const offset2 = 60 * 2
    const offsetBasis = radius * 0.90

    const p = calRadialPoint(ang)
    const px1 = p.x * (offsetBasis - offset1)
    const py1 = p.y * (offsetBasis - offset1)

    const px2 = p.x * (offsetBasis - (isLong(i) ? offset2 * 1.1 : offset2))
    const py2 = p.y * (offsetBasis - (isLong(i) ? offset2 * 1.1 : offset2))

    ctx.beginPath();
    ctx.strokeStyle = isLong(i) ? "#333" : "#999";
    ctx.lineWidth = 2; // isLong(i) ? 2 : 1
    ctx.moveTo(stageCenter + px1, stageCenter + py1);
    ctx.lineTo(stageCenter + px2, stageCenter + py2);
    ctx.stroke();


    ctx.font = '16px san-serif';
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    if (isLong(i)) ctx.fillText(i.toString(10), stageCenter + px2 - (p.x * 20), stageCenter + py2 - (p.y * 20));
  }


})
</script>



<template>
  <canvas width="2000" height="2000" class="canvasClock" ref="canvasClock"
    style="width: 1000px; height: 1000px;"></canvas>
</template>

<style scoped>
/* .canvasClock { */
/* background: #fff; */
/* } */
</style>
