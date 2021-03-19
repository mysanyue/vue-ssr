import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4bb46bea = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _532f959f = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _9e75defe = () => interopDefault(import('..\\pages\\auth\\login' /* webpackChunkName: "" */))
const _1ae330e9 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5a7a063a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _3fe5922d = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _01ad7436 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4bb46bea,
    children: [{
      path: "",
      component: _532f959f,
      name: "home"
    }, {
      path: "/login",
      component: _9e75defe,
      name: "login"
    }, {
      path: "/register",
      component: _9e75defe,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _1ae330e9,
      name: "profile"
    }, {
      path: "/settings",
      component: _5a7a063a,
      name: "settings"
    }, {
      path: "/editor",
      component: _3fe5922d,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _01ad7436,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
