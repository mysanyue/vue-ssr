<template>
  <ul>
    <li v-for="article in articles" :key="article.slug" class="article-preview">
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
    </li>
  </ul>
</template>

<script>
export default {
  name: 'articleList',
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
