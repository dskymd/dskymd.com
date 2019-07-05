<template>
  <main class="main">
    <div class="container gutter">
      <div class="work__detail">
        <h2 class="content__title">Works</h2>
        <h1 class="work__title">430 - Fourthiry Official Site.</h1>

        <div class="works__cover">
          <img src="/images/works__430__cover.jpg" alt="430" />
        </div>

        <div class="work__description">
          <ul class="featured">
            <li>Nuxt.jsによるシンプルで軽快な動作のウェブサイト</li>
            <li>商品データのキャッシュ化によるレスポンスの速さ</li>
            <li>WordPressによる更新のしやすさ</li>
          </ul>

          <p>BMXライダーを中心としたストリートアパレルブランドのウェブサイトです。Nuxt.jsを使い、シンプルながらも軽量な動作を目指しました。</p>
          <p>
            年３回追加されるコレクションごとに洋服が見れるよう設計をしています。更新はクライアント側でも更新しやすいようにWordPressを、お知らせの更新も同一のシステムで行えるのでその辺りの管理は楽でした。
          </p>
          <p>
            商品の詳細情報を素早く表示させるため、wpからのjsonデータをphpにてキャッシュ化・不要な情報の削除をして読み込んでいます。それにより商品から商品への快適なブラウジングを実現できました。
          </p>
          <p>
            ほか、動的なページとしてはお知らせページや問い合わせフォームにGoogle reCAPTCHA V3を導入しました。問い合わせフォームについての詳細は
            <nuxt-link to="/works/430-contact">こちら</nuxt-link>でご紹介しています。
          </p>
          <p class="url">
            <a href="https://t430.com/">https://t430.com</a>
          </p>
          <p></p>
        </div>

        <div class="tags">
          <span>Nuxt.js</span>
          <span>WordPress</span>
          <span>reCAPTCHA</span>
          <span>PHP</span>
          <span>Design</span>
        </div>

        <div class="works__images">
          <div class="img">
            <img src="/images/works__430__img--1.jpg" alt />
          </div>

          <div class="img">
            <img src="/images/works__430__img--9.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--14.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--13.jpg" alt />
          </div>

          <div class="img">
            <img src="/images/works__430__img--10.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--11.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--12.jpg" alt />
          </div>

          <div class="img">
            <img src="/images/works__430__img--2.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--3.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--4.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--5.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--6.jpg" alt />
          </div>
          <div class="img">
            <img src="/images/works__430__img--8.jpg" alt />
          </div>
        </div>

        <div class="back-to-list">
          <nuxt-link to="/" class="button">BACK TO LIST</nuxt-link>
        </div>
      </div>

      <div class="group group--list other-works">
        <h3>Other Works</h3>
        <works-list />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    worksList: () => import('~/components/works__list')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/works.scss';
</style>
