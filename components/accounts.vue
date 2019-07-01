<template>
  <div class="accounts">
    <ul class="accounts__list">
      <li>
        <a href="https://instagram.com/dskymd">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/dskymd">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <!-- <li>
            <a href="https://github.com/dskymd">
              <i class="fab fa-github"></i>
            </a>
      </li>-->
      <li>
        <a href="https://note.mu/dskymd">
          <img
            src="~/assets/images/icon__note-symbol--white.svg"
            alt="note"
            class="img__icon--note"
          />
        </a>
      </li>

      <!-- <li>
            <a href="https://www.facebook.com/daisuke.yamada.7737769/">
              <i class="fab fa-facebook-square"></i>
            </a>
      </li>-->
      <!-- <li>
            <a href="https://dskymd.com/portfolio">Portfolio</a>
      </li>-->
      <li>
        <a href="https://qiita.com/dskymd">
          <img src="~/assets/images/icon__qiita--white.svg" alt="qiita" class="img__icon--qiita" />
        </a>
      </li>
      <!-- <li>
            <a href="https://blog.dskymd.com"> <i class="fab fa-wordpress-simple"></i> blog.dskymd.com </a>
      </li>-->
    </ul>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.accounts__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
// li {}
a {
  color: $color-white;
  font-size: 1.4rem;
  padding: $gutter / 2;
}
.img__icon {
  height: 21px;
  width: auto;
}
.img__icon--note {
  @extend .img__icon;
  height: 24px;
}
.img__icon--qiita {
  @extend .img__icon;
  height: 12px;
}

@media (min-width: $screen__m) {
  a {
    font-size: 1.8rem;
  }
  .img__icon--note {
    height: 26px;
    vertical-align: middle;
  }
  .img__icon--qiita {
    height: 14px;
  }
}

@media (min-width: $screen__l) {
  a {
    font-size: 2.2rem;
  }
  .img__icon--note {
    height: 30px;
  }
  .img__icon--qiita {
    height: 14px;
  }
}
</style>
