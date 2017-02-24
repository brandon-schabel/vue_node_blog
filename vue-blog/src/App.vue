<template>

    <!--
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-all-posts></app-all-posts>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
    -->
    <div>
        <div id="app" class="container">
            <app-header></app-header>
            <app-all-posts></app-all-posts>
            <app-new-post></app-new-post>
            <app-login-form></app-login-form>
            <app-register-form></app-register-form>
        </div>
    </div>
</template>

<script>
    /*
    Below we are importing all the components we are going to use
    */
    import AllPosts from './components/Post/AllPosts.vue';
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue'
    import Post from './components/Post/Post.vue'
    import NewPost from './components/Post/NewPost.vue'
    import LoginForm from './components/User/LoginForm.vue'
    import RegisterForm from './components/User/RegisterForm.vue'
    export default {
        components: {
            //these are locally register components
            'app-all-posts': AllPosts,
            'app-post': Post,
            'app-header': Header,
            'app-footer': Footer,
            'app-new-post': NewPost,
            'app-login-form': LoginForm,
            'app-register-form': RegisterForm
        },
        methods: {
        }
    } 

    
</script>

<style>
    
</style>
