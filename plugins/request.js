/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取到上下文对象 { query, params, req, res, app }
export default ({ store }) => {
  // 请求拦截器
  // 任何请求都要经过拦截器，可以在请求拦截器中做一些公共的业务处理，如设置 token
  request.interceptors.request.use(config => {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  })
  // 响应拦截器
}
