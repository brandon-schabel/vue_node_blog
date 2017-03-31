<template>
    <div class="container blog-border">
        <ul class="list-group">
            
            <li v-for="(post,index) in posts" class="list-group-item">
                <div class="row">
                    <div class="col-xs-3">
                        <h1>
                        {{post.postTitle}}
                        </h1>
                    </div>
                    <div class="col-xs-6">
                        {{post.postContent}}
                    </div>
                    <div class="col-xs-3">
                        <h3>Posted by {{post.username}}</h3>

                        <div v-if="post.created_datetime">
                            Posted on {{post.createdDatetime}}
                        </div>
                        <div>
                            
                            <button @click="deletePost(post._id, index)" class="btn btn-default btn-post right-align btn-warning">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
                jwtAuthHeader: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            };
        },
        methods: {

            getPosts() {
                var vm = this
                //var tokenData = jwt_decode(window.sessionStorage.accessToken);
                //console.log(tokenData)
                this.axios.get('http://127.0.0.1:3000/getposts')
                .then(function (response) {
                    console.log(response);
                    vm.posts = response.data;
                }).catch(function(error) {
                    console.log(error);
                });
            },
            deletePost(id,index) {
                var vm = this
                const url = 'http://127.0.0.1:3000/api/protected/deletePost';
                const params = {id:id}
                const config = this.jwtAuthHeader
                console.log(config);
                this.axios.post(url, params, config)
                .then(function (response) {
                    console.log(response);
                }).catch(function(error) {
                    console.log(error);
                });
                if(index >-1) {
                    this.posts.splice(index,1);
                }
            }
	    },
        beforeMount() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>