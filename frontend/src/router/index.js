import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/Login';
import RegisterComponent from '../components/Register';
import HelloComponent from '../components/HelloWorld';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: LoginComponent },
      { path: '/home', component: HelloComponent },
      { path: '/register', component: RegisterComponent },
    ]
  });
  
  router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("auth");
    const isAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isHide = to.matched.some((record) => record.meta.hideForAuth);
  
    if (isAuth && !loggedIn) {
      return next({ path: "/" });
    } else if (isHide && loggedIn) {
      return next({ path: "/home" });
    }
    next();
  });