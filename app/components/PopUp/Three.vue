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

                <h1 class="text-2xl sm:text-3xl md:text-4xl extrablod md:mt-4 mt-3 md:mb-2 mb-1 uppercase">Finish
                    Signing Up <br> 60% Off
                </h1>
                <h4 class="text-lg sm:text-xl md:text-2xl font-extrabold md:mb-4 mb-3">to get texts to unlock 60% off
                </h4>
                <input
                    class="rounded-full md:rounded-2xl text-sm sm:text-lg md:text-xl text-black w-60 md:w-full ps-3 md:ps-4 py-3 md:py-4 border-2 border-black mb-2"
                    type="phone" placeholder="Enter your phone number">
                <p class="mb-2 text-gray-500 text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px]">*By providing
                    your number and tapping the button below, you agree to receive recurring auto-dialed marketing SMS
                    (including cart reminders, AI content, artificial or pre-recorded voices) and our <NuxtLink
                        href="#" class="italic underline">TERMS OF SERVICE</NuxtLink> (including arbitration). Consent is not required to
                    purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for help, STOP to opt out.
                    View <NuxtLink href="#" class="italic underline">PRIVACY POLICY</NuxtLink>.</p>
                <button @click="() => props.updateStep!(4)"
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