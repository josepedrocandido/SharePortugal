import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Photo from '@/components/Photo'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },

        {
            path: '/photoid/:id',
            name: 'Photo',
            component: Photo
        }
    ]
})