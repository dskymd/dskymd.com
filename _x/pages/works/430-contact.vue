<template>
  <main class="main">
    <div class="container gutter">
      <div class="work__detail">
        <h2 class="content__title">Works</h2>
        <h1 class="work__title">t430.com - Contact Form</h1>

        <div class="works__cover">
          <img src="/images/works__430-contact__cover.jpg" alt="430" />
        </div>

        <div class="work__description">
          <ul class="featured">
            <li>機械学習を利用したreCAPTCHA v3によるBot判定</li>
            <li>送信失敗時の入力データのlocalStorageへの保存</li>
          </ul>

          <p>Nutx.jsで作成したサイトに設置したコンタクトフォーム。</p>
          <p>BOT対策にユーザーへの負担がないreCAPTCHA v3を導入しました。</p>
          <p>そのなかで、仮にBOTではないユーザーが設定したスコアより低くBOT判定されたなど、送信ができなかった場合の処理を工夫しました。</p>
          <p>
            なんらかの理由で送信が失敗した際に再度入力を試みてもらうのもストレスになると思うので、そのん場合はユーザーのlocalStorageに入力したデータを保存する仕組みを導入し、更新時・再訪問時に自動的に入力されているようにしました。
          </p>
          <p>その後同じブラウザで送信が成功した場合localStorageのデータは削除されます。</p>
          <p>
            こちらのサイト t430.comのその他のポイントは
            <nuxt-link to="/works/430-contact">こちら</nuxt-link>でご紹介しています。
          </p>
          <p class="url">
            <a href="https://t430.com/contact/">https://t430.com/contact</a>
          </p>
          <p></p>
        </div>

        <div class="tags">
          <span>Nuxt.js</span>
          <span>reCAPTCHA</span>
          <span>PHP</span>
          <span>Design</span>
        </div>

        <div class="works__images">
          <div class="img">
            <img src="/images/works__430-contact__img--1.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430-contact__img--5.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430-contact__img--2.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430-contact__img--3.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430-contact__img--4.jpg" alt />
          </div>
        </div>

        <div class="back-to-home">
          <nuxt-link to="/" class="button">BACK TO HOME</nuxt-link>
        </div>
      </div>

      <works-list-other />
    </div>
  </main>
</template>

<script>
export default {
  components: {
    worksListOther: () => import('~/components/works__list--other')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/works.scss';
</style>
