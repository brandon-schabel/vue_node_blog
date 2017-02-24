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
            <!-- Display Post -->
            <!--
            
            <div>
                <button @click="getPosts()" class="btn btn-default">
                Get Posts
                </button>
                <ul class="list-group">
                    <li v-for="post in posts" class="list-group-item">
                        <div class="row">
                            <div class="col-xs-3">
                                <h1>
                                Title: {{post.postTitle}}
                                </h1>
                            </div>
                            <div class="col-xs-6">
                                Content: {{post.postContent}}
                            </div>
                            <div class="col-xs-3">
                                <h3>User: {{post.username}}</h3>

                                <div v-if="post.created_datetime">
                                    Posted on: {{post.createdDatetime}}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            -->
            <!-- end display post -->

            

            <!--
            <div>
            <p>
                Posts: {{posts}}
            </p>
            </div>
            -->
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
    export default {
        components: {
            //these are locally register components
            'app-all-posts': AllPosts,
            'app-post': Post,
            'app-header': Header,
            'app-footer': Footer,
            'app-new-post': NewPost
        },
        methods: {
        }
    } 

    
</script>

<style>
    
</style>
