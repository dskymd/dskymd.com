<script setup lang="ts">
</script>

<template>
  <footer>
    <div class="accounts">
      <ul class="accounts_list">
        <li>
          <a href="https://instagram.com/dskymd">
            <img src="/images/icon__instagram.svg" alt="instagram" class="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/dskymd">
            <img src="/images/icon__github.svg" alt="github" class="icon icon--github" />
          </a>
        </li>
        <li>
          <a href="https://qiita.com/dskymd">
            <img src="/images/icon__qiita.svg" alt="qiita" class="icon icon--qiita" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dskymd">
            <img src="/images/icon__twitter.svg" alt="twitter" class="icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.accounts {
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  /* position: absolute; */
  /* left: 0;
  bottom: 0; */
  border-top: 1px solid #333;
}

.accounts_list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
}

.accounts_list li {
  padding: 0.5rem;
}

.icon {
  height: 1rem;
}
</style>
