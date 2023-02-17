<script>
    export default{
        name: 'TheHeader',
        data(){
            return{
                // nav-bar:
                menuItems: [
                    {
                        label: '<Home/>',
                        routeName: 'home'
                    },
                    {
                        label: '<Projects/>',
                        routeName: 'projects'
                    },
                    {
                        label: '<About/>',
                        routeName: 'about'
                    },
                    {
                        label: '<Contacts/>',
                        routeName: 'contacts'
                    },

                ]
            }
        }
    }
</script>

<template >
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-danger">LOGO</a>
            
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item btn  text-center py-1" v-for="item, i in menuItems" :key="i">
                        <router-link :to="{ name: item.routeName }" class=" btn btn-outline-danger border-0" >{{item.label}}</router-link>
                    </li>
                 </ul>
            </div>
        </div>
    </nav>
</template>
