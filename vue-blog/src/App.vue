<template>
    <div>
        <div id="app" class="container">
            <!-- router-view shows the currently selected route -->
            <app-header></app-header>
            <router-view></router-view>
            
        </div>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue'
    export default {
        components: {
            //these are locally register components
            'app-header': Header,
            'app-foot': Footer
        },
        methods: {
        }
    } 

    
</script>

<style>
    
</style>
