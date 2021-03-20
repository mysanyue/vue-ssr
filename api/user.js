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

  // 设置用户信息
  settingUser(data) {
    return request.put('/api/user', data)
  }
}

export default new User()
