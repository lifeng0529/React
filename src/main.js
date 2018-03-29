// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/fonts/iconfont.css'
//引入http库,并添加到原型上
import axios from 'axios'
Vue.prototype.$http = axios

import { Swipe, SwipeItem, Lazyload, Picker} from 'mint-ui'
Vue.use(Lazyload)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Picker.name, Picker)


import 'mint-ui/lib/style.css'

//引入重置样式和重置字体
import '@/common/reset.js'
import '@/common/styles/reset.css'
import '@/common/styles/base.less'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
