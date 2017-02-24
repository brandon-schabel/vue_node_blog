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
            <!-- Navbar -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="">Brandon's Blog</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="">Home</a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">All Posts</a></li>
                        <li><a href="">New Post</a></li>
                        <li><a href="">User Posts</a></li>
                        <li><a href="">All Posts</a></li>
                        <li><a href="">Logout</a></li>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
            <!--end navbar -->

            <app-all-posts></app-all-posts>
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
        <app-new-post></app-new-post>
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
