<template>
    <div class="flex justify-between items-center h-14 bg-headColor px-16 xs:px-8">
            <div class="text-white text-[20px] text-bolder italic xs:text-sm">
                Eventful Moments
            </div>
            <ul class="flex gap-10 list-none text-sm text-white sm:gap-4">
                <router-link :to="textDoc"><li><a class="" href="#">{{text}}</a></li></router-link>
                <router-link  @click="onClick()" :to="textDoc2"><li><a class="" href="#"></a>{{text_two}}</li></router-link>
            </ul>
        </div>
</template>

<script>
    export default {
        name : "Header",
        props: {
            text : String,
            text_two : String,
        },
        data() {
            return {
                textDoc : this.text === "Logout" ? "/login" : "/",
                textDoc2 : this.text_two === "My Bucket" ? "/" : "/signup"
            }
        },
        methods: {
            onClick() {
                this.$emit("toggleViews")
            }
        }
    }
</script>