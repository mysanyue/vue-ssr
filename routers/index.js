export default resolve => [{
  path: '/',
  component: resolve(__dirname, '../pages/layout'),
  children: [{
    path: '', // 默认子路由
    name: 'home',
    component: resolve(__dirname, '../pages/home'),
  }, {
    path: '/login',
    name: 'login',
    component: resolve(__dirname, '../pages/auth/login')
  }, {
    path: '/register',
    name: 'register',
    component: resolve(__dirname, '../pages/auth/login')
  }, {
    path: '/profile/:username',
    name: 'profile',
    component: resolve(__dirname, '../pages/profile')
  }, {
    path: '/settings',
    name: 'settings',
    component: resolve(__dirname, '../pages/settings')
  }, {
    path: '/editor',
    name: 'editor',
    component: resolve(__dirname, '../pages/editor')
  }, {
    path: '/article/:slug',
    name: 'article',
    component: resolve(__dirname, '../pages/article')
  }]
}]
