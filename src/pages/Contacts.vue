<script>
import axios from 'axios';
import {store} from '../store';

export default {
    data(){
        return{
            store,
            backendUrl: 'http://127.0.0.1:8000',
            submitResult:'',
            form:{
                loading: false,
                userName: '',
                email: '',
                object: '',
                message: '',
                attachment:'',
            }
        }
    },
    methods: {
        onFormSubmit(){
            this.loading = true;
            
            //creo conversione per file con FormData():
            const formData= new FormData();
            formData.append("userName", this.form.userName);
            formData.append("email", this.form.email);
            formData.append("object", this.form.object);
            formData.append("message", this.form.message);
            formData.append("attachment", this.form.attachment);
            

            axios.post(store.backendUrl + "/api/contacts" , formData)
            .then((resp)=>{
                //;
                this.loading = false;
                this.submitResult = "success";
            })
            .catch((e)=>{
                console.log(e);
                if(e.response && e.response.data){
                     this.submiteResult = e.response.data.message;
                }else{
                    this.submitResult = e.message;
                }
                this.loading = false;
            });
        },
        onAttachment(event){
            //ottengo un array
            const files= event.target.files;

            this.form.attachment= files[0];
        }
    },  
}
</script>

<template>
    <div class="container">
        <h1>Pagina Contatti</h1> 
        <form action="" @submit.prevent="onFormSubmit"
        v-if="submitResult !== 'success'">

            <!-- aller inviato o errore: -->
            <div class="alert alert-success" v-if="this.submitResult === 'success'">
              Messaggio inviato correttamente. Ti risponderemo il prima possibile!
            </div>
            <div class="alert alert-danger" v-else-if="submitResult">
              Errore nell'invio del messaggio, ti invitiamo a riprovare!<br />
              {{ submitResult }}
            </div>

            <!-- non abbiamo bisogno del name -->
            <!-- serviranno i v-bind="" -->
            
            <!-- User-name -->
            <div class="mb-3">
                <label for="userName" class="form-label">Enter your full name</label>
                <input type="text" class="form-control" id="userName"
                v-model="form.userName"/>
            </div>

            <!-- email-input -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email"
                v-model="form.email"/>
            </div>

            <!-- object-mail  -->
            <div class="mb-3">
                <label for="object" class="form-label">Object Email</label>
                <input type="text" class="form-control" id="object"
                v-model="form.object">
                
            </div>
            
            <!-- message-mail -->
            <div class="mb-3">
            <label for="message" class="form-label" >Message Email</label>
                <textarea rows="3" cols="30" class="form-control" id="message"
                v-model="form.message"/>
            </div>

            <!-- file-input -->
            <div class="mb-5">
            <label for="img" class="form-label">Image</label>
                <input type="file" class="form-control"  id="img" @change="onAttachment"/>
            </div>

            <button type="submit" class="btn btn-primary me-3" :disabled="loading"> 
                <span v-if="loading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true">
                </span>
                Invia
            </button>

            <button class="btn btn-warning" :disabled="loading">Annulla</button>

        </form>
    </div>
</template>