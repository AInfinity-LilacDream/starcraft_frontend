import { createRouter, createWebHistory } from 'vue-router';
import loginPage from '../loginPage.vue';
import homePage from '../homePage.vue';
import registerPage from '@/registerPage.vue';

const routes = [
    {
        path: '/loginPage',
        name: 'loginPage',
        component: loginPage
    },
    {
        path: '/',
        name: 'homePage',
        component: homePage
    },
    {
        path: '/homePage',
        name: 'homePage',
        component: homePage
    },
    {
        path: '/registerPage',
        name: 'registerPage',
        component: registerPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;