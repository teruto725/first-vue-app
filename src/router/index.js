import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import top from '@/components/top'
import news from '@/components/news'
import member from '@/components/member'
import contact from '@/components/contact'

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})