<script>
    import axios from 'axios';
    import {store} from '../store';
import CardSingleProject from './CardSingleProject.vue';

    export default {
    name: "ProjectList",
    data() {
        return {
            store,
            projects: [],
        };
    },
    mounted() {
        axios.get(this.store.backendUrl + "/api/projects", {
            params: {
                last3: true,
                //creare query in controller e route in php
            },
        })
            .then((resp) => {
            this.projects = resp.data;
        });
    },
    components: { CardSingleProject }
}
</script>

<template>
        <div v-for="project in projects">
            <!-- :project="singleProject" -->
            <!-- <CardSingleProject ></CardSingleProject> -->
        </div>
</template>