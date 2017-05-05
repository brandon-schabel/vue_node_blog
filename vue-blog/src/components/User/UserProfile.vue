<template>
    <div>
        <h1> The User Page </h1>
        <hr>
        
        <button @click="navigateToHome" class="btn btn-primary"> Go To Home</button>
        
        <!-- Add all profile perferences and fields to edit them -->
        <h3>Hobbies  {{userData.profileData.hobbies}}</h3>
        <input
            type="text"
            id="hobbies"
            class="form-control"
            v-model="userData.profileData.hobbies">

        <h3>About Me  {{userData.profileData.aboutMe}}</h3>
        <input
            type="text"
            id="aboutMe"
            class="form-control"
            v-model="userData.profileData.aboutMe">

        <h5>Age {{userData.profileData.age}} </h5>
        <input
            type="text"
            id="age"
            class="form-control"
            v-model="userData.profileData.age">

        <h3>First Name  {{userData.profileData.firstName}}</h3>
        <input
            type="text"
            id="firstName"
            class="form-control"
            v-model="userData.profileData.firstName">

        <h3>Last Name  {{userData.profileData.lastName}}</h3>      
        <input
            type="text"
            id="lastName"
            class="form-control"
            v-model="userData.profileData.lastName">

        <h3>My Website  {{userData.profileData.websiteURL}}</h3>
        <input
            type="text"
            id="websiteURL"
            class="form-control"
            v-model="userData.profileData.websiteURL">

        <h3>Country {{userData.profileData.country}}</h3>
        <input
            type="text"
            id="country"
            class="form-control"
            v-model="userData.profileData.country">

        <h3>contactinfo  {{userData.profileData.contactInfo}}</h3>
        <input
            type="text"
            id="contactInfo"
            class="form-control"
            v-model="userData.profileData.contactInfo">

        <button
        class="btn btn-primary" v-on:click="updateUserProfile()"
        >Submit!
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //the jwtAuthHeader is the jasonwebtoken we are going to send to the server for user verification
                jwtAuthHeader: { Authorization: 'Bearer ' + window.sessionStorage.accessToken},

                //placeholder data that the user will be able to add if they want.
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
                                'contactInfo': ''
                            }}
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/');
            },

            //when this method is called it will submit all user profile data to the server
            updateUserProfile() {
                var vm = this;

                const config = {method: 'post',
                                url:'http://127.0.0.1:3000/api/protected/updateProfile',
                                headers: this.jwtAuthHeader,
                                data: vm.userData.profileData}

                this.axios(config)
                .then(function (response) {
                    console.log(response);
                }).catch(function(error) {
                    console.log(error);
                });
            }
        },

        //loads all user data before the component loads
        beforeMount() {
            var vm = this;

            const config = {method: 'post',
                            url:'http://127.0.0.1:3000/api/protected/profile',
                            headers: this.jwtAuthHeader}

            console.log(config);

            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userData.username = response.data.username;
                vm.userData.email = response.data.email;
                console.log(response.data.profileData);
                console.log(vm.userData.profileData);
                vm.userData.profileData = response.data.profileData;
            }).catch(function(error) {
                console.log(error);
            });
            
            console.log(vm.userData);
        }
    }
</script>