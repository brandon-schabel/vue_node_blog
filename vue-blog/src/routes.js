import AllPosts from './components/Post/AllPosts.vue';
import LoginForm from './components/User/LoginForm.vue'
import UserProfile from './components/User/UserProfile.vue'
export const routes = [
    {path: '/',  component: AllPosts},
    {path: '/login', component: LoginForm},
    {path: '/user/:id', component: UserProfile}
]