import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// register styles
import './styles/main.scss';

// register global components
import './components/global';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  store.commit('setRouteMetaIndexes', {
    from: from.meta.index,
    to: to.meta.index
  });
  next();
});

router.beforeResolve((to, from, next) => {
  next();
});

router.afterEach((to, from, next) => {});
