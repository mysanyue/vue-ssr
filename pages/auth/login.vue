<template>
  <section class="login-container">
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{ isLogin ? '登录' : '注册' }}</h1>
            <p class="text-xs-center">
              <nuxt-link v-if="isLogin" to="/register">需要一个帐户吗?</nuxt-link>
              <nuxt-link v-if="!isLogin" to="/login">已经有账户?</nuxt-link>
            </p>
            <ul class="error-messages">
              <template v-for="(messages, field) in errors">
                <li v-for="(message, index) in messages" :key="index">{{ field }} {{ message }}</li>
              </template>
            </ul>
            <form @submit.prevent="onSubmit">
              <fieldset v-if="!isLogin" class="form-group">
                <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email" required />
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" minlength="8" />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{ isLogin ? '登录' : '注册' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userApi from '@/api/user'
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        email: 'sanyue@qq.com',
        password: 'bb123456'
      },
      errors: {}, // 错误信息
    }
  },
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit() {
      try {
        // 登录
        const { data } = this.isLogin ? await userApi.login({ user: this.user }) : await userApi.register({ user: this.user })
        // 保存用户的登录状态
        this.$store.commit('setUser', data.user)
        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', data.user)
        // 登录成功跳转到首页
        if (data) this.$router.push('/')

      } catch (err) {
        this.errors = err.response.data.errors
      }
    }
  }
}
</script>
