<script>
import { store } from '../store';

export default{
    props:{
        singleProject:{
            // type: objectToString,
            // reuired: true,
        }
    },
    data() {
        return {
            store,
        }
    },
    //cashato: salva il dato in memoria e non va a ricercarlo ogni volta.
    //prestazone migliore
    computed:{
        coverImg(){
            // if(!this.singleProject.cover_img){
            //     return '/placeolder.png';
            // }
            //return  ${store.backendUrl}/storage/${project.cover_img}
        },
        //mai axios qui dentro perchè l'axios parte sempre in un secondo momento
        description(){
            //recupero lunghezza testo
            // const textLenght= this.post.description.lenght;

            // return this.post.content.slice(0,30 + '...');

        }
    }
}
</script>
<template lang="">
    <div>
        CARD EFFETTIVA
        <!-- <p>{{singleProject.name}}</p>
       splice 
        <p>{{singleProject.description}}</p> -->

    </div>
</template>