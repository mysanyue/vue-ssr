import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _200d899a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _587cb9b0 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _62893250 = () => interopDefault(import('..\\pages\\auth\\login' /* webpackChunkName: "" */))
const _018f6a80 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _79111dec = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _37ab3d14 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _33fae3e6 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _200d899a,
    children: [{
      path: "",
      component: _587cb9b0,
      name: "home"
    }, {
      path: "/login",
      component: _62893250,
      name: "login"
    }, {
      path: "/register",
      component: _62893250,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _018f6a80,
      name: "profile"
    }, {
      path: "/settings",
      component: _79111dec,
      name: "settings"
    }, {
      path: "/editor",
      component: _37ab3d14,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _33fae3e6,
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
