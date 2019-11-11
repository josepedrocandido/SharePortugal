import Vue from 'vue'
import VueSlideBar from 'vue-slide-bar'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('VueSlideBar', VueSlideBar)
Vue.use(BootstrapVue);


export const rootLink = 'http://localhost:3000/'


Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})