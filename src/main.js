import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Register layout components
import './components'

// Styles
import './styles/normalize.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')