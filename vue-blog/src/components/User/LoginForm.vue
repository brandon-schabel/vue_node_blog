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
                            <button class="btn btn-default">Login</button>
                        </fieldset>
                    </form>
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