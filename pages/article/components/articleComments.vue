<template>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <form class="card comment-form">
      <div class="card-block">
        <textarea class="form-control" placeholder="文明发言..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">提交评论</button>
      </div>
    </form>

    <div v-for="comment in comments" :key="comment.id" class="card">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{ name: 'profile', params: { username: comment.author.username } }" class="comment-author">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ name: 'profile', params: { username: comment.author.username } }" class="comment-author">{{ comment.author.username }}</nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import articleApi from '@/api/article'

export default {
  name: 'articleComments',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments: []
    }
  },
  mounted() {
    this.getComments()
  },
  methods: {
    async getComments() {
      const { data } = await articleApi.getComments(this.data.slug)
      this.comments = data.comments
    }
  }
}
</script>
