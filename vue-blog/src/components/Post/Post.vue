<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}} </li>
    </ul>
</template>

<script>

</script>
<!-- if we want the styling to only apply to one component we add
sciped to it -->
<style scoped>
    

</style>