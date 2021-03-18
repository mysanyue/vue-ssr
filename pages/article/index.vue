<template>
  <section class="detial-container">
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <h1>{{ article.title }}</h1>
          <article-meta :article="article" />
        </div>
      </div>

      <div class="container page">
        <div class="row article-content">
          <div class="col-md-12" v-html="article.body"></div>
        </div>

        <hr />

        <div class="article-actions">
          <article-meta :article="article" />
        </div>

        <div class="row">
          <article-comments :article="article" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleApi from '@/api/article'
import markdownIt from 'markdown-it'
import articleMeta from './components/articleMeta'
import ArticleComments from './components/articleComments'

export default {
  name: 'article',
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description }
      ]
    }
  },
  components: {
    articleMeta,
    ArticleComments
  },
  async asyncData({ params }) {
    const { data } = await articleApi.getArticle(params.slug)
    const { article } = data
    const md = new markdownIt()
    // markdown -> html
    article.body = md.render(article.body)

    return { article }
  }
}
</script>
