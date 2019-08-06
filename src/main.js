import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import md from '@/utils/md'
import './assets/less/reset.less'
import './assets/less/github-markdown.css' // fork github-markdown
import './assets/fonts/iconfont.css'
import './assets/less/tooltip.less'

Vue.use({
    install(Vue, options) {
        Vue.prototype.$md = md
    }
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
