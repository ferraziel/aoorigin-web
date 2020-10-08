import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c0b57f6 = () => interopDefault(import('..\\pages\\premium.vue' /* webpackChunkName: "pages/premium" */))
const _1a6d0a2b = () => interopDefault(import('..\\pages\\recuperar\\index.vue' /* webpackChunkName: "pages/recuperar/index" */))
const _58c955c6 = () => interopDefault(import('..\\pages\\recuperar\\_hash.vue' /* webpackChunkName: "pages/recuperar/_hash" */))
const _d03a4712 = () => interopDefault(import('..\\pages\\validar\\_validateCode.vue' /* webpackChunkName: "pages/validar/_validateCode" */))
const _efecb300 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/premium",
    component: _7c0b57f6,
    name: "premium"
  }, {
    path: "/recuperar",
    component: _1a6d0a2b,
    name: "recuperar"
  }, {
    path: "/recuperar/:hash",
    component: _58c955c6,
    name: "recuperar-hash"
  }, {
    path: "/validar/:validateCode?",
    component: _d03a4712,
    name: "validar-validateCode"
  }, {
    path: "/",
    component: _efecb300,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
