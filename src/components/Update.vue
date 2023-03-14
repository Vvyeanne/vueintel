<template>
    <div class="container mx-auto">
        <Header text="Logout" text_two="My Bucket" />
        <form class="w-1/2 h-4/5 p-16 flex flex-col gap-4 lg:w-full">
            <div class="flex flex-col gap-2">
                <label for="date" class="text-sm xs:text-sm">Date in the future</label>
                <input type="date" name="date" @input="btnTextChg" class="border border-black rounded-md p-3 xs:text-sm">
            </div>
            <div class="flex flex-col gap-2">
                <label for="date" class="text-sm xs:text-sm">Title</label>
                <input type="text" name="title" @input="btnTextChg" class="border border-black rounded-md p-3 xs:text-sm">
            </div>
            <div class="flex flex-col gap-2">
                <label for="date" class="text-sm xs:text-sm">Details</label>
                <textarea rows="10" name="bucket" @input="btnTextChg" class="border border-black rounded-md p-3 resize-none xs:text-sm"></textarea>
            </div>
            <router-link to="/">
                <button type="button" class="self-center mt-8 p-3 w-40 rounded-xl bg-btnColor text-white">{{text}}</button>
            </router-link>
        </form>
        <Footer />
    </div>
</template>


<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";

    export default {
        name : "Update",
        components: {
            Header,
            Footer
        },
        data() {
            return {
                text : "Save"
            }
        },
        methods: {
            btnTextChg(e) {
                const form = e.currentTarget.parentElement.parentElement;
                const date = form['date'];
                const title = form['title'];
                const bucket = form['bucket'];

                if (date.value && title.value && bucket.value) {
                    this.text = "Update";
                }else {
                    this.text = "Save";
                }
            }
        }
    }
</script>