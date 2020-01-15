import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import store from './store'
import {router} from './routes'



library.add(faSignInAlt,faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon);




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
