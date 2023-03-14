<template>
    <div class="2xl:container h-screen mx-auto">
        <Header @toggleViews="$emit('toggleViews')" text="Login" text_two="Register" />
        <div class="h-4/5 mt-4 flex justify-center items-center">
            <div class="w-2/5 h-80 flex flex-col gap-3 lg:w-[70%] xs:w-full xs:px-10">
                <div class="font-bold text-black text-[40px] text-justify sm:text-sm">Welcome back&comma;</div>
                <div class="text-[20px] text-justify sm:text-sm">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.</div>
                <form action="#" class="w-full flex flex-col gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-xs">Email</label>
                        <input type="text" class="p-3 border border-black rounded-xl xs:p-2">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-xs">Password</label>
                        <input type="text" class="p-3 border border-black rounded-xl xs:p-2">
                    </div>
                    <router-link to="/" class="w-full text-center">
                        <button @click="onClick()" type="button" class="p-3 w-40 rounded-xl bg-btnColor text-white">Login</button>
                    </router-link>
                </form>
            </div>
        </div>
        <Footer />        
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: "Login",
    components: {
        Header,
        Footer
    },
    methods : {
        onClick() {
            this.$emit("toggleViews");
        }
    }
};
</script>
