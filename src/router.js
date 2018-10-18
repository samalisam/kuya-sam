import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        index: 1
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/galleries',
      name: 'galleries',
      component: () => import('./views/Galleries.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/about-me',
      name: 'aboutMe',
      component: () => import('./views/AboutMe.vue'),
      meta: {
        index: 4
      }
    }
  ]
});

/**
 * 
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( "./views/About.vue")
      }
 * 
 */
