<style lang="less" scoped>
.user-container {
  .nav-link {
    cursor: pointer;
  }
}
</style>
<template>
  <section class="user-container">
    <div class="profile-page">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <!-- <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img" /> -->
              <img :src="user.image" class="user-img" />
              <!-- <h4>{{ user.username }}</h4> -->
              <p>{{ user.bio }}</p>
              <nuxt-link to="/settings" class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp; Edit Profile Settings
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a :class="{ active: tab === 'article' }" class="nav-link">我发布的文章</a>
                </li>
                <li class="nav-item">
                  <a :class="{ active: tab !== 'article' }" class="nav-link">我点赞的文章</a>
                </li>
              </ul>
            </div>

            <article-list :articles="articles" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleApi from '@/api/article'
import { mapState } from 'vuex'
import articleList from '../../components/articleList.vue'

export default {
  components: { articleList },
  middleware: 'authenticated',
  name: 'profile',
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['user'])
  },
  async asyncData({ params, store }) {
    // 获取文章列表
    const page = Number.parseInt(params.page || 1)
    const limit = 20
    const tab = params.tag || 'article'
    const author = params.username || null
    const favorites = params.favorites || null

    const ret = await articleApi.getArticles({
      limit,
      favorites,
      author,
      offset: (page - 1) * limit
    })

    console.log(ret)
    const { articles, articlesCount } = ret.data
    // articles.forEach(e => e.favoriteDisabled = false)
    return {
      articles,
      articlesCount,
      limit,
      page,
      tab
    }
  }
}
</script>
