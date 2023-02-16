<script>
import axios from 'axios';
    export default{
        name: 'SingleProject',
        data(){
            return{
                backendUrl: 'http://127.0.0.1:8000',
                project: [],
            }
        },
        methods:{
            fetchProject(){
                axios.get(`${this.backendUrl}/api/projects/${this.$route.params.id}`)
                .then((resp) => {
                    this.project = resp.data;
                    console.log(this.project);
                })
            }
        },
        mounted(){
           this.fetchProject();
        }
    }
</script>

<template >
    <h1>Single Progect Page</h1>
    <div class="col">
        <div class="card">
        <div v-if="project.cover_img">
            <img :src="`${backendUrl}/storage/${project.cover_img}`" class="card-img-top" alt="...">
        </div> 
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
        <!-- <router-link :to="{name: 'project', params:{id: 'project.id'}}"> More Info</router-link> -->
    </div>
    </div>
    
</template>