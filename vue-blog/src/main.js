import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.common['Authorization'] = "Bearer " + window.sessionStorage.accessToken;

const router = new VueRouter({
    routes: routes,
    mode: 'history' //this will remove the hashtag in the routing
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})