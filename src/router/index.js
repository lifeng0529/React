import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Shop from '@/pages/Shop/Shop'
import Headline from '@/pages/Headline/Headline'
import Mine from '@/pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  //激活的加个active类
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/headline',
      name: 'Headline',
      component: Headline
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
