import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes }from './routes';
//import { routes } from './routes'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
//Vue.use(VueRouter);

const router = new VueRouter( {
  routes:routes,
  mode: 'history'//this will remove the hashtag in the routing
});

/*
const router = new VueRouter({
  routes: routes,
  //with es6 you can just put routes
  mode: 'history'
});

//VueResource is for http requests
Vue.use(VueResource);
*/
/* by setting this up all request will be sent to this url,
then in the request if you need to req from a diff route of that url
 you would apply that where the url is entered */
//Vue.http.options.root = 'http://127.0.0.1:5000/';
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
