<script setup lang="ts">
import { goToCheckout } from '../../../composables/common';
import { onMounted, onUnmounted, ref } from 'vue'

// checking which checkout 
definePageMeta({
    middleware: 'check-params',
})

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

// Footer & CTA logic
const ctaBar = ref(null)
const footerRef = ref<HTMLElement | null>(null)
const footerHeight = ref(0)
const isFooterVisible = ref(false)

// Date logic
const formattedDate = ref('')

// onMounted
onMounted(() => {

    // Calculate date 5 days ago
    const today = new Date()
    const pastDate = new Date(today)
    pastDate.setDate(today.getDate() - 5)

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    formattedDate.value = pastDate.toLocaleDateString('en-US', options)

    // Mobile Screen: floating CTA button "Apply Discount & Check Availabiity"
    footerHeight.value = footerRef.value?.offsetHeight || 0

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                isFooterVisible.value = entry.isIntersecting
            })
        },
        { threshold: 0.1 }
    )

    if (footerRef.value) observer.observe(footerRef.value)

    onUnmounted(() => {
        if (footerRef.value) observer.unobserve(footerRef.value)
        observer.disconnect()

    })

    // firing evetn after 1 second of page load
    setTimeout(() => {
        launchEvent();
        // fbCAPI('viewContent');
    }, 1000);

})

</script>

