import { createRouter, createWebHistory } from 'vue-router';

//importazione pagine:
import HomePage from './pages/Home.vue';
import ProjectsPage from './pages/Projects.vue';
import SingleProjectPage from './pages/SingleProject.vue';
import AboutPage from './pages/About.vue';
// import ContactsPage from './pages/Contactsvue';


const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: 'HomePage',
        },
        {
            path:'/projects',
            name: 'projects',
            component: 'ProjectsPage'
        },
        {
            path: '/projects/:id',
            name: 'project',
            component: 'SingleProjectPage'
        },
        {
            path: '/about-me',
            name: 'about',
            component: 'AboutPage'
        },
        // {
        //     path: '/contacts',
        //     name: 'contact-us',
        //     component: 'ContactPage'
        // }
    ]
});

export { router };