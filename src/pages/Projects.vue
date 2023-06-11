<script>
    import axios from 'axios';

    export default{
        name: 'Projects',
        data(){
            return{
                backendUrl: 'http://127.0.0.1:8000',
                projects: [],
                currentPage: 1,
            }
        },
        methods:{
            fetchProjects(){
                axios.get(`${this.backendUrl}/api/projects`,{
                    params:{
                        ...this.$route.query,
                    }
                })
                .then((resp) => {
                    this.projects = resp.data.data;
                    // console.log(this.projects);
                    this.currentPage= resp.data.current_page;
                })
            },
            prev(){
                setTimeout(()=>{
                    this.fetchProjects();
                }, 500)
            },
            next(){
                setTimeout(()=>{
                    this.fetchProjects();
                }, 500)
            }
        },
        mounted(){
           this.fetchProjects();
        }
    }
</script>

<template>

    <div class="container">
        <h1 >Projects Page</h1>
        <!-- pagination: -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
            <li class="page-item">
                <router-link :to="{name: 'projects', query: { page: currentPage - 1}}" 
                class="page-link" 
                @click="prev">
                    Previous
                </router-link>
            </li>
            <li class="page-item"><a class="page-link" href="#">{{currentPage}} </a></li>
            <li class="page-item">
                <router-link :to="{name: 'projects', query: {page: currentPage + 1}}" 
                class="page-link" 
                @click="next">
                    Next
                </router-link>
            </li>
            </ul>
        </nav>

        
        <div class="row row-cols-3 row-cols-md-4 g-4">
            <div class="col"  v-for="project in projects" :key="project.id">
                <!-- <div v-for="El in project" :key="El.id"> -->
                    <div class="card">
                         <!-- <div  v-if="project.cover_img.includes("http")">
                           IMG
                        </div>  -->

                        <!-- <div v-if>
                            <img :src="`${backendUrl}/storage/${project.cover_img}`" class="card-img-top" alt="...">
                        </div>  -->

                         

                        <div class="card-body">
                            <h5 class="card-title">{{ project.name.substring(0,30)}}...</h5>
                            <p class="card-text">{{ project.description.substring(0,20) }}...</p>
                            <p class="card-text">{{ project.type?.name }}</p>
                            
                        </div>
                        
                        <router-link  class="btn btn-primary" :to="{ name: 'project', params: { id: project.id } }"> More Info </router-link>
                    </div>
              </div>
            <!-- </div> -->
        </div>
    </div>
    
</template>