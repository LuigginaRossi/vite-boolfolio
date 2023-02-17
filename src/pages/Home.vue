<script>
    import ProjectsList from '../components/ProjectsList.vue';

    export default{
        name: "Home",
        components: { ProjectsList },
        data() {
            return {};
        },
    }
</script>

<template>
    <h1>Home</h1>
    <router-link :to="{name: 'projects'}"> All Projects</router-link>

   <section class="bg-dark text-light jumb py-4"> 

        <h1>LAST PROJECTS:</h1>
        
        <!-- slider 1 post alla volta? -->
        <!-- <ProjectsList></ProjectsList> -->

    
        <div class="container">
            <h3>TAG</h3>
        </div>

        <div class="container">
            <h3>CATEGORY</h3>
        </div>

        <div class="container">
            <h3>TYPE</h3>
        </div>
    </section>
</template>

<style lang="scss">
.jumb{
    background-image: url('/thumb.png');
    background-size: cover;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>