import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory
import PaymentSuccess from "@/components/PaymentSuccess.vue";
import PaymentFail from "@/components/PaymentFail.vue";

const routes = [
    { path: '/success', component: PaymentSuccess },
    { path: '/cancel', component: PaymentFail }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router) // Use the router
    .mount('#app');
