<script setup lang="ts">

const props = defineProps({
    step: Number,
    updateStep: Function
})

const isClosed = ref(false)

const handleClose = () => {
    isClosed.value = true
};

</script>
<template>
    <section v-if="!isClosed"
        class="popup w-full h-[100vh] fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto">
        <div class="w-full md:w-1/2 bg-gray-200 flex justify-center items-center px-4 py-6 md:px-12 md:py-0 opacity-98">
            <div class="max-w-md text-center">

                <h1 class="text-2xl sm:text-3xl md:text-4xl extrablod md:mt-4 mt-3 md:mb-2 mb-1 uppercase">You’re in!
                </h1>
                <h4 class="text-md sm:text-lg md:text-xl font-extrabold md:mb-1 mb-1">Use code <span
                        class="extrablod">WELCOME60</span> at checkout to unlock <span class="extrablod">60% off</span>
                    and claim your 4 FREE gifts!</h4>
                <h4
                    class="text-md sm:text-lg md:text-xl extrablod md:mb-2 mt-4 border-2 border-cyan-600 bg-gray-300 py-3 rounded-sm">
                    WELCOME</h4>

                <NuxtLink to="https://get.yumzy.com/checkout-2-a/">
                    <button
                        class="mt-3 bg-black cursor-pointer rounded-full md:rounded-2xl text-sm sm:text-lg md:text-xl text-white w-60 md:w-full py-4">Shop
                        Now</button>
                </NuxtLink>
            </div>
        </div>

        <button @click="handleClose"
            class="size-4 close absolute top-3 right-3 text-black md:text-white cursor-pointer z-10 text-xl md:text-2xl">
            <NuxtImg class="hidden md:block" src="/images/close-white.png" />
            <NuxtImg class="md:hidden block" src="/images/close-black.png" />
        </button>
        <div class="w-full md:w-1/2 flex justify-center items-center relative">
            <NuxtImg src="/images/p1-8.jpg" class="w-full h-full object-cover" />
        </div>
    </section>
</template>