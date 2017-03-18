<template>
    <div class="app">
        <div id="app" class="container app">
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
    .app{
        background: #d8d8d8;
        font-family: 'Julius Sans One', serif;
    }

    /*
    #title-bg{
    background-image: url('https://static.vecteezy.com/system/resources/previews/000/092/552/original/free-abstract-background-vector.jpg');
    background-size: cover;
    text-align: center;
    padding-top: 7%;
    }*/

    #site-title{
        padding-top: 25px;
        padding-bottom: 25px;
        font-family:;
        font-size: 50px;
        color: white;
    }

    #nav{
        margin-bottom: 10px;
    }
    
    ul.topnav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #1D1D1D;
        
        /* Float the list items side by side */
        ul.topnav li {
            display: inline-block;
        }
    }

    /* Style the links inside the list items */
    ul.topnav li a {
        display: inline-block;
        color: #FFFFFF;
        text-align: center;
        padding: 14px 25px;
        text-decoration: none;
        transition: 0.3s;
        font-size: 30px;
    }

    /* Change background color of links on hover */
    ul.topnav li a:hover {
        background-color: #111;
    }

    /* Hide the list item that contains the link that should open and close the topnav on small screens */
    ul.topnav li.icon {
        display: none;
    }

    /* When the screen is less than 680 pixels wide, hide all list items, except for the first one ("Home"). Show the list item that contains the link to open and close the topnav (li.icon) */
    @media screen and (max-width:680px) {
    ul.topnav li:not(:first-child) {display: none;}
    ul.topnav li.icon {
        float: right;
        display: inline-block;
        }
    }

    .blog-border{
        background-color: #cccccc;
        width: 80%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 100px;
        margin-bottom: 200px;
        border-radius: 8px;
        padding-top: 15px;
        padding-bottom: 0px ;
        box-shadow: 0px 2px 25px rgba(0, 0, 0, .25);
    }

    .btn-post{
        margin: 5px;
        width: 70px !important;
    }

    .right-align{
        margin-left:auto; 
        margin-right:0;
    }
</style>
