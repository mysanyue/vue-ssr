<template>
  <section class="editor-container">
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <form>
              <fieldset>
                <fieldset class="form-group">
                  <input v-model="params.title" type="text" class="form-control form-control-lg" placeholder="文章标题" />
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="params.description" type="text" class="form-control" placeholder="文章描述" />
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="params.body" class="form-control" rows="8" placeholder="文章内容 - markdown 格式"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="tagList" type="text" class="form-control" placeholder="文章标签 - 多个以逗号分隔 (英文逗号)" />
                  <div class="tag-list"></div>
                </fieldset>
                <button @click="publish" :disabled="isLoading" class="btn btn-lg pull-xs-right btn-primary" type="button">{{ id ? '重新发布' : '发布一篇' }}</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleApi from '@/api/article'

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'editor',
  data() {
    return {
      id: null,
      isLoading: false,
      params: {
        title: '',
        description: '',
        body: '',
      },
      tagList: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
    if (this.id) this.getArticleDetail()
  },
  methods: {
    async publish() {
      this.tagList.replace(/，/g, ',')
      this.params.tagList = this.tagList.split(',')
      if (this.id) {
        const ret = await articleApi.updateArticle(this.id, { article: this.params })
        if (ret.data) this.$router.go(-1)
      } else {
        const ret = await articleApi.addArticle({ article: this.params })
        if (ret.data) this.$router.push('/')
      }
    },
    async getArticleDetail() {
      const ret = await articleApi.getArticle(this.id)
      const { title, description, body, tagList } = ret.data.article

      this.params.title = title
      this.params.description = description
      this.params.body = body
      this.tagList = tagList.join(',')
    }
  }
}
</script>
