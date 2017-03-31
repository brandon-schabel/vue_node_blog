<template>
    <div>
        <nav class="navbar navbar-default nav-blog">
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
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                    <!--<li><router-link to="/user/10">User</router-link>-->
                    <li><a href="/register">Register</a></li>
                    <li><a href="/viewpost">All Posts</a></li>
                    <li><a href="/newpost">New Post</a></li>
                    <li><a href="">User Posts</a></li>
                    <li><router-link to="/userProfile">Profile</router-link></li>
                    <li><a href="">Logout</a></li>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>