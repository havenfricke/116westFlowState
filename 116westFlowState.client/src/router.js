import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },

  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/sites',
    name: 'Sites',
    component: loadPage('SitePage')
  },
  {
    path: '/chat',
    name: 'Teams',
    component: loadPage('TeamsPage'),
  },
  {
    path: '/chat/:id',
    name: 'TeamsChild',
    component: loadPage('TeamsPageChild'),
  },
  {
    path: '/assets',
    name: 'Assets',
    component: loadPage('AssetsPage')
  },
  {
    path: '/vault',
    name: 'Vault',
    component: loadPage('VaultPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
