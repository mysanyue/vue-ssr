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

  /**
   * @description 根据用户名获取用户信息
   * @param {string} name 
   * @returns 
   */
  getProfiles(name) {
    return request.get(`/api/profiles/${name}`)
  }
}

export default new User()
