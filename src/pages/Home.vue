<script>
    export default{
        name: 'Home',
        data(){
            return{

            }
        }
    }
</script>

<template>
    <h1>Home</h1>
    <router-link :to="{name: 'projects'}"> All Projects</router-link>
</template>