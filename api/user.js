import { request } from '@/plugins/request'

class User {
  // 用户登录
  login(data) {
    return request.post('/api/users/login', data)
  }

  // 用户注册
  register(data) {
    return request.post('/api/users', data)
  }
}

export default new User()
