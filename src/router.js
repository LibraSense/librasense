import Vue from 'vue';
import Router from 'vue-router';
import Finder from './components/finder/finder.vue';
import About from './components/about/about.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Finder,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/finder',
      name: 'finder',
      component: Finder,
    },
  ],
});
