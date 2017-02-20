<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
    data
    export default {
        data() {
            return {
                posts: []
            };
        },
        methods: {
            fetchData() {
                this.$http.get('/getallpostsapi')
                .then(response => {
                    return response.json();
                    
                }).then(data => {
                    const resultArray = [];
                    for(let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.posts = resultArray;
                });
            }
        }
    }
</script>

<style scoped>

</style>