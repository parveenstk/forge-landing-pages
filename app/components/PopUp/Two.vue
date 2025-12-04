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
        class="popup w-full h-[100vh] fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto z-99">
        <div class="w-full md:w-1/2 bg-gray-200 flex justify-center items-center px-4 py-6 md:px-12 md:py-0 opacity-98">
            <div class="max-w-md text-center">

                <h1 class="text-4xl sm:text-5xl md:text-6xl extrablod md:mt-4 mt-3 md:mb-2 mb-1 uppercase">Unlock
                    <br> 60% Off
                </h1>
                <h4 class="text-xl sm:text-2xl md:text-3xl extrablod md:mb-4 mb-3">+ 4 FREE Gifts</h4>
                <input
                    class="rounded-full md:rounded-2xl text-sm sm:text-lg md:text-xl text-black w-60 md:w-full ps-3 md:ps-4 py-3 md:py-4 border-2 border-black mb-2"
                    type="email" placeholder="Enter your email address">
                <button @click="() => props.updateStep!(3)"
                    class="bg-black cursor-pointer rounded-full md:rounded-2xl text-sm sm:text-lg md:text-xl text-white w-60 md:w-full py-4">Unlock
                    60% Off + Gifts</button>
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