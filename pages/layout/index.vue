<style lang="less" scoped>
.layout-container {
  .userinfo {
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
}
</style>
<template>
  <section class="layout-container">
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" exact>Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link to="/editor" class="nav-link"><i class="ion-compose"></i>&nbsp;New Post</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/settings" class="nav-link"><i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link>
            </li>
            <li class="nav-item userinfo">
              <nuxt-link class="nav-link" to="/profile/大三娃">
                <img :src="userImage" alt="大三娃">
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link to="/login" class="nav-link">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/register" class="nav-link">Sign up</nuxt-link>
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
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
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
    userImage() {
      return this.user.images || 'https://img.bosszhipin.com/beijin/upload/avatar/20200629/3b294d1c7a5bcff95e2f1f53cafb95301638b65607ad1b7e3eba44b17b426016_s.jpg'
    },
    ...mapState(['user'])
  }
}
</script>
