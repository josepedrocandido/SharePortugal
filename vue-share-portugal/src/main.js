import Vue from 'vue'
import VueSlideBar from 'vue-slide-bar'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.component('VueSlideBar', VueSlideBar)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})