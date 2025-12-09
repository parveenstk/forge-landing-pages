<script setup>

import { ref } from 'vue';

const active = ref('card'); // default open section

const toggle = (name) => {
    active.value = active.value === name ? null : name;
};

// meta tag details
useHead({
    title: LANDING_1.meta.title,
    meta: [
        { name: 'description', content: LANDING_1.meta.description },
        { property: 'og:title', content: LANDING_1.meta.title },
        { property: 'og:description', content: LANDING_1.meta.description },
        { property: 'og:image', content: LANDING_1.meta.ogImage },
    ],
});
</script>

<template>

    <!-- Header -->
    <!-- <Header :desktopText="LANDING_1.header.desktopText" :mobileText="LANDING_1.header.mobileText"
        :pageName="LANDING_1.header.pageName" /> -->

    <main>

        <!-- header -->
        <header class="shadow-2xl">
            <div class="flex items-center justify-between max-w-[1000px] py-3 mx-auto px-3">
                <div class="logo">
                    <NuxtImg class="max-w-[99px]" src="/images/logo.png" alt="" />
                </div>
                <!-- mobile toggle -->
                <NuxtImg class="w-6 block md:hidden" src="/images/toggle.png" alt="" />
                <!-- mobile toggle -->
                <ul class="menu flex flex-col md:flex-row justify-evenly w-full max-w-[570px] mx-auto md:ms-auto md:py-0 py-16 md:static absolute top-15 left-0 right-0 bg-white text-center gap-4">
                    <li><a href="#" title="FREE Gifts"><span class="extrablod">FREE</span> Gifts</a></li>
                    <li><a href="#" title="About">About</a></li>
                    <li><a href="#" title="Ingredients">Ingredients</a></li>
                    <li><a href="#" title="FAQ">FAQ</a></li>
                </ul>
                <NuxtLink href="#" title="Order Now"
                    class="flex items-center gap-2 bg-[#E6193C] font-extrabold py-2 md:py-3 px-3 md:px-4 text-white justify-evenly rounded-md extrablod text-xs">
                    Order Now
                    <NuxtImg class="max-w-[20px] h-[20px]" src="/images/arrow.png" alt="" />
                </NuxtLink>
            </div>
        </header>
        <!-- header -->


        <!-- banner -->
        <section class=" bg-[radial-gradient(circle,_#12b2eb_41%,_#004293_100%)] py-6 px-4">
            <div class="flex flex-wrap md:flex-nowrap items-center max-w-[1000px] mx-auto gap-0 md:gap-5">
                <div class="w-full md:w-1/2">
                    <NuxtImg class="w-50 mx-auto md:w-100" src="/images/banner-bag.png" alt="" />
                </div>
                <div class="w-full md:w-1/2 text-white text-center md:text-start">
                    <h1 class="text-4xl md:text-5xl extrablod mb-1">
                        Unlock the Power <br> of 18 Superfoods
                    </h1>
                    <p class="font-bold text-lg">Supercharge your family's nutrition</p>
                    <div class="relative">
                        <video ref="video" muted loop class="border-4 border-white rounded-md mt-4 w-full"
                            @click="togglePlayPause">
                            <source src="/images/dsvideo.mp4" type="video/mp4" />
                        </video>

                        <div class="absolute top-0 bottom-0 w-full flex justify-center items-center">
                            <!-- Show play button when video is paused -->
                            <NuxtImg v-if="isPaused" src="/images/play.webp" alt="Play button"
                                @click="togglePlayPause" />

                            <!-- Show pause button when video is playing -->
                            <NuxtImg v-else src="/images/pause.png" alt="Pause button" @click="togglePlayPause" />
                        </div>
                    </div>



                </div>
            </div>
        </section>
        <!-- banner -->
        <!-- BodyContent -->
        <div class="max-w-[1000px] lg:py-6 py-0 mx-auto sm:px-3 lg:px-0">



        </div>

    </main>

    <!-- BodyContent -->
    <div>
        <!-- Your footer -->
        <footer ref="footerRef" class="bg-[radial-gradient(circle,_#12b2eb_17%,_#004293_100%)] lg:py-7 py-3">
            <div class=" mx-auto max-w-5xl hidden sm:flex  flex-col sm:flex-row text-white px-5 lg:px-0 gap-4">
                <div class="w-100 sm:w-1/4">
                    <h4 class="uppercase text-md md:text-2xl mb-2 md:mb-5 font-extrabold">About YOMZ</h4>
                    <p class="text-sm">Our mission is to end Hidden Hunger for 100 million people. And with your help,
                        we will.</p>
                </div>
                <div class="w-1/2 sm:w-1/4">
                    <h4 class="uppercase text-md md:text-2xl mb-2 md:mb-5 font-extrabold">Connect With Us</h4>
                    <ul class="flex flex-col gap-3 text-sm">
                        <li>
                            <NuxtLink class="flex gap-2" href="mailto:support@YOMZ.co">
                                <NuxtImg class="size-5" src="/images/mail.svg" alt="" /> support@YOMZ.co
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="flex gap-2" href="#">
                                <NuxtImg class="size-5" src="/images/phone-call.svg" alt="" />+00 000 0000
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-1/2 sm:w-1/4">
                    <h4 class="uppercase text-md md:text-2xl mb-2 md:mb-5 font-extrabold">About YOMZ</h4>
                    <ul class="flex flex-col gap-2 text-sm">
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Privacy Policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Terms of Service</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Shipping Policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Refund Policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Cancel Subscription</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-1/4">
                    <div class="flex flex-col">
                        <div class="one">
                            <h4 class="uppercase text-md md:text-2xl mb-2 md:mb-5 font-extrabold">Follow Us</h4>
                            <ul class="flex flex-row gap-2 mb-3">
                                <li>
                                    <NuxtLink href="#"
                                        class="w-10 h-10 flex justify-center items-center rounded-full bg-[#fff500]">
                                        <NuxtImg class="size-5" src="/images/facebook.png" alt="" />
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink href="#"
                                        class="w-10 h-10 flex justify-center items-center rounded-full bg-[#fff500]">
                                        <NuxtImg class="size-5" src="/images/instagram.png" alt="" />
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink href="#"
                                        class="w-10 h-10 flex justify-center items-center rounded-full bg-[#fff500]">
                                        <NuxtImg class="size-5" src="/images/pinterest.png" alt="" />
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="two">
                            <h4 class="uppercase text-md md:text-2xl mb-2 md:my-5 font-extrabold">We Accept</h4>
                            <div class="flex flex-row gap-2">
                                <NuxtImg class="size-10" src="/images/visa.svg" alt="" />
                                <NuxtImg class="size-10" src="/images/cc-mastercard.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="mx-auto max-w-5xl flex sm:hidden flex-wrap sm:flex-row sm:flex-wrap text-white px-5 lg:px-0 gap-4 mb-4">
                <div class="w-full sm:w-1/4">
                    <h4 class="uppercase text-sm md:text-2xl mb-2 md:mb-5 font-extrabold">About YOMZ</h4>
                    <p class="text-xs sm:text-sm">Our mission is to end Hidden Hunger for 100 million people. And with
                        your help,
                        we will.</p>
                </div>
            </div>
            <div class="mx-auto max-w-5xl sm:hidden grid grid-cols-2 sm:grid-cols-4 text-white px-5 lg:px-0 gap-4">

                <div class="w-full">
                    <h4 class="uppercase text-sm md:text-2xl mb-2 md:mb-5 font-extrabold">Connect With Us</h4>
                    <ul class="flex flex-col gap-2 text-xs">
                        <li>
                            <NuxtLink class="flex gap-2" href="mailto:support@YOMZ.co">
                                <NuxtImg class="size-4" src="/images/mail.svg" alt="" /> support@YOMZ.co
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="flex gap-2" href="#">
                                <NuxtImg class="size-4" src="/images/phone-call.svg" alt="" />+00 000 0000
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="w-full">
                    <h4 class="uppercase text-md md:text-2xl mb-2 md:mb-5 font-extrabold">About YOMZ</h4>
                    <ul class="flex flex-col gap-2 text-xs">
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Privacy Policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Terms of Service</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Shipping Policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Refund Policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="privacy-policy.html">→ Cancel Subscription</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="w-full">
                    <h4 class="uppercase text-xs md:text-2xl mb-2 md:mb-5 font-extrabold">Follow Us</h4>
                    <ul class="flex flex-row gap-2 mb-3">
                        <li>
                            <NuxtLink href="#"
                                class="w-8 h-8 flex justify-center items-center rounded-full bg-[#fff500]">
                                <NuxtImg class="size-4" src="/images/facebook.png" alt="" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#"
                                class="w-8 h-8 flex justify-center items-center rounded-full bg-[#fff500]">
                                <NuxtImg class="size-4" src="/images/instagram.png" alt="" />
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="#"
                                class="w-8 h-8 flex justify-center items-center rounded-full bg-[#fff500]">
                                <NuxtImg class="size-4" src="/images/pinterest.png" alt="" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="w-full">
                    <h4 class="uppercase text-sm md:text-2xl mb-2 md:my-5 font-extrabold">We Accept</h4>
                    <div class="flex flex-row gap-2">
                        <NuxtImg class="size-10" src="/images/visa.svg" alt="" />
                        <NuxtImg class="size-10" src="/images/cc-mastercard.svg" alt="" />
                    </div>
                </div>
            </div>


        </footer>
        <section class="copy bg-[#004394] py-4">
            <div class=" mx-auto max-w-5xl hidden sm:flex text-white px-5 lg:px-0 gap-1 flex-col text-center">
                <p class="text-sm mb-0">Copyright © 2025 All rights reserved.</p>
                <NuxtImg class="w-100 max-w-[120px] mx-auto" src="/images/dmca-badge.png" alt />
            </div>
        </section>

    </div>

</template>


<script>
export default {
    data() {
        return {
            isPaused: true, // Starts with the video paused
        };
    },
    methods: {
        togglePlayPause() {
            const video = this.$refs.video;
            if (video.paused) {
                video.play();
                this.isPaused = false;
            } else {
                video.pause();
                this.isPaused = true;
            }
        },
    },
};
</script>