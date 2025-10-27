<script setup lang="ts">
defineProps({
    desktopText: {
        type: String,
        required: false,
    },
    mobileText: {
        type: String,
        required: false,
    },
    pageName: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div v-if="pageName === 'LP-1' || pageName === 'LP-2'" class="bg-black flex justify-center items-center gap-3 py-2">
        <p class="text-white extrablod lg:text-2xl text-xl">FOR SALE</p>
        <div class="flex gap-2">
            <p v-for="(unit, index) in countdown" :key="index"
                class="bg-white text-black text-center py-0.5 px-2 leading-0 rounded-sm">
                <span class="block extrablod lg:text-xl text-lg leading-5 pt-1">{{ unit.value }}</span>
                <span class="font-bold text-xs block">{{ unit.label }}</span>
            </p>
        </div>
    </div>

    <!-- Blue promo bar -->
    <div v-if="pageName === 'LP-1' || pageName === 'LP-2'" class="bg-[#1EB9F0] py-1">
        <p class="text-black text-center lg:text-xl text-lg font-bold hidden lg:block">
            {{ desktopText }}
        </p>
        <p class="text-black text-center lg:text-xl text-lg font-bold lg:hidden">
            {{ mobileText }}
        </p>
    </div>

    <!-- show when pageName === "LP-3" -->
    <div v-if="pageName === 'LP-3'" class="bg-black lg:gap-3 gap-1 py-3">
        <div class="max-w-6xl mx-auto">
            <div class="text-white flex items-center justify-between lg:px-0 px-2">
                <p class="uppercase font-bold lg:text-sm text-xs">Health & WELLNESS</p>
                <p class="flex gap-2 uppercase font-bold lg:text-sm text-xs">
                    <img src="/images/us-flag.webp" class="lg:h-5 h-4"> Trending in the US
                </p>
            </div>
        </div>
    </div>

</template>