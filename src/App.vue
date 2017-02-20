<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-all-posts></app-all-posts>
        </div>
        <hr>
        <app-footer></app-footer>
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
    export default {
        components: {
            //these are locally register components
            'app-all-posts': AllPosts,
            'app-post': Post,
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>

<style>
    
</style>
