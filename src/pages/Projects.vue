<script>
    import axios from 'axios';

    export default{
        name: 'Projects',
        data(){
            return{
                backendUrl: 'http://127.0.0.1:8000',
                projects: [],
            }
        },
        methods:{
            fetchProjects(){
                axios.get(`${this.backendUrl}/api/projects`)
                .then((resp) => {
                    this.projects = resp.data;
                    console.log(this.projects);
                })
            },
        },
        mounted(){
           this.fetchProjects();
        }
    }
</script>

<template>
    <h1 >Projects Page</h1>
    <div class="container">
        <div class="row row-cols-3 row-cols-md-4 g-4">
            <div class="col"  v-for="project in projects" :key="project.id">
                <!-- <div v-for="El in project" :key="El.id"> -->
                    <div class="card">
                        <div v-if="project.cover_img">
                            <img :src="`${backendUrl}/storage/${project.cover_img}`" class="card-img-top" alt="...">
                        </div> 
                        
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                            <p class="card-text">{{ project.type?.name }}</p>
                            
                        </div>
                        
                        <router-link  class="btn btn-primary" :to="{ name: 'project', params: { id: project.id } }"> More Info </router-link>
                    </div>
              </div>
            <!-- </div> -->
        </div>
    </div>
    
</template>