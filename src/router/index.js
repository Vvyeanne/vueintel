import { createRouter as Router, createWebHistory as History } from "vue-router";

import Home from "../components/Home.vue";
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import Content from "../components/Content.vue";
import Update from "../components/Update.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/content",
        name: "Content",
        component: Content
    },
    {
        path: "/update",
        name: "Update",
        component: Update
    }
];

const router = Router({
    history: History(process.env.BASE_URL),
    routes
})

export default router;