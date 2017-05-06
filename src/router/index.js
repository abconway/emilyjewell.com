import Vue from 'vue'
import Router from 'vue-router'
import News from 'views/News.vue'
import Bio from 'views/Bio.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/news', component: News},
        {path: '/Bio', component: Bio},
    ]
})