<template>

    <section>

        <!-- Header -->
        <Header :desktopText="LANDING_1.header.desktopText" :mobileText="LANDING_1.header.mobileText"
            :pageName="LANDING_1.header.pageName" />

        <main>
            <!-- BodyContent -->
            <div class="max-w-4xl lg:py-6 py-4 mx-auto">

                <div class="lg:mx-2 mx-3 allpragra ph-fontsize">
                    <!-- Desktop version -->
                    <h1 class="hidden lg:block lg:text-4xl text-3xl extrablod lg:mr-10 mr-0">
                        7 Warning Signs Your 'Picky Eater' Has <br><span class="text-[#E6193C]"> Hidden Hunger</span>
                    </h1>
                    <p
                        class="hidden lg:block font-bold mt-2 none-pra text-[calc(1.5vw-0px)] lg:text-[24px] leading-[calc(1em+1vw)] italic">
                        Here's what smart moms are doing...</p>

                    <!-- Mobile version -->
                    <div class="block lg:hidden">
                        <h1
                            class="extrablod mr-0 text-[calc(9.5vw-0px)] sm:text-[calc(6vw-0px)] leading-[calc(1em+1vw)]">
                            7 Warning Signs <br class="block sm:hidden">Your 'Picky Eater'<br class="block sm:hidden">
                            Has
                            <span class="text-[#E6193C]"> Hidden Hunger</span>
                        </h1>
                        <p
                            class="font-bold mt-2 text-[calc(4.3vw-0px)] sm:text-[calc(3vw-0px)] leading-[calc(1em+1vw)] italic">
                            Here's what
                            smart
                            moms are doing...</p>
                    </div>

                    <p class="flex items-center gap-3 extrablod mt-3">
                        <img src="/images/star.svg" width="110" height="90" alt="star-img" />
                        <span class="font-bold">6,782 ratings</span>
                    </p>

                    <div class="flex gap-3 items-center py-4">
                        <img src="/images/sabrina.png" alt="sabrina.png-img" class="rounded-full w-15" />
                        <div>
                            <span class="extrablod flex">Sabrina Marshall
                                <img src="/images/check.png" width="22" height="23" alt="check.png-img" />
                            </span>
                            <span class="text-sm text-gray-600"> Last updated {{ formattedDate }}</span>
                        </div>
                    </div>

                    <div class="space-y-4 hidden lg:block">
                        <p>If your kid’s a picky eater, this article could be the <span class="extrablod">most important
                                thing</span> you ever read.</p>

                        <p>That’s because of a <span class="extrablod">secret</span> nobody tells you: </p>
                        <p class="extrablod">Being "picky" isn't a phase or behavior problem. </p>
                        <p>It’s your child's body sending <span class="extrablod text-[#E6193C]">warning shots.</span>
                            Something
                            urgent is up.</p>
                        <p>Research reveals that <span class="extrablod">up to 70%</span> of picky eaters have <span
                                class="extrablod italic">serious</span> nutrient gaps.</p>
                        <p>This <span class="extrablod">wrecks</span> everything from mood to immunity. </p>
                        <p>Sure, they get enough calories.</p>
                        <p>But they <span class="extrablod italic">don’t</span> get the vital nutrients needed for
                            growth
                            and
                            development.</p>
                        <p>This is <span class="extrablod">"Hidden Hunger"</span>.</p>
                        <p>Nearly <span class="underline italic">3 billion</span> people suffer from it.</p>
                        <p>Including <span class="extrablod">tens of millions</span> of Americans.</p>
                        <p>The good news?</p>
                        <p>Once you know the <span class="extrablod text-[#E6193C]">red flags,</span> you can get the
                            relief
                            you
                            both deserve.</p>
                    </div>

                    <div class="space-y-4 lg:hidden">
                        <p>If your kid’s a picky eater, this article could be the <span class="extrablod">most important
                                thing</span> you ever read.</p>
                        <p>That’s because of a <span class="extrablod">secret</span> nobody tells you: </p>
                        <p class="extrablod">Being "picky" isn't a phase or behavior problem. </p>
                        <p>It’s your child's body sending <span class="extrablod text-[#E6193C]">warning shots.</span>
                            Something
                            urgent is up.</p>
                        <p>Research reveals that <span class="extrablod">up to 70%</span> of picky eaters have <span
                                class="extrablod">serious</span> nutrient gaps.</p>
                        <p>This <span class="extrablod">wrecks</span> everything from mood to immunity. </p>
                        <p>Sure, they get enough calories.</p>
                        <p>But they <span class="extrablod italic">don’t</span> get the vital nutrients needed for
                            growth
                            and
                            development.</p>
                        <p>This is <span class="extrablod">"Hidden Hunger"</span>.</p>
                        <p>Nearly <span class="underline italic">3 billion</span> people suffer from it.</p>
                        <p>Including <span class="extrablod">tens of millions</span> of Americans.</p>
                        <p>The good news?</p>
                        <p>Once you know the <span class="extrablod text-[#E6193C]">red flags,</span> you can get the
                            relief
                            you
                            both deserve.</p>
                    </div>

                    <!-- <hr class="lg:my-10 my-5 text-[#CCCCCC]"> -->
                    <div class="lg:my-15 my-7 block w-full"></div>

                    <!-- Column data 1 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>
                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(9vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    1. 3pm Energy
                                    Crash</h3>
                                <p
                                    class="mb-4 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)]">
                                    That makes
                                    <u><i>everyone</i></u> miserable
                                </p>
                            </div>

                            <img src="/images/p1-1.jpg" class="w-full rounded-xl" alt="p1-1.jpg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">1. 3pm Energy
                                Crash</h3>
                            <p
                                class="lg:block hidden mb-4 italic text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                That makes
                                <u><i>everyone</i></u> miserable
                            </p>
                            <div class="lg:space-y-4 space-y-2 lg:block hidden">
                                <p>One minute, it’s like they're shot <span class="extrablod">out of a cannon.</span>
                                </p>
                                <p>The next, there’s a <span class="extrablod">meltdown</span> over whose turn it is in
                                    the
                                    video game.</p>
                                <p>Sound familiar?</p>
                                <p>This isn't normal. It's an <span class="text-[#E6193C] extrablod">alarm bell.</span>
                                </p>

                                <p>When picky eaters eat just a few types of foods…</p>
                                <p>Their <span class="extrablod">blood sugar jitterbugs</span> like a zombie on meth.
                                </p>
                                <p>So <span class="extrablod">what</span> can you do if they don’t have steady fuel…?
                                </p>
                                <p>Here’s what <span class="extrablod">smart moms are discovering:</span></p>
                                <p>Filling these nutrition gaps on a <span class="extrablod italic">daily
                                        basis...</span>
                                </p>
                                <p>Helps balance those highs and lows.</p>
                                <p>You get calmer afternoons and happier families.</p>
                                <p>But how to get steady fuel? Especially from real nutrients…?</p>
                                <p>And in a way that they'll look forward to every day?</p>
                                <p>The answer might surprise you.</p>
                            </div>
                            <div class="lg:space-y-4 space-y-2 lg:hidden">
                                <p>One minute, it’s like they're shot <span class="extrablod">out of a cannon.</span>
                                </p>
                                <p>The next, there’s a <span class="extrablod">meltdown</span> over whose turn it is in
                                    the
                                    video game.</p>
                                <p>Sound familiar?</p>
                                <p>This isn't normal. It's an <span class="text-[#E6193C] extrablod">alarm bell.</span>
                                </p>

                                <p>When picky eaters eat just a few types of foods…</p>
                                <p>Their <span class="extrablod">blood sugar jitterbugs</span> like a zombie on meth.
                                </p>
                                <p>So <span class="extrablod">what</span> can you do if they don’t have steady fuel…?
                                </p>
                                <p>Here’s what <span class="extrablod">smart moms are discovering:</span></p>
                                <p>Filling these nutrition gaps on a <span class="extrablod italic">daily
                                        basis...</span>
                                </p>
                                <p>Helps balance those highs and lows.</p>
                                <p>You get calmer afternoons and happier families.</p>
                                <p>But how to get steady fuel? Especially from real nutrients…?</p>
                                <p>And in a way that they'll look forward to every day?</p>
                                <p>The answer might surprise you.</p>
                            </div>
                        </div>

                    </div>
                    <!-- Column data 2 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>

                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(10vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    2. Tummy Troubles </h3>
                                <p
                                    class="mb-4 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)]">
                                    <i>That never go
                                        away</i>
                                </p>
                            </div>

                            <img src="/images/p1-2.jpg" class="w-full rounded-xl" alt="p1-2.jpg-img" />
                        </div>

                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">2. Tummy Troubles</h3>
                            <p
                                class="lg:block hidden mb-4 italic text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                That Never
                                Go
                                Away</p>
                            <div class="lg:space-y-4 space-y-2 lg:block hidden">
                                <p>“My tummy hurts.”</p>
                                <p>“I’m gonna throw up.”</p>
                                <p>“Mom, I can’t <i>go.</i>”</p>
                                <p>If this is how your picky eater responds to <span class="extrablod">new foods…</span>
                                </p>
                                <p>It might be more than pickiness.</p>
                                <p>Limited diets <span class="extrablod">lack the fiber</span> and nutrients needed for
                                    healthy
                                    digestion.</p>
                                <p>Bread, mac & cheese, and chicken nuggets might be their favorites…</p>
                                <p>But that kind of rotation <span class="extrablod">wrecks</span> their gut health.</p>
                                <p>It’s not proper nutrition.</p>
                                <p>So their system <span class="extrablod">struggles to digest</span> their food.</p>
                                <p>That means chronic tummy aches. Irregular bowel movements. Tears on toilets.</p>
                                <p>Soon, they begin to <span class="extrablod">connect</span> eating with discomfort.
                                </p>
                                <p>Is it any wonder they become even <span class="extrablod italic">pickier?</span></p>
                            </div>
                            <div class="lg:space-y-4 space-y-2 lg:hidden">
                                <p>“My tummy hurts.”</p>
                                <p>“I’m gonna throw up.”</p>
                                <p>“Mom, I can’t <i>go.</i>”</p>
                                <p>If this is how your picky eater responds to <span class="extrablod">new foods…</span>
                                </p>
                                <p>It might be more than pickiness.</p>
                                <p>Limited diets <span class="extrablod">lack the fiber</span> and nutrients needed for
                                    healthy
                                    digestion.</p>
                                <p>Bread, mac & cheese, and chicken nuggets might be their favorites…</p>
                                <p>But that kind of rotation <span class="extrablod">wrecks</span> their gut health.</p>
                                <p>It’s not proper nutrition.</p>
                                <p>So their system <span class="extrablod">struggles to digest</span> their food.</p>
                                <p>That means chronic tummy aches. Irregular bowel movements. Tears on toilets.</p>
                                <p>Soon, they begin to <span class="extrablod">connect</span> eating with discomfort.
                                </p>
                                <p>Is it any wonder they become even <span class="extrablod italic">pickier?</span></p>

                            </div>
                        </div>

                    </div>
                    <!-- Column data 3 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>

                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(12vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    3. Mood Swings</h3>
                                <p
                                    class="mb-4 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)]">
                                    <i>From seemingly nowhere</i>
                                </p>
                            </div>

                            <img src="/images/p1-3.jpg" class="w-full rounded-xl" alt="p1-3.jpg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">3. Mood Swings
                            </h3>
                            <p
                                class="lg:block hidden mb-4 italic text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                From
                                seemingly
                                nowhere</p>
                            <div class="lg:space-y-4 space-y-2 hidden lg:block">
                                <p>Here's an overlooked scientific fact:</p>
                                <p class="extrablod">You can't feel good if your gut feels bad.</p>
                                <p>The connection between nutrition and mood is <span
                                        class="extrablod italic">real.</span>
                                </p>
                                <p>And picky eaters are <span class="italic underline">especially</span> at risk.</p>
                                <p>That’s because their brains <span class="extrablod">can't regulate emotions</span>
                                    well.
                                </p>
                                <p>Not without key nutrients.</p>
                                <p>Add <span class="extrablod">unstable blood sugar</span> from processed foods, and
                                    <span class="extrablod">extreme mood swings</span> are no surprise.
                                </p>
                                <p>That’s why things like vitamin C, fiber, and micronutrients are crucial. </p>
                                <p>So are <span class="extrablod">phytonutrients</span>. These are <span
                                        class="extrablod">plant-based</span> nutrients, such as polyphenols and
                                    flavonoids.
                                </p>
                                <p>And <span class="extrablod">research indicates</span> they’re key to brain, heart,
                                    and
                                    immune health.</p>
                                <p>But if you consume them every day.</p>
                                <p>
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">
                                        Once picky eaters get consistent nutrition,
                                    </a>
                                    those meltdowns decrease. Even
                                    disappear.
                                </p>
                                <p>That’s when dinnertime stops being stressful.</p>
                                <p>And becomes fun family time again.</p>
                            </div>
                            <div class="lg:space-y-4 space-y-2 lg:hidden">
                                <p>Here's an overlooked scientific fact:</p>
                                <p class="extrablod">You can't feel good if your gut feels bad.</p>
                                <p>The connection between nutrition and mood is <span
                                        class="extrablod italic">real.</span>
                                </p>
                                <p>And picky eaters are <span class="italic underline">especially</span> at risk.</p>
                                <p>That’s because their brains <span class="extrablod">can't regulate emotions</span>
                                    well.
                                </p>
                                <p>Not without key nutrients.</p>
                                <p>Add <span class="extrablod">unstable blood sugar</span> from processed foods, and
                                    <span class="extrablod">extreme mood swings</span> are no surprise.
                                </p>
                                <p>That’s why things like vitamin C, fiber, and micronutrients are crucial. </p>
                                <p>So are <span class="extrablod">phytonutrients</span>. These are <span
                                        class="extrablod">plant-based</span> nutrients, such as polyphenols and
                                    flavonoids.
                                </p>
                                <p>And <span class="extrablod">research indicates</span> they’re key to brain, heart,
                                    and
                                    immune health.</p>
                                <p>But if you consume them every day.</p>
                                <p><a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">
                                        Once picky eaters get consistent nutrition,
                                    </a>
                                    those meltdowns decrease. Even
                                    disappear.</p>
                                <p>That’s when dinnertime stops being stressful.</p>
                                <p>And becomes fun family time again.</p>
                            </div>
                        </div>

                    </div>
                    <!-- Column data 4 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>
                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(12vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    4. Always Sick</h3>
                                <p
                                    class="mb-4 mt-2 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)] lg:hidden">
                                    While
                                    other
                                    kids never are...
                                </p>
                            </div>

                            <img src="/images/p1-4.jpg" class="w-full rounded-xl" alt="p1-4.jpg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">4. Always Sick </h3>
                            <p
                                class="lg:block hidden mb-4 italic text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                While
                                other
                                kids never
                                are</p>
                            <div class="lg:space-y-4 space-y-2 lg:block hidden">
                                <p>Constant sniffles. Hacking coughs. Feeling run down.</p>
                                <p>Is your picky eater always <span class="extrablod">under the weather?</span></p>
                                <p>Could be their immune system <span class="extrablod text-[#E6193C]">out of
                                        whack.</span>
                                    Limited diets make it <span class="extrablod">hard</span> to build strong immunity.
                                </p>
                                <p>Because of a lack of vitamins like A, C, and D…</p>
                                <p>Meanwhile,
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">kids
                                        with
                                        strong immune systems
                                    </a>
                                    stay well or <span class="extrablod">bounce
                                        back</span>
                                    quickly when sick.
                                </p>
                                <p><span class="extrablod italic">Worse,</span> they stay sick longer.</p>
                                <p>But not picky eaters. They tend to be sick more frequently. </p>
                                <p>The Hidden Hunger connection?</p>
                                <p>Without getting the necessary nutrients every day...</p>
                                <p>Their poorly-armed bodies <span class="extrablod">can't defend</span> against
                                    everyday
                                    germs and viruses.</p>
                                <p>That’s why they're the ones <span class="extrablod">missing school days.</span></p>
                                <p>Or <span class="extrablod">keeping everyone up at night.</span></p>

                            </div>
                            <div class="lg:space-y-4 space-y-2 lg:hidden">
                                <p>Constant sniffles. Hacking coughs. Feeling run down.</p>
                                <p>Is your picky eater always <span class="extrablod">under the weather?</span></p>
                                <p>Could be their immune system <span class="extrablod text-[#E6193C]">out of
                                        whack.</span>
                                    Limited diets make it <span class="extrablod">hard</span> to build strong immunity.
                                </p>
                                <p>Because of a lack of vitamins like A, C, and D…</p>
                                <p>Meanwhile,
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">kids
                                        with
                                        strong immune systems
                                    </a>
                                    stay well or <span class="extrablod">bounce
                                        back</span>
                                    quickly when sick.
                                </p>
                                <p>But not picky eaters. They tend to be sick more frequently. </p>
                                <p><span class="extrablod italic">Worse,</span> they stay sick longer.</p>
                                <p>The Hidden Hunger connection?</p>
                                <p>Without getting the necessary nutrients every day...</p>
                                <p>Their poorly-armed bodies <span class="extrablod">can't defend</span> against
                                    everyday
                                    germs and viruses.</p>
                                <p>That’s why they're the ones <span class="extrablod">missing school days.</span></p>
                                <p>Or <span class="extrablod">keeping everyone up at night.</span></p>
                            </div>
                        </div>

                    </div>
                    <!-- Column data 5 -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>
                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(8.7vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    5. Attention Problems </h3>
                                <p
                                    class="mb-4 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)] lg:hidden">
                                    That
                                    <u>aren't</u> ADHD
                                </p>
                            </div>

                            <img src="/images/p2-4.jpg" class="w-full rounded-xl" alt="p2-4.jpg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">5. Attention Problems</h3>
                            <p
                                class="lg:block hidden mb-4 italic text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                That
                                <u>aren't</u> ADHD
                            </p>
                            <div class="lg:space-y-4 space-y-2 lg:block hidden">
                                <p><span class="extrablod">Spacing out</span> in class.</p>
                                <p>Math homework now taking an hour instead of 30 minutes.</p>
                                <p>Bored with anything new after 5 minutes.</p>
                                <p><span class="extrablod">Brain fog</span> isn’t normal. It's a <span
                                        class="extrablod text-[#E6193C]">warning sign. </span></p>
                                <p>It means their developing brains aren't getting the fuel they need.</p>
                                <p>Antioxidants and vitamins like C and D are <span class="extrablod">crucial</span> for
                                    concentration and focus.</p>
                                <p>That's why nutrient-dense foods like fish and leafy greens are so important. </p>
                                <p>Otherwise, the brain's <span class="extrablod">running on empty.</span></p>
                                <p>But when they increase their daily nutrition intake...</p>
                                <p>And keep it up so those nutrient levels remain high...</p>
                                <p>
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">Kids
                                        can
                                        show dramatic reversals.
                                    </a>
                                </p>
                                <p>Improved attention span. Better memory.</p>
                                <p>The child who couldn't sit still for 5 minutes…?</p>
                                <p>Now finishes homework in one sitting.</p>
                            </div>
                            <div class="lg:space-y-4 space-y-2 lg:hidden">
                                <p><span class="extrablod">Spacing out</span> in class.</p>
                                <p>Math homework now taking an hour instead of 30 minutes.</p>
                                <p>Bored with anything new after 5 minutes.</p>
                                <p><span class="extrablod">Brain fog</span> isn’t normal. It's a <span
                                        class="extrablod text-[#E6193C]">warning sign. </span></p>
                                <p>It means their developing brains aren't getting the fuel they need.</p>
                                <p>Antioxidants and vitamins like C and D are <span class="extrablod">crucial</span> for
                                    concentration and focus.</p>
                                <p>That's why nutrient-dense foods like fish and leafy greens are so important. </p>
                                <p>Otherwise, the brain's <span class="extrablod">running on empty.</span></p>
                                <p>But when they increase their daily nutrition intake...</p>
                                <p>And keep it up so those nutrient levels remain high...</p>
                                <p>
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">Kids
                                        can show dramatic reversals.
                                    </a>
                                </p>
                                <p>Improved attention span. Better memory.</p>
                                <p>The child who couldn't sit still for 5 minutes…?</p>
                                <p>Now finishes homework in one sitting.</p>
                            </div>
                        </div>

                    </div>
                    <!-- Column data 6 -->

                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>

                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(10.5vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    6. Sleep Problems </h3>
                                <p
                                    class="mb-4 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)]">
                                    And other nighttime battles
                                </p>
                            </div>

                            <img src="/images/p1-6.jpg" class="w-full rounded-xl" alt="p1-6.jpg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">6. Sleep Problems</h3>
                            <p
                                class="lg:block hidden italic mb-4 text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                And other
                                nighttime battles</p>
                            <div class="lg:space-y-4 space-y-2">
                                <!-- <p class="extrablod hidden lg:block ">Trouble falling asleep, frequent wake-ups, or waking up
                            tired
                        </p> -->

                                <div class="hidden lg:block lg:space-y-4 space-y-2">
                                    <p>Meltdowns at bedtime.</p>
                                    <p>Trouble falling asleep.</p>
                                    <p>Frequent wake-ups.</p>
                                    <p>Waking up tired.</p>
                                    <p>All <span class="extrablod text-[#E6193C]">possible signs</span> of Hidden
                                        Hunger.
                                    </p>
                                    <p>Energy crashes <span class="extrablod">don't stop</span> just because it’s
                                        bedtime.
                                    </p>
                                    <p>Especially if they eat processed foods and sugary snacks between lunch and going
                                        to
                                        bed.
                                    </p>
                                    <p>Their <span class="extrablod">blood sugar levels</span> go on a roller coaster
                                        ride
                                        that
                                        lasts deep into the night.</p>
                                    <p>The fact is…</p>
                                    <p>Nutrients play <span class="extrablod">crucial roles</span> in sleep regulation.
                                    </p>
                                    <p>Notably, vitamin D, antioxidants, and fiber all help <span
                                            class="extrablod">stabilize
                                            blood sugar</span> for better sleep.</p>
                                    <p>
                                        <a @click="() => goToCheckout('lp1')"
                                            class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">
                                            With consistent nutrition,
                                        </a>
                                        bedtime battles decrease.
                                    </p>
                                    <p> And better sleep <span class="extrablod">increases.</span></p>
                                </div>

                                <div class="lg:hidden lg:space-y-4 space-y-2">
                                    <p>Meltdowns at bedtime.</p>
                                    <p>Trouble falling asleep.</p>
                                    <p>Frequent wake-ups.</p>
                                    <p>Waking up tired.</p>
                                    <p>All <span class="extrablod text-[#E6193C]">possible signs</span> of Hidden
                                        Hunger.
                                    </p>
                                    <p>Energy crashes <span class="extrablod">don't stop</span> just because it’s
                                        bedtime.
                                    </p>
                                    <p>Especially if they eat processed foods and sugary snacks between lunch and going
                                        to
                                        bed.
                                    </p>
                                    <p>Their <span class="extrablod">blood sugar levels</span> go on a roller coaster
                                        ride
                                        that
                                        lasts deep into the night.</p>
                                    <p>The fact is…</p>
                                    <p>Nutrients play <span class="extrablod">crucial roles</span> in sleep regulation.
                                    </p>
                                    <p>Notably, vitamin D, antioxidants, and fiber all help <span
                                            class="extrablod">stabilize
                                            blood sugar</span> for better sleep.</p>
                                    <p>
                                        <a @click="() => goToCheckout('lp1')"
                                            class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">With
                                            consistent nutrition,
                                        </a>
                                        bedtime battles decrease.
                                    </p>
                                    <p> And better sleep <span class="extrablod">increases.</span></p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <!-- Column data 7 -->

                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>

                            <div class="lg:hidden block">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(9.5vw-0px)] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    7. "Failure to Thrive" </h3>
                                <p
                                    class="mb-4 italic text-[calc(5.4vw-0px)] sm:text-[calc(2.7vw-0px)] leading-[calc(1em+1vw)] lg:hidden">
                                    The warning everyone's missing...</p>
                            </div>

                            <img src="/images/p1-7.jpg" class="w-full rounded-xl" alt="p1-7.jpg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod lg:block hidden leading-9">7. "Failure to Thrive"</h3>
                            <p
                                class="lg:block hidden mb-4 italic text-[calc(1.2vw-0px)] lg:text-[18px] leading-[calc(1em+1vw)]">
                                The warning everyone's missing...</p>
                            <div class="lg:space-y-4 space-y-2 lg:block hidden">
                                <p>Here's a scary truth:</p>
                                <p class="extrablod">Malnutrition doesn't always look skinny.</p>
                                <p>Many picky eaters are actually <span
                                        class="extrablod"><u><i>over</i></u>weight</span>
                                </p>
                                <p>Because they eat too many processed calories. It leaves them <span
                                        class="extrablod">undernourished.</span></p>
                                <p>They aren’t growing at expected rates.</p>
                                <p> Or, they<span class="extrablod italic">are</span>
                                    growing, but look pale and haggard.</p>
                                <p>Research shows that <span class="extrablod">31% of picky eaters</span> receive a
                                    "failure
                                    to
                                    thrive" diagnosis. </p>
                                <p>They get enough calories.</p>
                                <p>But <span class="extrablod italic">not enough</span> of the building blocks their
                                    bodies
                                    need
                                    to grow.</p>
                                <p>In other words, Hidden Hunger is <span class="extrablod">wrecking their
                                        health.</span>
                                </p>
                                <p>The most heartbreaking part?</p>
                                <p>Parents blame themselves for "not trying hard enough"... </p>
                                <p>When Hidden Hunger is the <span class="extrablod italic">real</span> issue.</p>
                                <p>That all stops
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">with
                                        better
                                        nutrition.
                                    </a>
                                </p>
                                <p class="underline italic">Every single day.</p>

                            </div>

                            <div class="lg:space-y-4 space-y-2 lg:hidden">
                                <p>Here's a scary truth:</p>
                                <p class="extrablod">Malnutrition doesn't always look skinny.</p>
                                <p>Many picky eaters are actually <span
                                        class="extrablod"><u><i>over</i></u>weight</span>
                                </p>
                                <p>Because they eat too many processed calories. It leaves them <span
                                        class="extrablod">undernourished.</span></p>
                                <p>They aren’t growing at expected rates.</p>
                                <p> Or, they<span class="extrablod italic">are</span>
                                    growing, but look pale and haggard.</p>
                                <p>Research shows that <span class="extrablod">31% of picky eaters</span> receive a
                                    "failure
                                    to
                                    thrive" diagnosis. </p>
                                <p>They get enough calories.</p>
                                <p>But <span class="extrablod italic">not enough</span> of the building blocks their
                                    bodies
                                    need
                                    to grow.</p>
                                <p>In other words, Hidden Hunger is <span class="extrablod">wrecking their
                                        health.</span>
                                </p>
                                <p>The most heartbreaking part?</p>
                                <p>Parents blame themselves for "not trying hard enough"... </p>
                                <p>When Hidden Hunger is the <span class="extrablod italic">real</span> issue.</p>
                                <p>That all stops
                                    <a @click="() => goToCheckout('lp1')"
                                        class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">with
                                        better
                                        nutrition.
                                    </a>
                                </p>
                                <p class="underline italic">Every single day.</p>
                            </div>
                        </div>

                    </div>
                    <!-- Column data 8 -->

                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>

                            <div class="lg:hidden block mb-4">
                                <h3
                                    class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(10vw-0px)] sm:text-[calc(5.7vw-0px)] leading-[calc(1em+1vw)]">
                                    What Smart Moms Are Doing About It</h3>
                            </div>
                            <img src="/images/p1-8.jpeg" class="w-full rounded-xl" alt="p1-8.jpeg-img" />
                        </div>
                        <div>
                            <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">What Smart Moms Are Doing
                                About It
                            </h3>
                            <div class="lg:space-y-4 space-y-2">
                                <p>If you recognize your child in these warning signs, <span class="extrablod">you're
                                        not
                                        alone.</span></p>
                                <p>And you're not failing as a mom.</p>
                                <p>The system is failing <span class="extrablod italic">you.</span></p>
                                <p>Millions of families deal with picky eating. </p>
                                <p>But the solution <span class="extrablod">isn't</span>
                                    forcing more vegetables on them (it usually backfires anyway).</p>
                                <p>The <span class="extrablod">breakthrough</span> approach?
                                </p>
                                <p>"Fill the nutrition gaps first," says Dr. Pam, a nutrition expert who's
                                    board-certified
                                    in internal medicine.</p>
                                <p>"Then watch eating habits naturally improve.</p>
                                <p>"After that, watch them improve in every way as they continue getting good nutrients
                                    every day.</p>
                                <p class="extrablod">"That's why there's Yumzy."</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                        <div>

                            <div class="lg:hidden block mb-4">
                                <div class="block sm:hidden">
                                    <h3
                                        class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(11vw-0px)] leading-[calc(1em+1vw)]">
                                        Yumzy. <u><i>Not</i></u> Your</h3>
                                    <h3
                                        class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(11vw-0px)] leading-[calc(1em+1vw)]">
                                        Typical Gummy.</h3>
                                </div>
                                <h3
                                    class="hidden sm:block extrablod mb-0 sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]">
                                    Yumzy. <u><i>Not</i></u> Your
                                    Typical
                                    Gummy.</h3>
                            </div>
                            <img src="/images/p1-9.jpg" class="w-full rounded-xl" alt="p1-9.jpg-img" />
                            <p class="lg:mt-2 lg:ml-2"><span class=" text-gray-700 text-sm italic">Dr. Pam with Yumzy
                                    co-founder Nastya</span></p>
                        </div>
                        <div class="lg:space-y-4 space-y-2">
                            <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">Yumzy. <u><i>Not</i></u> Your
                                Typical
                                Gummy.</h3>

                            <p><span class="extrablod">Dr.-recommended. Kid-approved.</span></p>
                            <p>Yumzy is a family supplement brand co-founded by social media superstar Nastya, of
                                YouTube’s
                                biggest kid series <i>Like Nastya.</i></p>
                            <p>When Nastya heard about Hidden Hunger, she was concerned.</p>
                            <p>Many of her nearly <span class="extrablod">400 million followers</span> might be
                                suffering.
                            </p>
                            <p>So with the help of nutrition expert Dr. Pam, Nastya helped create Yumzy's best-selling
                                products:</p>
                            <p class="extrablod">YOMZ OG Gummies.</p>
                            <p>It’s not candy. <i>But it tastes like it...</i></p>
                            <p>Even with all its <span class="extrablod">vitamins, antioxidants, micronutrients, and 5g
                                    of
                                    fiber.</span></p>
                            <p>Each serving delivers the phytonutritional equal of <span class="extrablod">2
                                    servings</span>
                                of fruits and vegetables.</p>
                            <p>Yumzy YOMZ Gummies are a tasty treat kids ask for instead of fight over.</p>
                            <p>That’s because of 3 <i>mouthwatering</i> flavors:</p>
                            <ul class="lg:pl-2 lg:space-y-4 space-y-2">
                                <li class="flex gap-2 items-center">
                                    <img src="/images/blk-check.svg" width="20" height="20" alt="blk-check.svg" />
                                    Strawbeary
                                </li>
                                <li class="flex gap-2 items-center">
                                    <img src="/images/blk-check.svg" width="20" height="20" alt="blk-check.svg" /> Beary
                                    Berry
                                </li>
                                <li class="flex gap-2 items-center">
                                    <img src="/images/blk-check.svg" width="20" height="20" alt="blk-check.svg" />
                                    Peachy
                                </li>
                            </ul>
                            <p>All <span class="italic underline">without</span> artificial dyes, flavors, or other
                                harmful
                                junk.</p>
                            <!-- <p>YOMZ was co-developed by YouTube star Nastya (whose 380+ million young fans know about
                            sweets).</p> -->
                            <p>Backed by Dr. Pam, Nastya helped create Yumzy with this mission:</p>
                            <p class="extrablod">End Hidden Hunger for 100 million people.</p>
                            <p>And with your help, I bet they will.</p>
                            <p>Especially since a portion of each order goes directly toward... </p>
                            <p>Helping fight Hidden Hunger for kids and families in need.</p>
                            <p class="italic underline">With daily use, the results speak for themselves:</p>
                            <ul class="lg:pl-2 lg:space-y-4 space-y-2">
                                <li class="flex gap-2 items-start md:items-center">
                                    <img class="min-w-5" src="/images/blk-check.svg" alt="blk-check.svg-img" width="20"
                                        height="20" />
                                    5g fiber can improve gut bacteria in ~2 weeks
                                </li>
                                <li class="flex gap-2 items-start md:items-center">
                                    <img class="min-w-5" src="/images/blk-check.svg" alt="blk-check.svg-img" width="20"
                                        height="20" />
                                    Vitamin D levels rise in 1–3 months
                                </li>
                                <li class="flex gap-2 items-start md:items-center">
                                    <img class="min-w-5" src="/images/blk-check.svg" alt="blk-check.svg-img" width="20"
                                        height="20" />
                                    Vitamins K2 + D3 start helping bones in 2-6 months
                                </li>
                                <li class="flex gap-2 items-start md:items-center">
                                    <img class="min-w-5" src="/images/blk-check.svg" alt="blk-check.svg-img" width="20"
                                        height="20" />
                                    Vitamin C can help shorten colds by a few days
                                </li>
                            </ul>
                            <p>Plus, your order of YOMZ Gummies is backed by Yumzy's famous
                                <a @click="() => goToCheckout('lp1')"
                                    class="text-blue-600 hover:text-red-500 extrablod cursor-pointer">90-Day
                                    200%
                                    Happiness Guarantee.
                                </a>
                            </p>

                            <p>Yes, there's no risk for you.</p>
                            <p>If your child doesn't love them ...</p>
                            <p>Or you don't see improvements in 90 days, you get double your money back.</p>
                        </div>
                    </div>

                    <!-- Column data 2 -->

                    <div
                        class="border-1 lg:border-[#1EB9F0] border-[#fff] rounded-xl lg:p-5 p-0 lg:mt-20 mt-15 relative">

                        <!-- <a @click="() => goToCheckout('lp1')"
                            class="flex justify-center w-full h-full bg-[#0AA03C] lg:hidden  rounded-full  extrablod text-white p-3 lg:text-xl text-3xl capitalize">
                            Apply Discount & Check Availabiity
                        </a> -->

                        <a href="https://get.yumzy.com/checkout-2-a/"
                            class="hidden lg:block bg-[#0AA03C] text-white absolute -top-5 py-2 w-fit px-5 left-0 right-0 mx-auto extrablod lg:text-lg text-base text-center"
                            target="_blank">
                            Apply Discount & <br class="block md:hidden"> Check Availabiity
                        </a>

                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 items-center">

                            <div>
                                <img src="/images/yomz-double-pack.jpg" alt="yomz-double-pack.jpg-img"
                                    class="hidden lg:block w-full lgp-3 p-1 lg:pt-3 pt-6" />
                                <img src="/images/yomz-double-pack.jpg" alt="yomz-double-pack.jpg-img"
                                    class="lg:hidden w-full lgp-3 p-1 lg:pt-3 pt-6" />
                            </div>

                            <div
                                class="text-center lg:space-y-4 space-y-2 border-1 lg:border-[#fff] border-[#1EB9F0] lg:p-0 p-2 lg:py-5 py-8 ">
                                <h4 class="lg:text-3xl text-2xl extrablod">Ready to end the daily dinner battles and
                                    give your picky eater nutrition they’ll actually beg for?</h4>
                                <p>Join the thousands of smart moms just like you who've discovered the secret of Yumzy.
                                    It's filling the gaps with nutrition that tastes like it's bad for you.</p>

                                <a @click="() => goToCheckout('lp1')"
                                    ref="footerRef" class="flex justify-center w-full h-full bg-[#0AA03C]  rounded-full extrablod text-white p-3 lg:text-xl text-2xl leading-[calc(1em+1vw)] capitalize cursor-pointer">
                                    Apply Discount & <br class="block md:hidden"> Check Availabiity
                                </a>

                                <p class="bg-[#F7F8EA] risk">Sell Out Risk: <span class="text-[#E6193C]">HIGH</span> |
                                    Inventory:
                                    <span class="text-[#E6193C]">LOW</span>
                                </p>

                                <p class="uppercase extrablod">Because your family deserves to feel better.</p>

                            </div>

                        </div>

                    </div>

                    <!-- Footer Links -->
                    <div class="lg:text-md text-sm sources-text flex flex-col">
                        <p class="extrablod lg:mt-20 mt-5">Sources:</p>
                        <a v-for="(link, index) in footerLinks.LANDING_1" :key="index" :href="link" target="_blank"
                            rel="noopener noreferrer" class="hover:underline break-all italic w-fit">
                            {{ link }}
                        </a>
                    </div>

                </div>
            </div>

        </main>

        <!-- BodyContent -->
        <div>
            <!-- Your footer -->
            <footer class="bg-[#1EB9F0] lg:py-7 py-3">
                <div class="mx-auto max-w-5xl text-center">
                    <img src="/images/logo.png" alt="logo.png-img" class="max-w-30 mx-auto mb-4" />
                    <p class="text-white lg:text-lg text-sm hidden lg:block">
                        By filling out the field, you consent for YOMZ™ to use automated technology,
                        including texts and prerecorded messages, to contact you at the number and
                        email provided about YOMZ™ offers.
                    </p>

                    <p class="text-white lg:text-lg text-sm lg:hidden">
                        *These statements have not been evaluated by the Food and Drug Administration.
                        This product is not intended to diagnose, treat, cure or prevent any disease.
                    </p>
                </div>
            </footer>

            <!-- Floating CTA button in mobile screen -->
            <div ref="ctaBar" :class="[
                'flex items-center justify-center lg:hidden transition-all duration-300 z-50',
                isFooterVisible ? 'absolute' : 'fixed'
            ]" :style="{ bottom: isFooterVisible ? `${footerHeight}px` : '1rem', left: 0, right: 0 }">
                <a @click="() => goToCheckout('lp1')"
                    class="mx-5 flex justify-center w-full h-full bg-[#0AA03C] rounded-full extrablod text-white p-3 lg:text-xl text-2xl leading-[calc(1em+1vw)] capitalize cursor-pointer">
                    Apply Discount & <br class="block md:hidden"> Check Availabiity
                </a>
            </div>
        </div>

        <!-- PopUp -->
        <!-- <PopUp v-if="popUp" /> -->
    </section>
</template>