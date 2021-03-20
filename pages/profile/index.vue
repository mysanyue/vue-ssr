<style lang="less" scoped>
.user-container {
  .nav-link {
    cursor: pointer !important;
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
              <img :src="user.image" class="user-img" />
              <h4>{{ user.username }}</h4>
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
                  <nuxt-link :to="{ name: 'profile', params: { username: user.username }, query: { tab: 'my' } }" :class="{ active: tab === 'my' }" exact class="nav-link">我发布的文章</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link :to="{ name: 'profile', params: { username: user.username }, query: { tab: 'fav' } }" :class="{ active: tab === 'fav' }" exact class="nav-link">我点赞的文章</nuxt-link>
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
import articleList from '../../components/articleList'
import userApi from '@/api/user'

export default {
  components: { articleList },
  middleware: 'authenticated',
  name: 'profile',
  data() {
    return {

    }
  },
  // 解决点击页码 重新加载 asyncData 问题
  // url 地址栏有相应参数，重新触发 asyncData
  watchQuery: ['tab'],
  async asyncData({ params, query, store }) {
    // 获取文章列表
    const page = Number.parseInt(params.page || 1)
    const limit = 20
    const author = params.username
    const tab = query.tab
    let user = null;

    const userRet = await userApi.getProfiles(author)
    if (userRet) user = userRet.data.profile

    const ret = await articleApi.getArticles({
      limit,
      favorited: query.tab === 'fav' ? author : void 0,
      author: query.tab === 'fav' ? void 0 : author,
      offset: (page - 1) * limit
    })

    const { articles, articlesCount } = ret.data
    // articles.forEach(e => e.favoriteDisabled = false)
    return {
      articles,
      articlesCount,
      limit,
      page,
      tab: tab || 'my',
      user
    }
  }
}
</script>
