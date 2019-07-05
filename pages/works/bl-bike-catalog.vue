<template>
  <main class="main">
    <div class="container gutter">
      <div class="work__detail">
        <h2 class="content__title">Works</h2>
        <h1 class="work__title">BIKE CATALOG (Input Assistant)</h1>

        <div class="works__cover">
          <img src="/images/works__bl-bike-catalog__cover.jpg" alt="BIKE CATALOG" />
        </div>

        <div class="work__description">
          <ul class="featured">
            <li>WP+FlickrAPIによるBIKE CATALOG</li>
            <li>記事更新ページでクリックのみで関連商品をECサイト(Matento)から選択</li>
            <li>ひとつの入力から複数の項目への入力補助</li>
          </ul>

          <p>
            コンテンツ自体は数年前に作成した通常のWordPressのもの。表示側も標準のテンプレート。データーをFlickrの情報と紐付けし、画像を動的に出力。また関連商品をECサイトの商品へリンク。
          </p>
          <p>最近の作業としては入力画面上（WordPress）での効率化。週にすると多くて10件以上は更新があります。</p>
          <p>使われているパーツのテキストのリストから、関連商品の検索リンクを生成。キーボードをタイプすることなくクリックだけで関連商品を選択できる。</p>
          <p>
            商品の検索結果の中から選択された商品と、すでに選択されている商品とで表示を分離。また、裏側のデータを反映させるタイミングと表示側で整理するタイミングをあえて分け、使い勝手を考慮している。
          </p>
          <p>また、テキストデータをFlickrの情報からコピペする際に、規定のフォーマットをベースに入力の補助をしています。</p>
          <p>
            例えば「タイトル」に「 *[メーカー名]* [モデル名]
            ([サイズ])」のような形式のFlickrからデータを貼り付けると、正規化しそれぞれの入力に追加、また該当するメーカー名・モデル名のカテゴリを選択、など。
          </p>
          <p>今後の改善点としては自動入力時のリアクション（背景色をつけるなど）があると機能の認知や間違いの防止に繋がるかなと思います。</p>
          <p>上記組み合わせで入力作業がかなり短縮されました。</p>

          <p class="url">
            <a href="https://bluelug.com/bike-catalog/">https://bluelug.com/bike-catalog</a>
          </p>
          <p></p>
        </div>

        <div class="tags">
          <span>Vue.js</span>
          <span>JavaScript</span>
          <span>jQuery</span>
          <span>FlickrAPI</span>
        </div>

        <div class="works__images">
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--2.jpg" alt />
          </div>
          <!-- <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--3.jpg" alt />
          </div>-->
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--4.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--5.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--6.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--7.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--8.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--11.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--9.jpg" alt />
          </div>
          <div class="img img--full">
            <img src="/images/works__bl-bike-catalog__img--10.jpg" alt />
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
