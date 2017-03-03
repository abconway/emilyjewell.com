import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import Goodbye from 'views/Goodbye.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/goodbye', component: Goodbye}
  ]
})
