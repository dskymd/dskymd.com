<script setup lang="ts">
import { ref } from 'vue'
import { marked } from "marked";


const md = `### readme
### hogege
dsd

dsds
ds


dsds

[link](https://dskymd.com)

thankss.`

const htmlContent = ref(marked(md))

</script>
<template>
  <main class="main">

    <div class="groups">


      <div class="group">
        <h3 class="group__title">Profile</h3>
        <div class="group__body">
          <ul class>
            <li>Born in Niigata, currently resides in Tokyo, Japan</li>
            <li>Work at CloudSign as software engineer (Jan 2020 - Present)</li>
          </ul>
        </div>
      </div>


      <div class="group">
        <h3 class="group__title">Skill</h3>
        <div class="skills__body">
          <ul class="skills__list list">
            <li>
              JavaScript, Vue.js, Nuxt.js, TypeScript
            </li>
            <li>
              HTML, CSS
            </li>
          </ul>
        </div>
      </div>

      <div class="group">
        <h3 class="group__title">Project</h3>
        <div class="description">
          <ul>
            <li><a href="https://t430.com">t430.com</a> - 2019, Nuxt.js, WordPress</li>
          </ul>
          <div class="text_content_body">
            <div v-html="htmlContent"></div>
          </div>
        </div>
      </div>


      <div class="group">
        <h3 class="group__title">Blog</h3>
        <div class="group__body">
          <ul class="favorites__list">
            <li><a href="https://creators.bengo4.com/entry/2023/09/08/083000" rel="noreferrer">
                長くなりがちだったコードレビューを改善した話</a></li>
          </ul>
        </div>
      </div>



      <div class="group">
        <h3 class="group__title">Contribution</h3>
        <div class="group__body">
          <ul class>
            <li>
              <a href="https://developer.mozilla.org/ja/profiles/dskymd">Translation of MDN web docs</a>
            </li>
            <li>
              <a href="https://github.com/nuxt/docs/pulls?utf8=✓&q=author%3Adskymd">Typo fix of Nuxt.js docs</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </main>
</template>

  
<style scoped>
.group {
  margin: 0 0 4rem;
}


.text_content_body {
  display: none;
  padding: 2rem;
  background: #eee;
}
</style>