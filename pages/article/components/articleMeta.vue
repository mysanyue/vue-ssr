<template>
  <div class="article-meta">
    <nuxt-link :to="{ name: 'profile', params: { username: data.author.username } }">
      <img :src="data.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link :to="{ name: 'profile', params: { username: data.author.username } }" class="author">{{ data.author.username }}</nuxt-link>
      <span class="date">{{ data.createdAt | date }}</span>
    </div>
    <button @click="goPage" :class="{ active: data.author.following }" class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp; {{ isMyUser ? '编辑' : '关注' }} <span v-if="!isMyUser" class="counter">(0)</span>
    </button>
    &nbsp;&nbsp;
    <button @click="deleteArticle(data.slug)" :class="{ active: data.author.favorited, 'btn-outline-danger': isMyUser }" :disabled="data.favoriteDisabled" class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp; {{ isMyUser ? '删除' : '点赞' }} <span class="counter">({{ data.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import articleApi from '@/api/article'

export default {
  name: 'articleMeta',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user']),
    isMyUser() {
      return this.user.username === this.data.author.username
    }
  },
  methods: {
    goPage() {
      if (this.isMyUser) this.$router.push({ path: '/editor', query: { id: this.data.slug } })
    },
    async deleteArticle(id) {
      const article = this.data

      if (this.isMyUser) {
        await articleApi.deleteArticle(id)
        window.location.reload()
      } else {
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
}
</script>
