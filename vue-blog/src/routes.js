import AllPosts from './components/Post/AllPosts.vue';
import LoginForm from './components/User/LoginForm.vue'
import UserProfile from './components/User/UserProfile.vue'
import RegisterForm from './components/User/RegisterForm.vue'
import NewPost from './components/Post/NewPost.vue'

export const routes = [
    {path: '/',  component: AllPosts},
    {path: '/login', component: LoginForm},
    {path: '/user/:id', component: UserProfile},
    {path: '/viewpost', component: AllPosts},
    {path: '/register', component: RegisterForm},
    {path: '/newpost', component: NewPost}
]