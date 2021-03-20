<style lang="less" scoped>
.settings-container {
  .btn-logout {
    margin-top: 60px;
  }
}
</style>
<template>
  <section class="settings-container">
    <div class="settings-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form @submit.prevent="settingUser">
              <fieldset>
                <fieldset class="form-group">
                  <input v-model="userinfo.image" class="form-control" type="text" placeholder="头像的 URL" />
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userinfo.username" class="form-control form-control-lg" type="text" placeholder="用户名" />
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="userinfo.bio" class="form-control form-control-lg" rows="8" placeholder="个性签名"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userinfo.email" class="form-control form-control-lg" type="text" placeholder="邮箱地址" />
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userinfo.password" class="form-control form-control-lg" type="password" placeholder="密码" />
                </fieldset>
                <button class="btn btn-primary pull-xs-right">更新设置</button>
              </fieldset>
            </form>

            <button class="btn btn-outline-danger btn-block btn-logout" @click="logout">退出登录</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userApi from '@/api/user'
import { mapState } from 'vuex'
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  name: 'settings',
  data() {
    return {
      userinfo: {
        bio: '',
        email: '',
        image: '',
        password: '',
        username: ''
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.setUserinfo()
  },
  methods: {
    logout() {
      Cookie.set('user', null)
      window.location = '/'
    },
    async settingUser() {
      const { data } = await userApi.settingUser({ user: this.userinfo })

      if (data) {
        // 保存用户的登录状态
        this.$store.commit('setUser', data.user)
        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', data.user)
        this.$router.push({ name: 'profile', params: { username: this.user.username } })
      }
    },
    setUserinfo() {
      const { user, userinfo } = this
      userinfo.username = user.username
      userinfo.bio = user.bio
      userinfo.email = user.email
      userinfo.image = user.image
    }
  }
}
</script>
