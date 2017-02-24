<template>
    <div class="container">
        <div class="col-md-6">
            <div class="row login-panel panel panel-default">
                <div class="panel-body">
                    <form class="form-horizontal row">
                        <fieldset>

                            <!-- Form Name -->
                            <div class="panel-heading">
                                <div class="panel-title">
                                    <legend>Registration Form</legend>
                                </div>
                            </div>
                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="email">Email</label>  
                                <div class="col-md-5">
                                    <input id="email" name="email" type="text" placeholder="Your email here" 
                                    class="form-control input-md" required="" v-model="registrationData.email">
                                    <span class="help-block">xxxxxxxxx@xxxxx.xxx</span>  
                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="username">Username</label>  
                                <div class="col-md-5">
                                    <input id="username" name="username" type="text" placeholder="Your username" 
                                    class="form-control input-md" required="" v-model="registrationData.username">
                                    
                                </div>
                            </div>

                            <!-- Password input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="password" >Password </label>
                                <div class="col-md-5">
                                    <input id="password" name="password" type="password" placeholder="Password" 
                                    class="form-control input-md" required="" v-model="registrationData.password">
                                
                                </div>
                            </div>

                            <!-- Password input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="confirm password">Confirm Password</label>
                                <div class="col-md-5">
                                    <input id="confirm" name="confirmpassword" type="password" placeholder="confirm password" 
                                    class="form-control input-md" required="" v-model="confirmPassword">
                                    <span class="help-block">Please Confirm Your Password</span>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <div class="row">
                        <div class= "col-md-4">
                            <button class="btn btn-default" @click="submitRegistration()">Register</button>
                            <p>
                                email: {{registrationData.email}}
                                username: {{registrationData.username}}
                                password: {{registrationData.password}}
                                confirm password: {{confirmPassword}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            submitRegistration() {
                var vm = this
                console.log(this.registrationData)
                this.axios.post('http://127.0.0.1:3000/register',vm.registrationData)
                    //postTitle: vm.postData.postTitle,
                    //postContent: vm.postData.postContent)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        data() {
            return {
                registrationData: {
                    email: '',
                    username: '',
                    password: '',
                },
                confirmPassword: ''
            }
        }
    }
</script>