const cookieParser = process.server ? require('cookieparser') : undefined

// 在服务器端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把 state 定义成一个函数，返回数据对象
export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxtServerInit 是一个特殊的 action 方法
  //  这个 action 会在服务端渲染期间自动调用
  // 作用：初始化容器数据，传递数据给客户端使用
  nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit')
    let user = null

    // 如果请求头中有 cookie
    if (req.headers.cookie) {
      // 使用 cookieParser 把 cookie 字符串转换为 Javascript 对象
      const parsed = cookieParser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {

      }
    }

    commit('setUser', user)
  }
}
