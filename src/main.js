import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
var VueScrollTo = require('vue-scrollto')

library.add(faGithub, faLinkedinIn, faFacebookF)
Vue.use(VueScrollTo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
