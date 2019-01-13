import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Room from '@/components/Room'
import Login from '@/components/Login'
import RoomDefinitions from '@/components/RoomDefinitions'
import SignUp from '@/components/SignUp'
import teste from '@/components/teste'
import PhotosTest from '@/components/PhotosTest'




Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },

        {
            path: '/locals/:_id',
            name: 'Room',
            component: Room
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/local/:_id',
            name: 'RoomDefinitions',
            component: RoomDefinitions
        },

        {
            path: '/signUp',
            name: 'SignUp',
            component: SignUp
        },

        {
            path: '/teste',
            name: 'teste',
            component: teste
        },
        {
            path: '/PhotosTest',
            name: 'PhotosTest',
            component: PhotosTest
        }
    ]
})