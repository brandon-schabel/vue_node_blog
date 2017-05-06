<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>New Post</h1>
                    <hr>
                    <div class="form-group">
                        <label for="postTitle">Post Title</label>
                        <input
                                type="text"
                                id="postTitle"
                                class="form-control"
                                v-model="postData.postTitle">
                                <!--v-model="email 2 way databinds to the email variable" -->
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="postContent">Content</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="postData.postContent"></textarea>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                </div>
            </div>
            <button
                class="btn btn-primary" v-on:click="createPost()"
                >Submit!
        </button>
        </form>
        
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>{'postTitle':'{{postData.postTitle}}', </p>
                        
                        <!-- white-space: pre keeps textarea formatting -->
                        <p style="white-space: pre">'postContent':'{{postData.postContent}}'}  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                posts: [],
                postData:  {
                    postTitle: '',
                    postContent: ''
                }
            }
        },
        methods: {
            /*postData() {     

                var vm = this
                this.axios.post('http://127.0.0.1:5000/newpostapi',vm.postData)
                    //postTitle: vm.postData.postTitle,
                    //postContent: vm.postData.postContent)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },*/
            createPost() {
                var vm = this

                //const config = {headers: this.jwtAuthHeader}
                console.log('Creating post')

                var config = {  url: '/api/protected/newPost',
                                method: 'post',
                                data: vm.postData}

                //this.axios.post('http://127.0.0.1:3000/api/newPost', vm.postData)
                this.axios(config)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        
    }
                
</script>