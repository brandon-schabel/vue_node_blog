import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  //with es6 you can just put routes
  mode: 'history'
});

//VueResource is for http requests
Vue.use(VueResource);

/* by setting this up all request will be sent to this url,
then in the request if you need to req from a diff route of that url
 you would apply that where the url is entered */
Vue.http.options.root = 'http://127.0.0.1:5000/';
new Vue({
  el: '#app',
  render: h => h(App)
})
