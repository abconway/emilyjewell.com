import Vue from 'vue'
import Router from 'vue-router'
import News from 'views/News.vue'
import Bio from 'views/Bio.vue'
import Press from 'views/Press.vue'
import Media from 'views/Media.vue'
import Resume from 'views/Resume.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/news', component: News},
        {path: '/bio', component: Bio},
        {path: '/resume', component: Resume},
        {path: '/press', component: Press},
        {path: '/media', component: Media},
    ]
})
