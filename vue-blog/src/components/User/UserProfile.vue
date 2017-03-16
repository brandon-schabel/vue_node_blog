<template>
    <div>
        <h1> The User Page </h1>
        <hr>
        <div>{{userData}}</div>
        
        <button @click="navigateToHome" class="btn btn-primary"> Go To Home</button>

        
        <h3>Hobbies</h3>
        <h3>About Me<h3>
        <h5>Age {{userData.profileData.age}}
        <h3>First Name</h3>
        <h3>Last Name</h3>
        <h3>My Website</h3>
        <h3>Country</h3>
        <h3>contactinfo </h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jwtAuthHeader: { Authorization: 'Bearer ' + window.sessionStorage.accessToken},
                userData: {'email': '',
                            'username': '',
                            'profileData': {
                                'hobbies': '',
                                'aboutMe': '',
                                'age': '', 
                                'firstName': '',
                                'lastName':'',
                                'websiteURL': '',
                                'country': '',
                                'contactinfo': ''
                            }}
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/');
            },

            getUserData() {
                var vm = this;
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
            },
            updateUserProfile() {
                var vm = this;

                const config = {method: 'post',
                                url:'http://127.0.0.1:3000/api/protected/updateProfile',
                                headers: this.jwtAuthHeader,
                                data: }
            }
        },
        beforeMount() {
            var tempUserData = this.getUserData();

            for(key in tempUserData) {
                this.userData[key] = tempUserData[key]
            }
        }
    }
</script>