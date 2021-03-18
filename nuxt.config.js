import routers from './routers'
/**
 * Nuxt.js 配置文件
 */
module.exports = {
  router: {
    // 配置路由高亮类名
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0)
      routes.push(...routers(resolve))
    }
  },
  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ],
  // 运行环境
  server: {
    host: '0.0.0.0',
    port: 8181
  }
}
