<template>
    <div class="container mx-auto">
        <Header text="Login" text_two="Register" />
        <form class="w-1/2 h-[70%] mx-auto p-16 flex flex-col gap-5 lg:w-[90%] sm:w-full xs:p-8">
            <div class="text-3xl font-bold sm:text-[26px] xs:text-[18px]">Create an account&comma;</div>
            <div class="w-full flex flex-col gap-4 mt-4">
                <div class="flex flex-col gap-2">
                    <label for="date" class="text-sm">Fullname</label>
                    <input type="text" name="name" class="border border-black rounded-md p-3">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="date" class="text-sm">Email</label>
                    <input type="email" name="email" class="border border-black rounded-md p-3">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="date" class="text-sm">Password</label>
                    <input type="password" name="password" class="border border-black rounded-md p-3">
                </div>
            </div>
            <router-link to="/" class="self-center">
                <button type="submit" class="mt-8 p-3 w-40 rounded-xl bg-btnColor text-white">Create</button>
            </router-link>
        </form>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

    export default {
        name : "Signup",
        components: {
            Header,
            Footer
        },
    }
</script>