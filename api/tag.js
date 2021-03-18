import { request } from '@/plugins/request'

class Tag {
  // 获取所有标签列表
  getTags() {
    return request.get('/api/tags')
  }
}

export default new Tag()
