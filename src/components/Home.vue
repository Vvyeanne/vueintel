<template>
    <div class="2xl:container mx-auto">
        <Header text="Logout" text_two="My Bucket" />
        <div class="w-full flex justify-between items-center p-16 xs:flex-col xs:items-start xs:py-16 xs:px-8">
            <div class="flex flex-col gap-3 sm:gap-1">
                <div class="text-2xl font-[600] tracking-wider sm:text-[17px] sm:flex-[0.5]">Welcome John Doe&comma;</div>
                <div class="text-sm sm:text-sm sm:flex-[0.5]">Here are items in your eventful moment bucket.</div>
            </div>
            <router-link to="/update">
                <button class="p-3 w-40 rounded-xl text-white text-bold bg-btnColor sm:w-28 sm:p-2 sm:mt-4 ">Add item</button>
            </router-link>
        </div>
        <div class="h-full grid grid-cols-2 w-[90%] mx-auto gap-7 md:grid-cols-1">
            <div class="px-3 py-5 flex flex-col gap-4 shadow-lg hover:bg-boxHover">
                <div class="text-[800]">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</div>
                <div class="text-[12.5px] text-justify">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</div>
                <div class="flex justify-between items-center">
                    <router-link to="/content"><a href="#" class="capitalize text-xs text-btnColor">view details</a></router-link>
                    <div class="flex gap-3 items-center">
                        <div class="text-dateColor text-xs">20/05/2021</div>
                        <div class="text-bold text-xs">20/05/2025</div>
                    </div>
                </div>
            </div>
            <div class="px-3 py-5 flex flex-col gap-4 shadow-lg hover:bg-boxHover">
                <div class="text-[800]">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</div>
                <div class="text-[12.5px] text-justify">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</div>
                <div class="flex justify-between items-center">
                    <router-link to="/content"><a href="#" class="capitalize text-xs text-btnColor">view details</a></router-link>
                    <div class="flex gap-3 items-center">
                        <div class="text-dateColor text-xs">20/05/2021</div>
                        <div class="text-bold text-xs">20/05/2025</div>
                    </div>
                </div>
            </div>
            <div class="px-3 py-5 flex flex-col gap-4 shadow-lg hover:bg-boxHover">
                <div class="text-[800]">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</div>
                <div class="text-[12.5px] text-justify">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</div>
                <div class="flex justify-between items-center">
                    <router-link to="/content"><a href="#" class="capitalize text-xs text-btnColor">view details</a></router-link>
                    <div class="flex gap-3 items-center">
                        <div class="text-dateColor text-xs">20/05/2021</div>
                        <div class="text-bold text-xs">20/05/2025</div>
                    </div>
                </div>
            </div>
            <div class="px-3 py-5 flex flex-col gap-4 shadow-lg hover:bg-boxHover">
                <div class="text-[800]">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</div>
                <div class="text-[12.5px] text-justify">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</div>
                <div class="flex justify-between items-center">
                    <router-link to="/content"><a href="#" class="capitalize text-xs text-btnColor">view details</a></router-link>
                    <div class="flex gap-3 items-center">
                        <div class="text-dateColor text-xs">20/05/2021</div>
                        <div class="text-bold text-xs">20/05/2025</div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/" class="w-full flex justify-center mt-14">
            <button @click="LoadMore()" type="button" class="p-3 w-40 rounded-xl bg-btnColor text-white">Load More</button>
        </router-link>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
    methods:{
        LoadMore() {
            alert("No items below")
        }
    }
};
</script>
