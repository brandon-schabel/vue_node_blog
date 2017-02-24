<template>
    <div>
        <button @click="getPosts()" class="btn btn-default">
        Get Posts
        </button>
        <ul class="list-group">
            <li v-for="(post,index) in posts" class="list-group-item">
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
                        <div>
                            id: {{post._id}}
                            <button @click="deletePost(post._id, index)" class="btn btn-default">
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
                posts: [] 
            };
        },
        methods: {
            getPosts() {
                var vm = this
                this.axios.get('http://127.0.0.1:3000/getposts')
                .then(function (response) {
                    console.log(response);
                    vm.posts = response.data;
                }).catch(function(error) {
                    console.log(error);
                });
            },
            deletePost(id,index) {
                this.axios.post('http://127.0.0.1:3000/deletePost/' + id)
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
    }
</script>

<style scoped>

</style>