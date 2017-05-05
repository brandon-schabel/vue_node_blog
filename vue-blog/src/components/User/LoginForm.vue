<template>
    <div class="container" style="margin-top:30px">
        <div class="col-md-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Sign In</h3>
                </div>
                <div class="panel-body">
                    <form role="form">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus="" v-model="userData.email">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Password" name="password" type="password" value="" v-model="userData.password">
                            </div>
                            <!--
                            <div class="checkbox">
                                <label>
                                    <input name="remember" type="checkbox" value="Remember Me">Remember Me
                                </label>
                            </div>
                            -->
                            <!-- Change this to a button or input when using this as a form -->
                        </fieldset>
                    </form>
                    <button class="btn btn-default" @click="submitLogin()">Login</button>
                    <p>
                        {{userData.email}}
                        {{userData.password}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            submitLogin() {
                var vm = this
                console.log(this.userData)
                this.axios.post('http://127.0.0.1:3000/auth/login',vm.userData)
                    //postTitle: vm.postData.postTitle,
                    //postContent: vm.postData.postContent)
                .then(function (response) {
                    console.log(response);
                    window.sessionStorage.accessToken = response.data.id_token
                    //navigate to home
                    vm.$router.push('/');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        data() {
            return {
                userData: {
                    email: '',
                    password: ''
                }
            }
        }
    }
</script>