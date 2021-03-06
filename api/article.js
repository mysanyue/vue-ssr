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
    return request.post('/api/articles', params)
  }

  /**
   * @description 修改文章
   * @param {object} params 
   * @returns 
   */
  updateArticle(id, params) {
    return request.put(`/api/articles/${id}`, params)
  }

  /**
   * @description 删除一篇文章
   * @param {string} id 
   * @returns 
   */
  deleteArticle(id) {
    return request.delete(`/api/articles/${id}`)
  }
}

export default new Article()
