<template>
  <main></main>
</template>

<script></script>

<style lang="scss">
.work__detail {
  padding-bottom: $gutter * 2;
  border-bottom: 1px dashed $color-black;
  .work__detail + .group {
    margin-top: $gutter * 3;
  }
  h1.work__title {
    padding: $gutter 0;
    font-size: 2.1rem;
    font-weight: 400;
  }

  .work__description {
    padding: 0 0 $gutter;
    ul.featured {
      list-style: circle;
      padding: $gutter 0 $gutter 2em;
    }
    p {
      font-size: 1.2rem;
    }
    p + p {
      margin-top: $gutter;
    }
  }

  .tags {
    padding: 0 0 $gutter;
  }

  .works__cover {
    padding: 0 0 $gutter;
  }

  .works__images {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 $gutter;
    .img {
      @include flex-2-gutter;
      margin-bottom: $gutter;
    }
  }

  .back-to-list {
    margin-top: $gutter * 2;
  }
}
</style>
