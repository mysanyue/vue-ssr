import { request } from '@/plugins/request'

class Article {
  /**
   * @description 获取公共文章列表
   * @param { object } params 
   * @returns 
   */
  getArticles(params) {
    return request.get('/api/articles', { params })
  }

  /**
   * @description 获取关注的文章列表 
   * @param { object } params 
   * @returns 
   */
  // 获取公共文章列表
  getFeedArticles(params) {
    return request.get('/api/articles/feed', { params })
  }

  /**
   * @description 添加点赞功能
   * @param {string} params 
   * @returns 
   */
  addFavorite(slug) {
    return request.post(`/api/articles/${slug}/favorite`)
  }

  /**
   * @description 取消点赞功能
   * @param {string} params 
   * @returns 
   */
  deleteFavorite(slug) {
    return request.delete(`/api/articles/${slug}/favorite`)
  }

  /**
   * @description 获取文章详情
   * @param {string} slug 
   * @returns 
   */
  getArticle(slug) {
    return request.get(`/api/articles/${slug}`)
  }

  /**
   * @description 获取文章品论
   * @param {string} slug 
   * @returns 
   */
  getComments(slug) {
    return request.get(`/api/articles/${slug}/comments`)
  }

  /**
   * @description 添加文章
   * @param {object} params 
   * @returns 
   */
  addArticle(params) {

    //     article: {title: "这是一篇测试文章", description: "你想说什么就说什么",…}
    // body: "# vue-ssr↵vue 同构应用，自动部署↵↵### DEOME 地址↵↵[https://demo.realworld.io/#](https://demo.realworld.io/#)↵↵### 要求↵↵- 首先到 deom 地址注册一个自己的账号，方便自己代码测试↵↵- 实现功能包括：↵  - 注册↵  - 登录↵  - 退出↵  - 文章发表↵  - 修改↵  - 列表↵  - 分页↵  - 标签↵  - 详情↵  - 点赞/取消点赞↵  - 个人中心↵  - 个人信息更改↵↵- 本作业需要 放在 github 个人仓库，并且实现自动部署"
    // description: "你想说什么就说什么"
    // tagList: []
    // title: "这是一篇测试文章"
    return request.post('/api/articles', params)
  }
}

export default new Article()
