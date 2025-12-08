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

        <!-- BodyContent -->
        <div class="max-w-[994px] lg:py-6 py-0 mx-auto sm:px-3 lg:px-0">

            <!-- banner -->
            <section class="banner">
                <div class="hidden lg:block">
                    <NuxtImg class="w-full" src="/images/chekout-banner.jpg" alt="" />
                </div>
                <div class="lg:hidden block">
                    <NuxtImg class="w-full" src="/images/chekout-banner-mobile.jpg" alt="" />
                </div>
                <div class="bg-gray-200 py-2 flex justify-center items-center gap-4">
                    <p class="text-[#212529] font-bold text-lg">YOUR ORDER IS RESERVED FOR <span
                            class="count text-[#ff0000] text-xl">09:45</span></p>
                </div>
                <div class="my-3 font-bold mx-auto text-center">🔒 Secure Checkout</div>
            </section>
            <!-- banner -->

            <div class="flex flex-col md:flex-row lg:mt-10 md:gap-5">
                <div class="w-full md:w-1/2">
                    <!-- tab view -->
                    <div class="border-2 border-gray-300 sm:rounded-md p-4 block lg:hidden text-center sm:mb-3">
                        <p class="flex flex-wrap gap-2 text-[#09509c] text-xs sm:text-sm justify-center">
                            <NuxtImg src="/images/eye.png" alt="" class="size-4 sm:size-5" />
                            <span class="font-bold">35 people</span>
                            <span> are online now on this page!</span>
                        </p>

                        <NuxtImg src="/images/desktop-bag-1.png" alt="" class="mx-auto w-100 my-5" />
                        <p class="font-bold">Cart Summary</p>
                        <h4 class="text-2xl extrablod mb-2">1 Person - 1 Bag</h4>
                        <div class="flex items-center text-xs justify-center">
                            <span class="bg-green-700 text-white px-1 font-bold text me-2">4.5</span> <span
                                class="font-bold me-1">Excellent!</span> (2,797 reviews)
                        </div>

                        <!-- price tabs -->
                        <div class="flex justify-between mt-5">
                            <p class="font-extrabold">Normally</p>
                            <p class="font-extrabold line-through decoration-red-500">$79.99</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-extrabold">Coupon: <span class="text-[#15b400]">40%OFF</span></p>
                            <p class="font-extrabold text-[#15b400] underline">-$31.99</p>
                        </div>
                        <div class="flex justify-between border-t-1 border-gray-300 my-3 pt-3">
                            <p class="font-extrabold text-lg">Today's Price</p>
                            <p class="font-extrabold line-through decoration-red-500 text-lg">$48.00</p>
                        </div>
                        <div class="my-4">
                            <div class="text-start flex items-start"><input type="checkbox"
                                    class="cursor-pointer size-6" checked>
                                <p class="font-bold text-xs ms-2">I do not want to receive exclusive
                                    content and promotion form
                                    this
                                    vendor, and do not share my personal information.</p>
                            </div>
                        </div>
                        <div class="my-4">
                            <div class="mb-2 flex justify-between">
                                <p class="font-light text-sm">Subtotal</p>
                                <p class="font-light line-through text-sm">$48.00</p>
                            </div>
                            <div class="mb-2 flex justify-between">
                                <p class="font-light text-sm">Shipping & Handling</p>
                                <p class="font-light line-through text-sm">$9.95</p>
                            </div>
                            <div class="mb-2 flex justify-between">
                                <p class="font-light text-sm">Tax</p>
                                <p class="font-light line-through text-sm">$0.00</p>
                            </div>
                            <div class="mb-2 flex justify-between">
                                <p class="font-light text-sm">TOTAL</p>
                                <p class="font-light line-through text-sm">$57.95</p>
                            </div>
                        </div>
                    </div>

                    <!-- customer information -->
                    <div class="sm:border-2 border-gray-300 border-b-1 sm:rounded-md p-4 sm:mb-4">
                        <h4 class="font-bold text-lg mb-2">Customer Information</h4>
                        <!-- Email Input -->
                        <div class="relative mb-5">
                            <input type="email" required id="email" placeholder="Email address" class="peer border border-gray-300 focus:outline-0 text-gray-600 
               focus:border-[#86b7fe] focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] 
               font-bold text-sm rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                            <label for="email" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                Email address
                            </label>
                            <p class="text-xs mt-2">To receive an email order confirmation.</p>
                        </div>

                        <!-- Phone Input -->
                        <div class="relative mb-5">
                            <input type="tel" required id="phone" placeholder="Phone number" class="peer border border-gray-300 focus:outline-0 text-gray-600 
               focus:border-[#86b7fe] focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] 
               font-bold text-sm rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                            <label for="phone" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                Phone number
                            </label>
                            <p class="text-xs mt-2">To receive tracking information.</p>
                        </div>

                    </div>

                    <!-- payment information -->
                    <div class="sm:border-2 border-b-1 border-gray-300 sm:rounded-md sm:mb-4">
                        <div class="p-4">
                            <h4 class="font-bold text-lg">Payment Information</h4>
                            <p class=" text-xs">All transactions are secure and encrypted.</p>
                        </div>

                        <!-- CREDIT CARD ACCORDION HEADER -->
                        <div class="flex justify-between items-center border-t border-gray-300 p-4 cursor-pointer"
                            @click="toggle('card')">
                            <div class="rad flex items-center gap-2">
                                <input type="radio" class="size-5" :checked="active === 'card'">
                                <label class="font-extrabold text-lg">Credit Card</label>
                            </div>
                            <span class="flex items-center gap-2">
                                <NuxtImg src="/images/visa.svg" alt="visa" />
                                <NuxtImg src="/images/cc-mastercard.svg" alt="mastercard" />
                            </span>
                        </div>

                        <!-- CREDIT CARD CONTENT -->
                        <div class="overflow-hidden transition-all duration-300"
                            :style="{ maxHeight: active === 'card' ? '500px' : '0px' }">
                            <div class="px-4 pb-4 pt-3">
                                <!-- Card Number -->
                                <div class="relative mb-5">
                                    <input type="number" required id="card-number" placeholder="Card Number" class="outline-0 peer border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
               focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
               rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                    <label for="card-number" class="absolute left-3 top-4 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                        Card Number
                                    </label>
                                </div>

                                <!-- Expiration Date & Security Code -->
                                <div class="flex gap-2 mb-5">
                                    <!-- Expiration Date -->
                                    <div class="relative w-1/2">
                                        <input type="number" required id="exp-date" placeholder="Expiration Date" class="outline-0 peer border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
                   focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
                   rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                        <label for="exp-date" class="absolute left-3 top-4 text-gray-500 text-sm transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                   peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
                   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                            Expiration Date
                                        </label>
                                    </div>

                                    <!-- Security Code -->
                                    <div class="relative w-1/2">
                                        <input type="number" required id="security-code" placeholder="Security Code"
                                            class="outline-0 peer border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
                   focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
                   rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                        <label for="security-code" class="absolute left-3 top-4 text-gray-500 text-sm transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                   peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
                   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                            Security Code
                                        </label>
                                    </div>
                                </div>

                                <!-- Card Holder Name -->
                                <div class="relative mb-5">
                                    <input type="text" required id="card-holder" placeholder="Card Holder Name" class="outline-0 peer border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
               focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
               rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                    <label for="card-holder" class="absolute left-3 top-4 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                        Card Holder Name
                                    </label>
                                </div>

                            </div>
                        </div>

                        <!-- PAYPAL ACCORDION HEADER -->
                        <div class="flex justify-between items-center border-t border-gray-300 p-4 cursor-pointer"
                            @click="toggle('paypal')">
                            <div class="rad flex items-center gap-2">
                                <input type="radio" class="size-5" :checked="active === 'paypal'">
                                <NuxtImg class="w-28" src="/images/paypal.svg" alt="" />
                            </div>
                        </div>

                        <!-- PAYPAL CONTENT -->
                        <div class="overflow-hidden transition-all duration-300"
                            :style="{ maxHeight: active === 'paypal' ? '200px' : '0px' }">
                            <div class="px-4 mb-5">
                                <p class="font-base text-[15px]">
                                    After clicking "Continue to PayPal", you will be redirected to PayPal to complete
                                    your purchase securely.
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- shipping information -->
                    <div class="sm:border-2 border-b-1 border-gray-300 sm:rounded-md">
                        <div class="p-4">
                            <h4 class="font-bold text-lg">Shipping Information</h4>
                        </div>

                        <div class="px-4">
                            <!-- Full Name -->
                            <div class="relative mb-5">
                                <input type="text" id="full-name" required placeholder="Full Name" class="peer outline-0 border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
               focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
               rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                <label for="full-name" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                    Full Name
                                </label>
                            </div>

                            <!-- Street Address -->
                            <div class="relative mb-5">
                                <input type="text" id="street-address" required placeholder="Street Address" class="peer outline-0 border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
               focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
               rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                <label for="street-address" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                    Street Address
                                </label>
                            </div>

                            <!-- Apt / Suite / Other -->
                            <div class="relative mb-5">
                                <input type="text" id="apt-suite" placeholder="Apt / Suite / Other" class="peer outline-0 border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
               focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
               rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                <label for="apt-suite" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
               peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
               peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                    Apt / Suite / Other
                                </label>
                            </div>

                            <!-- City & Postal Code -->
                            <div class="flex gap-2 mb-5">
                                <!-- City -->
                                <div class="relative w-1/2">
                                    <input type="text" id="city" required placeholder="City" class="peer outline-0 border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
                   focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
                   rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                    <label for="city" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                   peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
                   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                        City
                                    </label>
                                </div>

                                <!-- Postal Code -->
                                <div class="relative w-1/2">
                                    <input type="number" id="postal-code" required placeholder="Postal Code" class="peer outline-0 border border-gray-300 text-gray-600 focus:border-[#86b7fe] 
                   focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] font-bold text-sm 
                   rounded-md py-4 px-3 w-full bg-white placeholder-transparent" />
                                    <label for="postal-code" class="absolute left-3 top-4 text-gray-500 text-sm transition-all
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                   peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#575757]
                   peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                                        Postal Code
                                    </label>
                                </div>
                            </div>

                            <div class="block md:hidden">
                                <p class="text-xs text-gray-500 font-semibold text-center">By clicking Pay Now below, I
                                    agree to the
                                    <NuxtLink href="#" class="underline text-blue-500"> Terms of Sale.</NuxtLink>
                                </p>

                                <button
                                    class="cursor-pointer mt-4 mb-3 border-3 border-[#0400F4] bg-[#FFF500] text-[#003087] text-2xl extrablod rounded-xl w-full py-3 px-4 text-center">Pay
                                    Now</button>

                                <NuxtImg src="/images/check-pay.png" alt="" class="w-full" />
                                <NuxtImg src="/images/searcure-icon.jpg" alt=""
                                    class="w-100 max-w-[90%] mx-auto mt-3" />
                                <p class="text-center text-sm mb-3"> <span class="font-bold text-[#0084ca]">You've made
                                        a
                                        great choice!</span> <br>
                                    <span class="font-bold">Order now</span> before someone else <br>
                                    grabs your discounted bags from you!
                                </p>
                            </div>

                        </div>

                        <!-- desktop view -->
                        <NuxtImg class="mt-5 w-full hidden lg:block" src="/images/reviews.jpg" alt="" />

                    </div>

                </div>
                <div class="w-full md:w-1/2">
                    <div class="border-2 border-gray-300 rounded-md mb-4 text-center">
                        <!-- dekstop view -->
                        <div class="hidden lg:block p-4">
                            <p class="flex flex-wrap gap-2 text-[#09509c] text-sm justify-center">
                                <NuxtImg src="/images/eye.png" alt="" class="size-5" />
                                <span class="font-bold">35 people</span>
                                <span> are online now on this page!</span>
                            </p>

                            <NuxtImg src="/images/desktop-bag-1.png" alt="" class="mx-auto w-100 my-5" />
                            <p class="font-bold">Cart Summary</p>
                            <h4 class="text-2xl extrablod mb-2">1 Person - 1 Bag</h4>
                            <div class="flex items-center text-xs justify-center">
                                <span class="bg-green-700 text-white px-1 font-bold text me-2">4.5</span> <span
                                    class="font-bold me-1">Excellent!</span> (2,797 reviews)
                            </div>

                            <!-- price tabs -->
                            <div class="flex justify-between">
                                <p class="font-extrabold">Normally</p>
                                <p class="font-extrabold line-through decoration-red-500">$79.99</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-extrabold">Coupon: <span class="text-[#15b400] underline">40%OFF</span>
                                </p>
                                <p class="font-extrabold text-[#15b400]">-$31.99</p>
                            </div>
                            <div class="flex justify-between border-t-1 border-gray-300 my-3 pt-3">
                                <p class="font-extrabold text-lg">Today's Price</p>
                                <p class="font-extrabold line-through text-lg">$48.00</p>
                            </div>
                            <div class="my-4">
                                <div class="text-start flex items-start"><input type="checkbox"
                                        class="cursor-pointer size-6" checked>
                                    <p class="font-bold text-xs ms-2">I do not want to receive exclusive
                                        content and promotion form
                                        this
                                        vendor, and do not share my personal information.</p>
                                </div>
                            </div>
                            <div class="my-4">
                                <div class="mb-2 flex justify-between">
                                    <p class="font-light text-sm">Subtotal</p>
                                    <p class="font-light line-through text-sm">$48.00</p>
                                </div>
                                <div class="mb-2 flex justify-between">
                                    <p class="font-light text-sm">Shipping & Handling</p>
                                    <p class="font-light line-through text-sm">$9.95</p>
                                </div>
                                <div class="mb-2 flex justify-between">
                                    <p class="font-light text-sm">Tax</p>
                                    <p class="font-light line-through text-sm">$0.00</p>
                                </div>
                                <div class="mb-2 flex justify-between">
                                    <p class="font-light text-sm">TOTAL</p>
                                    <p class="font-light line-through text-sm">$57.95</p>
                                </div>
                            </div>

                            <!-- for credit card -->
                            <p class="text-xs text-gray-500 font-semibold">By clicking Pay Now below, I agree to the
                                <NuxtLink href="#" class="underline text-blue-500"> Terms of Sale.</NuxtLink>
                            </p>

                            <button
                                class="cursor-pointer mt-4 mb-3 border-3 border-[#0400F4] bg-[#FFF500] text-[#003087] text-2xl extrablod rounded w-full py-3 px-4 text-center">Pay
                                Now</button>

                            <!-- for paypal -->
                            <p class="text-xs text-[#414141] font-semibold">By clicking Continue to PayPal below, I
                                agree to the <NuxtLink href="#" class="underline text-blue-500"> Terms of Sale.
                                </NuxtLink>
                            </p>

                            <button
                                class="cursor-pointer mt-4 mb-3 bg-[#ffcf66] text-[#003087] text-2xl extrablod rounded-lg w-full py-3 px-4 text-center flex gap-2 justify-center">Continue
                                to
                                <NuxtImg src="/images/paypal.svg" alt="" class="w-28" />
                            </button>

                            <NuxtImg src="/images/check-pay.png" alt="" class="w-full" />
                            <NuxtImg src="/images/searcure-icon.jpg" alt="" class="w-100 max-w-[70%] mx-auto my-3" />

                            <p class=""> <span class="font-bold text-[#0084ca]">You've made a great choice!</span> <br>
                                <span class="font-bold">Order now</span> before someone else <br>
                                grabs your discounted bags from you!
                            </p>
                        </div>
                        <NuxtImg src="/images/manage-deatils.jpg" alt=""
                            class="w-full mx-auto mt-0 mb-3 lg:mb-0 lg:mt-3" />
                        <!-- tab view -->
                        <NuxtImg src="/images/reviews.jpg" alt="" class="w-full mx-auto block lg:hidden" />
                    </div>
                </div>

            </div>

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