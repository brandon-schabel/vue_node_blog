<template>
    <div>
        <h1> The User Page </h1>
        <hr>
        <div>{{userData}}</div>
        
        <button @click="navigateToHome" class="btn btn-primary"> Go To Home</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jwtAuthHeader: { Authorization: 'Bearer ' + window.sessionStorage.accessToken},
                userData: {'email': '',
                            'username': ''}
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/');
            },

            getUserData() {
                var vm = this
                const config = {method: 'post',
                                url:'http://127.0.0.1:3000/api/protected/profile',
                                headers: this.jwtAuthHeader}
                console.log(config);
                this.axios(config)
                .then(function (response) {

                    console.log(response);
                    vm.userData = response.data;
                    return response;
                }).catch(function(error) {
                    console.log(error);
                });
            }
        },
        beforeMount() {
            this.userData = this.getUserData();
        }
    }
</script>