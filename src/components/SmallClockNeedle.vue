<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasClock = ref<HTMLCanvasElement | undefined>()

const stage = 150 * 2
const stageCenter = stage / 2
const radius = 72 * 2 // 半径
// const angle360 = 360
const angle180 = 180

const ctx = ref()

// 放射線の数
// const indexNum = 360

type Point = {
  x: number
  y: number
}


const calRadialPoint = (ang: number): Point => {
  const x = Math.sin(ang * (Math.PI / angle180))
  const y = Math.cos(ang * (Math.PI / angle180))
  return { x, y }
}


// const isLong = (n: number) => {
//   const x = indexNum / 12
//   return n % x === 0
// }

onMounted(() => {

  ctx.value = canvasClock.value?.getContext("2d")!;

  draw()

})

const _draw = () => {

  ctx.value.clearRect(0, 0, canvasClock.value?.width, canvasClock.value?.height);

  ctx.value.strokeStyle = '#555'
  ctx.value.lineWidth = 4

  const offset1 = 0 * 2
  const offset2 = 100 * 2
  const offset3 = 0 * 2
  const offsetBasis = radius * 0.8

  // new Date
  const dt = new Date()
  const angHour = 30 * (-1 * dt.getHours() % 12)
  const angHourMinute = 30 * (dt.getHours() / 60)
  const angMinute = 180 - 6 * dt.getMinutes()
  const angSeconds = 180 - 6 * dt.getSeconds()

  // 短針
  const p = calRadialPoint(angHour - angHourMinute)
  const px1 = p.x * (0 - offset1)
  const py1 = p.y * (0 - offset1)
  const px2 = p.x * (offsetBasis - offset2)
  const py2 = p.y * (offsetBasis - offset2)

  ctx.value.beginPath();
  ctx.value.moveTo(stageCenter + px1, stageCenter + py1);
  ctx.value.lineTo(stageCenter + px2, stageCenter + py2);
  ctx.value.stroke();


  // 長針
  const p2 = calRadialPoint(angMinute)
  const p2x1 = p2.x * (0 - offset1)
  const p2y1 = p2.y * (0 - offset1)
  const p2x2 = p2.x * (offsetBasis - offset3)
  const p2y2 = p2.y * (offsetBasis - offset3)

  ctx.value.beginPath();
  ctx.value.moveTo(stageCenter + p2x1, stageCenter + p2y1);
  ctx.value.lineTo(stageCenter + p2x2, stageCenter + p2y2);
  ctx.value.stroke();


  // 秒針
  ctx.value.strokeStyle = '#333'
  ctx.value.lineWidth = 2

  const p3 = calRadialPoint(angSeconds)
  const p3x1 = p3.x * (0 - 36)
  const p3y1 = p3.y * (0 - 36)
  const p3x2 = p3.x * (offsetBasis - offset3)
  const p3y2 = p3.y * (offsetBasis - offset3)

  ctx.value.beginPath();
  ctx.value.moveTo(stageCenter + p3x1, stageCenter + p3y1);
  ctx.value.lineTo(stageCenter + p3x2, stageCenter + p3y2);
  ctx.value.stroke();


  //   ctx.value.font = '16px san-serif';
  //   ctx.value.textAlign = 'center'
  //   ctx.value.textBaseline = 'middle'
  //   if (isLong(i)) ctx.value.fillText(i.toString(10), stageCenter + px2 - (p.x * 20), stageCenter + py2 - (p.y * 20));
  // }


  // 内円
  // ctx.value.strokeStyle = "#bbb";
  ctx.value.fillStyle = "#fcca0a"; // 背景色に合わせる
  ctx.value.lineWidth = 2 * 3
  ctx.value.beginPath()
  ctx.value.arc(stageCenter, stageCenter, 4 * 2, Math.PI * 0, Math.PI * 2)
  ctx.value.stroke()
  ctx.value.fill()
  // console.log('draw')

}



const duration = 1000 // ms
let lastDrawedAt = Date.now()
const draw = () => {

  if (Date.now() - lastDrawedAt > duration) {
    _draw()
    lastDrawedAt = Date.now()
  }
  requestAnimationFrame(draw)
}

</script>



<template>
  <canvas width="300" height="300" class="canvasClock" ref="canvasClock" style="width: 150px; height: 150px;"></canvas>
</template>

<style scoped>
/* .canvasClock {
  background: #fff;
} */
</style>
