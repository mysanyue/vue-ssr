<style lang="less" scoped>
.layout-container {
  .userinfo {
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
  .footer-container {
    .container:after {
      display: block;
      content: '';
      clear: both;
    }
    .author {
      float: left;
      .logo-font {
        margin-right: 20px;
      }
      .attribution a {
        margin-left: 10px;
      }
    }
    .design {
      float: right;
    }
  }
}
</style>
<template>
  <section class="layout-container">
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">三月风</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" exact>首页</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link to="/editor" class="nav-link"><i class="ion-compose"></i>&nbsp;发一篇</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/settings" class="nav-link"><i class="ion-gear-a"></i>&nbsp;设置</nuxt-link>
            </li>
            <li class="nav-item userinfo">
              <nuxt-link class="nav-link" :to="{ name: 'profile', params: { username: user.username } }">
                <img :src="user.image" />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">登录</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/register" class="nav-link">注册</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- /顶部导航栏 -->

    <!-- 子路由 -->
    <nuxt-child />
    <!-- /子路由 -->

    <!-- 底部 -->
    <footer class="footer-container">
      <div class="container">
        <p class="author">
          <a href="/" class="logo-font">三月风</a>
          <span class="attribution">一个互动学习项目 <a href="https://www.58taoweb.com">mysanyue</a></span>
        </p>
        <p class="design">Code &amp; design licensed under MIT.</p>
      </div>
    </footer>
    <!-- /底部 -->
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'layout',
  computed: {
    ...mapState(['user'])
  }
}
</script>
