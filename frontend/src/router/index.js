import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/HelloWorld';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/register', component: Register }
 ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});