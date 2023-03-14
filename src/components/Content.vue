<template>
    <div class="2xl:container mx-auto">
        <Header text="Logout" text_two="My Bucket" />
        <div class="w-screen p-16 flex flex-col gap-12 md:p-8">
            <div class="flex flex-col gap-2">
                <div class="text-[800] text-2xl" contenteditable="true">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et</div>
                <div class="text-sm text-btnColor">20/05/2025</div>
            </div>
            <p class="text-justify text-sm" contenteditable="true">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
            <p class="text-justify text-sm" contenteditable="true">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
            <p class="text-justify text-sm" contenteditable="true">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
            <div class="flex flex-wrap gap-4">
                <router-link to="/"><button class="p-3 w-40 rounded-xl bg-editBtn text-white" contenteditable="false">Edit</button></router-link>
                <button @click="alertMsg" class="p-3 w-40 rounded-xl bg-delBtn text-white" contenteditable="false">Delete</button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";

    export default {
        name : "Content",
        components: {
            Header,
            Footer
        },
        methods : {
            alertMsg() {
                alert("Just a button")
            }
        }
    }
</script>