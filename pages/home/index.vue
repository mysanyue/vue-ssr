<style scoped>
</style>
<template>
  <section class="home-container">
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">GitHub</h1>
          <p>一个分享您的知识的地方</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li v-if="user" class="nav-item">
                  <nuxt-link :to="{ name: 'home', query: { tab: 'your_feed' } }" :class="{ active: tab === 'your_feed' }" exact class="nav-link">我的文章</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :to="{ name: 'home', query: { tab: 'global_feed' } }" :class="{ active: tab === 'global_feed' }" exact class="nav-link">全部文章</nuxt-link>
                </li>
                <li v-if="tag" class="nav-item">
                  <nuxt-link :to="{ name: 'home', query: { tab: 'tag', tag } }" :class="{ active: tab === 'tag' }" class="nav-link">#{{ tag }}</nuxt-link>
                </li>
              </ul>
            </div>

            <div v-for="article in articles" :key="article.slug" class="article-preview">
              <div class="article-meta">
                <nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }">
                  <img :src="article.author.image" />
                </nuxt-link>
                <div class="info">
                  <nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }">{{ article.author.username }}</nuxt-link>
                  <span class="date">{{ article.createdAt | date }}</span>
                </div>
                <button @click="onFavorite(article)" :disabled="article.favoriteDisabled" :class="{ active: article.favorited }" class="btn btn-outline-primary btn-sm pull-xs-right"><i class="ion-heart"></i> {{ article.favoritesCount }}</button>
              </div>
              <nuxt-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
                <h1>{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <span>Read more...</span>
              </nuxt-link>
            </div>

            <!-- 分页 -->
            <nav>
              <ul class="pagination">
                <li class="page-item" v-for="item in totalPage" :key="item" :class="{ active: item === page }">
                  <nuxt-link :to="{ name: 'home', query: { page: item, tag, tab } }" class="page-link">{{ item }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>

          <!-- 标签 -->
          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>
              <div class="tag-list">
                <nuxt-link class="tag-pill tag-default" v-for="item in tags" :key="item" :to="{ name: 'home', query: { tab: 'tag', tag: item } }">{{ item }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleApi from '@/api/article'
import tagApi from '@/api/tag'
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  // 解决点击页码 重新加载 asyncData 问题
  // url 地址栏有相应参数，重新触发 asyncData
  watchQuery: ['page', 'tag', 'tab'],
  // 服务器端渲染 获取首页数据
  async asyncData({ query, store }) {
    // 获取文章列表
    const page = Number.parseInt(query.page || 1)
    const limit = 20
    const tag = query.tag
    const tab = query.tab || 'global_feed'
    const loadArticles = store.state.user && tab === 'your_feed' ? articleApi.getFeedArticles : articleApi.getArticles

    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag
      }),
      tagApi.getTags()
    ])

    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data
    articles.forEach(e => e.favoriteDisabled = false)
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tag,
      tab: query.tab || 'global_feed'
    }
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await articleApi.deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        // 添加点赞
        await articleApi.addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>
