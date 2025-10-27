<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Footer & CTA logic
const footerRef = ref(null)
const ctaBar = ref(null)
const isFooterVisible = ref(false)
const footerHeight = ref(0)

// Date logic
const formattedDate = ref('')

onMounted(() => {
    // Calculate date 5 days ago
    const today = new Date()
    const pastDate = new Date(today)
    pastDate.setDate(today.getDate() - 5)

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    formattedDate.value = pastDate.toLocaleDateString('en-US', options)

    // Footer observer logic
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
    })
})

// meta tag details
useHead({
    title: LANDING_2.meta.title,
    meta: [
        { name: 'description', content: LANDING_2.meta.description },
        { property: 'og:title', content: LANDING_2.meta.title },
        { property: 'og:description', content: LANDING_2.meta.description },
        { property: 'og:image', content: LANDING_2.meta.ogImage },
    ],
})
</script>

<template>

    <!-- Header -->
    <Header :desktopText="LANDING_2.header.desktopText" :mobileText="LANDING_2.header.mobileText"
        :pageName="LANDING_2.header.pageName" />

    <!-- BodyContent -->
    <main>
        <div class="max-w-4xl lg:py-6 py-4 mx-auto">

            <div class="lg:mx-2 mx-3 allpragra ph-fontsize">
                <h1 class="lg:text-4xl text-3xl extrablod lg:mr-10 mr-0"></h1>

                <!-- Desktop version -->
                <h1 class="hidden lg:block lg:text-4xl text-3xl extrablod lg:mr-10 mr-0">
                    8 <u><i>Hidden</i></u> Reasons for Child <span class="text-[#E6193C] ">Meltdowns</span>
                </h1>
                <p class="hidden lg:block font-bold mt-2 text-[calc(1.5vw-0px)] leading-[calc(1em+1vw)] italic">Doctor
                    confirms it's not
                    bad parenting...</p>

                <!-- Mobile version -->
                <div class="block lg:hidden">
                    <h1 class="extrablod mr-0 text-[calc(8.5vw-0px)] leading-[calc(1em+1vw)]">
                        8 <u><i>Hidden</i></u> Reasons for Child <span class="text-[#E6193C] ">Meltdowns</span></h1>
                    <p class="font-bold mt-2 text-[calc(4.3vw-0px)] leading-[calc(1em+1vw)] italic">Doctor confirms it's
                        not bad parenting...</p>
                </div>

                <p class="flex items-center gap-3 extrablod mt-3">
                    <NuxtImg src="/images/star.svg" width="110" height="20" alt="star.svg-img" />
                    <span class="font-bold">6,782 ratings</span>
                </p>

                <div class="flex gap-3 items-center py-4">
                    <NuxtImg src="/images/person.png" alt="person.png-img" class="rounded-full w-15" />
                    <div>
                        <span class="extrablod flex">Sabrina Marshall
                            <NuxtImg src="/images/check.png" width="22" height="23" alt="check.png-img" />
                        </span>
                        <span class="text-sm text-gray-600"> Last updated {{ formattedDate }}</span>
                    </div>
                </div>
                <div class="space-y-4 hidden lg:block">
                    <p>You've tried <span class="extrablod italic">everything</span>.</p>
                    <p>Time outs. Grounding. Taking away privileges. Extra chores. Even stern talks.</p>
                    <p>Even the <span class="extrablod">taboo of spanking</span> may have crossed your mind…</p>
                    <p>That's how desperate things are.</p>
                    <p>But you’ve <span class="extrablod">run out of answers</span> on how to fix your kid’s behavior.
                    </p>
                    <p>No matter what you've tried, nothing’s changed.</p>
                    <p>Here’s the scientific <u>truth:</u></p>
                    <p>Scientists have found that up to 90% of serotonin (your "happy hormone") comes from the gut, not
                        the
                        brain.</p>
                    <p class="extrablod">So you can't feel good if your gut feels bad.</p>
                    <p>Because of our modern farming practices and food culture...</p>
                    <p>Even "healthy" meals are <span class="extrablod">missing key nutrients.</span></p>
                    <p>Without proper nutrition, gut health suffers. </p>
                    <p>And mood <span class="extrablod">pays the price.</span></p>
                </div>

                <div class="space-y-4 lg:hidden">

                    <p>You've tried <span class="extrablod italic">everything</span>.</p>
                    <p>Time outs. Grounding. Taking away privileges. Extra chores. Even stern talks.</p>
                    <p>Even the <span class="extrablod">taboo of spanking</span> may have crossed your mind…</p>
                    <p>That's how desperate things are.</p>
                    <p>But you’ve <span class="extrablod">run out of answers</span> on how to fix your kid’s behavior.
                    </p>
                    <p>No matter what you've tried, nothing’s changed.</p>
                    <p>Here’s the scientific <u>truth:</u></p>
                    <p>Scientists have found that up to 90% of serotonin (your "happy hormone") comes from the gut, not
                        the
                        brain.</p>
                    <p class="extrablod">So you can't feel good if your gut feels bad.</p>
                    <p>Because of our modern farming practices and food culture...</p>
                    <p>Even "healthy" meals are <span class="extrablod">missing key nutrients.</span></p>
                    <p>Without proper nutrition, gut health suffers. </p>
                    <p>And mood <span class="extrablod">pays the price.</span></p>

                </div>

                <hr class="lg:my-10 my-5">

                <!-- Column data 1 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            1. "Hangry" Meltdowns</h3>
                        <NuxtImg src="/images/p1-3.jpg" alt="p1-3.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">1. "Hangry" Meltdowns
                        </h3>
                        <div class="space-y-4 lg:hidden">
                            <p class="lg:hidden">You know the vibe: </p>
                            <p class="lg:hidden">Your kids are happy. They’re playing and getting along. </p>
                            <p class="lg:hidden">Everything’s smooth. </p>
                            <p class="lg:hidden"><span class="extrablod">Next thing</span> you know, they're
                                <i><u>screaming</u></i> over the
                                wrong color cup.
                            </p>

                            <p class="lg:hidden">From feeling fine to full meltdown in a snap.</p>
                            <p class="lg:hidden">If it happens when they're hungry, you're witnessing the <span
                                    class="extrablod">gut-brain connection</span> in action.</p>
                            <p class="lg:hidden">Sugary snacks and processed meals make those blood sugar crashes hit
                                <span class="extrablod italic">hard.</span>
                            </p>
                            <p class="lg:hidden">But here's a secret:</p>
                            <p class="lg:hidden">Those dramatic mood swings aren't about being "hangry."</p>

                            <p class="lg:hidden">It’s an unhealthy gut that can't regulate <span class="extrablod">blood
                                    sugar</span> well.
                            </p>
                            <p class="lg:hidden">Or produce the calming neurotransmitters <span
                                    class="extrablod">needed</span> to handle frustration.</p>
                            <p class="lg:hidden">The result? </p>
                            <p class="lg:hidden">Explosive overreactions to minor problems.</p>
                            <p class="lg:hidden">That’s why filling nutrition gaps is so <span
                                    class="extrablod">crucial.</span></p>

                        </div>
                        <div class="lg:space-y-4 hidden lg:block">
                            <p>You know the vibe: </p>
                            <p>Your kids are happy. They’re playing and getting along. </p>
                            <p>Everything’s smooth. </p>
                            <p><span class="extrablod">Next thing</span> you know, they're
                                <i><u>screaming</u></i> over the
                                wrong color cup.
                            </p>

                            <p>From feeling fine to full meltdown in a snap.</p>
                            <p>If it happens when they're hungry, you're witnessing the <span
                                    class="extrablod">gut-brain
                                    connection</span> in action.</p>
                            <p>Sugary snacks and processed meals make those blood sugar crashes hit <span
                                    class="extrablod italic">hard.</span> </p>
                            <p>But here's a secret:</p>
                            <p>Those dramatic mood swings aren't about being "hangry."</p>

                            <p>It’s an unhealthy gut that can't regulate <span class="extrablod">blood
                                    sugar</span> well.
                            </p>
                            <p>Or produce the calming neurotransmitters <span class="extrablod">needed</span> to handle
                                frustration.</p>
                            <p>The result? </p>
                            <p>Explosive overreactions to minor problems.</p>
                            <p>That’s why filling nutrition gaps is so <span class="extrablod">crucial.</span></p>

                        </div>
                    </div>

                </div>
                <!-- Column data 2 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            2. Morning Grumpiness</h3>
                        <NuxtImg src="/images/p2-2.jpg" alt="p2-2.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">2. Morning Grumpiness</h3>
                        <div class="lg:space-y-4 space-y-2 lg:hidden">
                            <p>Is anyone in your family <span class="extrablod">grouchy</span> in the
                                mornings? </p>
                            <p>Could be their gut was in turmoil all night.</p>
                            <p>That's because poor gut health <span class="extrablod">disrupts</span> sleep
                                quality.</p>
                            <p>It leaves you exhausted and irritable.</p>
                            <p>Even after a full night's “rest”.</p>
                            <p>Combine that with sugary cereal for breakfast? A recipe for a <span
                                    class="extrablod">ticking
                                    time bomb.</span> </p>
                            <p>Why? Because it spikes blood sugar. Then comes the crash.</p>
                            <p>And it ruins your kid's day.</p>
                            <p>Their gut <span class="extrablod">struggles to process</span> all that
                                crap.</p>
                            <p>This creates inflammation that <span class="extrablod italic">directly
                                    affects</span> the brain.</p>
                            <p>They wake up cranky and stay that way <span class="extrablod">for
                                    hours.</span></p>
                            <p>But with <span class="extrablod">better nutrition</span> to start the
                                day...</p>
                            <p>Those morning battles <span class="extrablod">disappear.</span></p>
                        </div>
                        <div class="lg:space-y-4 space-y-2 hidden lg:block">
                            <p>Is anyone in your family <span class="extrablod">grouchy</span> in the
                                mornings? </p>
                            <p>Could be their gut was in turmoil all night.</p>
                            <p>That's because poor gut health <span class="extrablod">disrupts</span> sleep
                                quality.</p>
                            <p>It leaves you exhausted and irritable.</p>
                            <p>Even after a full night's “rest”.</p>
                            <p>Combine that with sugary cereal for breakfast? A recipe for a <span
                                    class="extrablod">ticking
                                    time bomb.</span> </p>
                            <p>Why? Because it spikes blood sugar. Then comes the crash.</p>
                            <p>And it ruins your kid's day.</p>
                            <p>Their gut <span class="extrablod">struggles to process</span> all that
                                crap.</p>
                            <p>This creates inflammation that <span class="extrablod italic">directly
                                    affects</span> the brain.</p>
                            <p>They wake up cranky and stay that way <span class="extrablod">for
                                    hours.</span></p>
                            <p>But with <span class="extrablod">better nutrition</span> to start the
                                day...</p>
                            <p>Those morning battles <span class="extrablod">disappear.</span></p>
                        </div>
                    </div>

                </div>
                <!-- Column data 3 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            3. Sleep Problems</h3>
                        <NuxtImg src="/images/p2-5.jpg" alt="p2-5.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">3. Sleep Problems</h3>
                        <div class="lg:space-y-4 space-y-2">
                            <!-- <p class="extrablod hidden lg:block">Trouble falling asleep, frequent wake-ups, or nightmares
                        </p> -->
                            <div class="hidden lg:block lg:space-y-4 space-y-2">

                                <p>Now that you know gut health <span class="extrablod">damages</span> sleep quality…
                                </p>
                                <p>Here’s the why:</p>

                                <p>Because an unhealthy gut can't produce enough <span
                                        class="extrablod">melatonin</span>
                                    (the sleep hormone). </p>

                                <p>And even if it does, it can’t process it correctly.</p>

                                <p>Plus, when you eat lots of sugar and artificial additives, your gut works <span
                                        class="extrablod">overtime.</span></p>
                                <p>Even at bedtime.</p>
                                <p>Research suggests it creates internal "stress" that leads to trouble falling asleep.
                                </p>
                                <p>Or frequent wake-ups. Even nightmares.</p>

                                <p>Bad sleep makes it even harder to balance your moods the next day.</p>

                                <p>It's a <span class="extrablod">perfect storm</span> of gut problems, sleep problems,
                                    and
                                    behavior problems.</p>
                                <p>Better nutrition
                                    <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">makes
                                        all the
                                        difference.</a>
                                </p>
                            </div>

                            <div class="lg:hidden lg:space-y-4 space-y-2">

                                <p>Now that you know gut health <span class="extrablod">damages</span> sleep quality…
                                </p>
                                <p>Here’s the why:</p>

                                <p>Because an unhealthy gut can't produce enough <span
                                        class="extrablod">melatonin</span>
                                    (the sleep hormone). </p>

                                <p>And even if it does, it can’t process it correctly.</p>

                                <p>Plus, when you eat lots of sugar and artificial additives, your gut works <span
                                        class="extrablod">overtime.</span></p>
                                <p>Even at bedtime.</p>
                                <p>Research suggests it creates internal "stress" that leads to trouble falling asleep.
                                </p>
                                <p>Or frequent wake-ups. Even nightmares.</p>

                                <p>Bad sleep makes it even harder to balance your moods the next day.</p>

                                <p>It's a <span class="extrablod">perfect storm</span> of gut problems, sleep problems,
                                    and
                                    behavior problems.</p>
                                <p>Better nutrition
                                    <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod" style="font-weight:600;">
                                        makes all the difference.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Column data 4 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            4. Anxiety, Not "Defiance"</h3>
                        <NuxtImg src="/images/p2-3.jpg" alt="p2-3.jpg-mg" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">4. Anxiety, Not "Defiance"</h3>
                        <div class="space-y-4 lg:hidden">
                            <p>That stubbornness? It might be anxiety.</p>

                            <p>And gut health plays a <span class="extrablod">huge role.</span></p>
                            <p>Especially in kids.</p>

                            <p>That's because the gut produces many of the same <span
                                    class="extrablod">neurotransmitters</span> as the brain.</p>
                            <p>Including GABA, which helps you feel calm and secure.</p>
                            <p> <span class="extrablod">Poor gut health</span> means you can't be calm.</p>
                            <p>Everything feels more <span class="extrablod">threatening.</span></p>
                            <p>That’s why it’s so easy to cling to familiar foods, routines, and environments.</p>
                            <p><span class="extrablod">A healthy gut stops the anxiety.</span></p>
                            <p>Without good nutrition, it's a <span class="extrablod">vicious
                                    cycle.</span></p>
                            <ul class="pl-2 lg:space-y-1 space-y-1">
                                <li class="flex gap-2 items-start">
                                    <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                        class="pt-2" />
                                    Anxiety leads to pickiness
                                </li>
                                <li class="flex gap-2 items-start">
                                    <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                        class="pt-2" />
                                    Picky eating hurts gut health
                                </li>
                                <li class="flex gap-2 items-start">
                                    <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                        class="pt-2" />
                                    Poor gut health amps up anxiety
                                </li>
                            </ul>

                            <p><span class="extrablod">Breaking the cycle</span> starts with <a
                                    href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                    class="text-blue-600 hover:text-red-500 extrablod" style="font-weight:600;">healing
                                    the
                                    gut</a>.
                            </p>

                        </div>
                        <div class="space-y-4 hidden lg:block">
                            <p>That stubbornness? It might be anxiety.</p>

                            <p>And gut health plays a <span class="extrablod">huge role.</span></p>
                            <p>Especially in kids.</p>

                            <p>That's because the gut produces many of the same <span
                                    class="extrablod">neurotransmitters</span> as the brain.</p>
                            <p>Including GABA, which helps you feel calm and secure.</p>
                            <p> <span class="extrablod">Poor gut health</span> means you can't be calm.</p>
                            <p>Everything feels more <span class="extrablod">threatening.</span></p>
                            <p>That’s why it’s so easy to cling to familiar foods, routines, and environments.</p>
                            <p><span class="extrablod">A healthy gut stops the anxiety.</span></p>
                            <p>Without good nutrition, it's a <span class="extrablod">vicious
                                    cycle.</span></p>
                            <ul class="pl-2 lg:space-y-1 space-y-1">
                                <li class="flex gap-2 items-start">
                                    <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                    Anxiety leads to pickiness
                                </li>
                                <li class="flex gap-2 items-start">
                                    <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                    Picky eating hurts gut health
                                </li>
                                <li class="flex gap-2 items-start">
                                    <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                    Poor gut health amps up anxiety
                                </li>
                            </ul>

                            <p><span class="extrablod">Breaking the cycle</span> starts with <a
                                    href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                    class="text-blue-600 hover:text-red-500 extrablod" style="font-weight:600;">healing
                                    the
                                    gut</a>.
                            </p>

                        </div>
                    </div>

                </div>

                <!-- Column data 5 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            5. It's Not ADHD</h3>
                        <NuxtImg src="/images/p2-4.jpg" alt="p2-4.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">5. It's Not ADHD</h3>
                        <div class="lg:space-y-4 space-y-2">

                            <div class="lg:hidden space-y-4">
                                <p>Before thinking it's ADHD, consider this:</p>
                                <p><span class="extrablod">Gut inflammation disrupts brain function. </span></p>

                                <p>When you eat junk, you don’t get the right nutrients.</p>
                                <p>Your gut becomes <span class="extrablod">inflamed.</span></p>
                                <p>And that inflammation travels to the brain.</p>
                                <p>The result? </p>
                                <p>You’re scatter-brained. Hyperactive. Unable to focus. </p>
                                <p class="extrablod italic"><i>For kids, it's even worse.</i></p>

                                <p>But <span class="extrablod">unlike</span> true ADHD, these symptoms
                                    fluctuate.</p>
                                <p>That's why your kid's moods go up and down.</p>
                                <p>Many families report <span class="extrablod">dramatic
                                        improvements</span>
                                    once their gut health is better.</p>

                                <p>Your focus sharpens. You're more productive.</p>
                                <p>The hyperactive kid now pays attention in class.</p>
                                <p>Or sits through dinner without bouncing off the walls.</p>
                                <p>And it all starts with <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">better
                                        nutrition.</a></p>

                            </div>
                            <div class="hidden lg:block space-y-4">
                                <p>Before thinking it's ADHD, consider this:</p>
                                <p><span class="extrablod">Gut inflammation disrupts brain function. </span></p>

                                <p>When you eat junk, you don’t get the right nutrients.</p>
                                <p>Your gut becomes <span class="extrablod">inflamed.</span></p>
                                <p>And that inflammation travels to the brain.</p>
                                <p>The result? </p>
                                <p>You’re scatter-brained. Hyperactive. Unable to focus. </p>
                                <p class="extrablod italic"><i>For kids, it's even worse.</i></p>

                                <p>But <span class="extrablod">unlike</span> true ADHD, these symptoms
                                    fluctuate.</p>
                                <p>That's why your kid's moods go up and down.</p>
                                <p>Many families report <span class="extrablod">dramatic
                                        improvements</span>
                                    once their gut health is better.</p>

                                <p>Your focus sharpens. You're more productive.</p>
                                <p>The hyperactive kid now pays attention in class.</p>
                                <p>Or sits through dinner without bouncing off the walls.</p>
                                <p>And it all starts with <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">better
                                        nutrition.</a></p>

                            </div>

                        </div>

                    </div>
                </div>

                <!-- Column data 6 -->

                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            6. Emotional Eating...</h3>
                        <NuxtImg src="/images/p2-6.jpg" alt="p2-6.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">6. Emotional Eating...</h3>
                        <div class="space-y-4">

                            <div class="hidden lg:block space-y-4">
                                <p>Are your kids <span class="extrablod">addicted</span> to things like pizza, chicken
                                    nuggets, and candy?</p>
                                <p>It may not be emotional eating. They may not be picky like you think.</p>

                                <p>Gut bacteria could be driving those cravings. </p>
                                <p>Specifically, <span class="extrablod italic">harmful</span> gut bacteria. They thrive
                                    on
                                    sugar and processed foods. </p>

                                <p>When these "bad" bacteria outnumber the "good", the brain goes crazy.
                                </p>

                                <p>The body's in distress without these foods because the <span class="extrablod">gut
                                        demands them.</span></p>
                                <p>This is <span class="extrablod italic">especially</span> true for kids.</p>
                                <p>So how to end the emotional meltdowns?</p>
                                <p><a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">Restore
                                        gut
                                        balance.</a></p>
                            </div>

                            <div class="lg:hidden lg:space-y-4 space-y-2">

                                <p>Are your kids <span class="extrablod">addicted</span> to things like pizza, chicken
                                    nuggets, and candy?</p>
                                <p>It may not be emotional eating. They may not be picky like you think.</p>

                                <p>Gut bacteria could be driving those cravings. </p>
                                <p>Specifically, <span class="extrablod italic">harmful</span> gut bacteria. They thrive
                                    on
                                    sugar and processed foods. </p>

                                <p>When these "bad" bacteria outnumber the "good", the brain goes crazy.
                                </p>

                                <p>The body's in distress without these foods because the <span class="extrablod">gut
                                        demands them.</span></p>
                                <p>This is <span class="extrablod italic">especially</span> true for kids.</p>
                                <p>So how to end the emotional meltdowns?</p>
                                <p><a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">Restore
                                        gut
                                        balance.</a></p>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Column data 7 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            7. Social Anxiety</h3>
                        <NuxtImg src="/images/p2-7.jpg" alt="p2-7.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">7. Social Anxiety</h3>
                        <div class="lg:space-y-4 space-y-2">
                            <!-- <p class="extrablod hidden lg:block">Struggles with friendships, being timid, or feeling overwhelmed in groups</p> -->

                            <div class="hidden lg:block space-y-4">
                                <p>Here’s something most parents don’t realize:</p>
                                <p><span class="extrablod"> Gut health influences social skills.</span></p>
                                <p>That’s because confidence and empathy start with a healthy gut.</p>

                                <p>A <span class="extrablod">gut imbalance</span> causes you to feel "off" in social
                                    settings.</p>

                                <p>You’re more sensitive to noise, crowds, or changes in routine. </p>

                                <p>You’re not antisocial. It’s your <span class="extrablod">gut-brain axis</span> not
                                    supporting a balanced mood.</p>

                                <p>And kids have it <span class="extrablod italic">worse.</span></p>
                                <p>They struggle with friendships. Or feel overwhelmed in groups.</p>
                                <p>The good news?</p>
                                <p>Once <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod" style="font-weight:600;">gut
                                        health
                                        improves,</a> your kids will be <span class="extrablod">more confident and
                                        outgoing.</span></p>
                            </div>

                            <div class="lg:hidden space-y-4">

                                <p>Here’s something most parents don’t realize:</p>
                                <p><span class="extrablod"> Gut health influences social skills.</span></p>
                                <p>That’s because confidence and empathy start with a healthy gut.</p>

                                <p>A <span class="extrablod">gut imbalance</span> causes you to feel "off" in social
                                    settings.</p>

                                <p>You’re more sensitive to noise, crowds, or changes in routine. </p>

                                <p>You’re not antisocial. It’s your <span class="extrablod">gut-brain axis</span> not
                                    supporting a balanced mood.</p>

                                <p>And kids have it <span class="extrablod italic">worse.</span></p>
                                <p>They struggle with friendships. Or feel overwhelmed in groups.</p>
                                <p>The good news?</p>
                                <p>Once <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod" style="font-weight:600;">gut
                                        health
                                        improves,</a> your kids will be <span class="extrablod">more confident and
                                        outgoing.</span></p>

                            </div>

                        </div>
                    </div>
                </div>

                <!-- Column data 8 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>
                        <h3
                            class="lg:text-3xl text-2xl extrablod mb-4 lg:hidden block text-[calc(7.4vw-0px)] leading-[calc(1em+1vw)]">
                            8. Emotional Setbacks</h3>
                        <NuxtImg src="/images/p2-8.jpg" alt="p2-8.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">8. Emotional Setbacks</h3>
                        <div class="lg:space-y-4 space-y-2">

                            <div class="hidden lg:block space-y-4">
                                <p>Is your child going <span class="extrablod italic">backward?</span> </p>
                                <p>More clingy. More tantrums. Overly emotional or immature.</p>
                                <p>Even a regression in potty training…?</p>
                                <p><span class="extrablod">Poor gut health</span> could be to blame.</p>

                                <p>Gut inflammation <span class="extrablod">slows</span> brain and emotional growth.
                                </p>
                                <p>Often after antibiotics or stress...</p>

                                <p>Which is when kids crave junk food even more. </p>
                                <p> <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">Luckily,
                                        once
                                        nutrition improves,</a> gut health is restored. </p>
                                <p>And most kids return to their normal development path.</p>
                            </div>

                            <div class="lg:hidden space-y-4">
                                <p>Is your child going <span class="extrablod italic">backward?</span> </p>
                                <p>More clingy. More tantrums. Overly emotional or immature.</p>
                                <p>Even a regression in potty training…?</p>
                                <p><span class="extrablod">Poor gut health</span> could be to blame.</p>

                                <p>Gut inflammation <span class="extrablod">slows</span> brain and emotional growth.
                                </p>
                                <p>Often after antibiotics or stress...</p>

                                <p>Which is when kids crave junk food even more. </p>
                                <p> <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                        class="text-blue-600 hover:text-red-500 extrablod"
                                        style="font-weight:600;">Luckily,
                                        once
                                        nutrition improves,</a> gut health is restored. </p>
                                <p>And most kids return to their normal development path.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Column data 9 -->

                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 lg:mb-12 mb-8">
                    <div>

                        <div class="lg:hidden block mb-4">
                            <h3
                                class="lg:text-3xl text-2xl extrablod mb-0 text-[calc(9.4vw-0px)] leading-[calc(1em+1vw)]">
                                The Solution Your Family Needs</h3>

                        </div>

                        <NuxtImg src="/images/p1-8.jpg" alt="p1-8.jpg-img" class="w-full rounded-xl" />
                    </div>
                    <div>
                        <h3 class="text-3xl extrablod mb-4 lg:block hidden leading-9">The Solution Your Family Needs
                        </h3>
                        <div class="lg:space-y-4 space-y-2">
                            <div class="lg:block hidden space-y-4">
                                <p>If this sounds like your family…</p>
                                <p>Don't worry. </p>
                                <p>First of all, it's <span class="extrablod">not you...</span></p>
                                <p>Second, there's a fun, delicious solution.</p>
                                <p class="extrablod">It's called YOMZ.</p>
                                <p>They're not your typical gummies. </p>
                                <p>They taste like candy. Yet they're packed with vital nutrients from <span
                                        class="extrablod">18 superfoods.</span></p>
                                <p>In fact, each serving is the phytonutritional equal of <span class="extrablod">2
                                        servings
                                        of real fruits and vegetables.</span></p>
                                <p><u><i>Without</i></u> artificial dyes, flavors, or other junk that makes gut problems
                                    worse.</p>
                                <p class="extrablod">Each YOMZ gummy contains:</p>
                                <ul class="pl-2 lg:space-y-1 space-y-1">
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                        Delicious fruity taste
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                        Vitamins A, C, D, and K2 + antioxidants
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                        Phytonutrients from real superfoods
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                        Prebiotics to feed “good” gut bacteria
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" alt="ellipse.svg-img" class="pt-2" />
                                        Probiotics to help improve digestion
                                    </li>
                                </ul>
                                <p>Plus, YOMZ has <span class="extrablod">5g fiber.</span> This meets FDA “excellent
                                    fiber
                                    source” standards.</p>
                                <p class="extrablod">The transformations that families are reporting:</p>
                                <ul class="pl-2 lg:space-y-1 space-y-1">
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        More joy and confidence
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        More cooperation, fewer meltdowns
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        Improved focus and attention
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        Fewer colds and sniffles
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        Better sleep
                                    </li>
                                </ul>
                                <p>Kids <span class="extrablod">beg for</span> YOMZ because they taste like candy.
                                    You’ll
                                    love them because they <span class="extrablod">work.</span></p>
                            </div>

                            <div class="lg:hidden block space-y-4">
                                <p>If this sounds like your family…</p>
                                <p>Don't worry. </p>
                                <p>First of all, it's <span class="extrablod">not you...</span></p>
                                <p>Second, there's a fun, delicious solution.</p>
                                <p class="extrablod">It's called YOMZ.</p>
                                <p>They're not your typical gummies. </p>
                                <p>They taste like candy. Yet they're packed with vital nutrients from <span
                                        class="extrablod">18 superfoods.</span></p>
                                <p>In fact, each serving is the phytonutritional equal of <span class="extrablod">2
                                        servings
                                        of real fruits and vegetables.</span></p>
                                <p><u><i>Without</i></u> artificial dyes, flavors, or other junk that makes gut problems
                                    worse.</p>
                                <p class="extrablod">Each YOMZ gummy contains:</p>
                                <ul class="pl-2 lg:space-y-1 space-y-1">
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                            class="pt-2" />
                                        Delicious fruity taste
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                            class="pt-2" />
                                        Vitamins A, C, D, and K2 + antioxidants
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                            class="pt-2" />
                                        Phytonutrients from real superfoods
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                            class="pt-2" />
                                        Prebiotics to feed “good” gut bacteria
                                    </li>
                                    <li class="flex gap-2 items-start">
                                        <NuxtImg src="/images/ellipse.svg" width="12" height="12" alt="ellipse.svg-img"
                                            class="pt-2" />
                                        Probiotics to help improve digestion
                                    </li>
                                </ul>
                                <p>Plus, YOMZ has <span class="extrablod">5g fiber.</span> This meets FDA “excellent
                                    fiber
                                    source” standards.</p>
                                <p class="extrablod">The transformations that families are reporting:</p>
                                <ul class="pl-2 lg:space-y-1 space-y-1">
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        More joy and confidence
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        More cooperation, fewer
                                        meltdowns
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        Improved focus and
                                        attention
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        Fewer colds and sniffles
                                    </li>
                                    <li class="flex gap-2">
                                        <NuxtImg src="/images/blk-check.svg" width="20" height="24"
                                            alt="blk-check.svg-img" />
                                        Better sleep
                                    </li>
                                </ul>
                                <p>Kids <span class="extrablod">beg for</span> YOMZ because they taste like candy.
                                    You’ll
                                    love them because they <span class="extrablod">work.</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="border-1 lg:border-[#1EB9F0] border-[#fff] rounded-xl lg:p-5 p-0 lg:mt-20 mt-15 relative">
                    <div class="px-6">
                        <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                            class="flex justify-center w-full h-full bg-[#0AA03C] lg:hidden  rounded-full  extrablod text-white uppercase p-3 lg:text-xl text-3xl">
                            TRY YOMZ TODAY
                        </a>
                        <a href="https://yomz-checkout-2.vercel.app/"
                            class="hidden lg:block bg-[#0AA03C] text-white absolute -top-5 py-2 w-50 px-5 left-0 right-0 mx-auto extrablod lg:text-lg text-base text-center">
                            TRY YOMZ NOW
                        </a>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 items-center">

                        <div>
                            <NuxtImg src="/images/yomz-double-pack.jpg" alt="yomz-double-pack.jpg-img"
                                class="hidden lg:block w-full lgp-3 p-1 lg:pt-3 pt-6" />
                            <NuxtImg src="/images/yomz-double-pack.jpg" alt="yomz-double-pack.jpg-img"
                                class="lg:hidden w-full lgp-3 p-1 lg:pt-3 pt-6" />
                        </div>

                        <div
                            class="text-center lg:space-y-4 space-y-2 border-1 lg:border-[#fff] border-[#1EB9F0] lg:p-0 p-6">
                            <h4 class="lg:text-3xl text-2xl extrablod">Ready to discover what happens when you support
                                your
                                family's gut-brain connection?</h4>
                            <p>Join thousands of smart moms who've discovered the secret to better behavior. It's better
                                nutrition that supports a healthy gut-brain-mood connection.</p>
                            <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                class="flex justify-center w-full h-full bg-[#0AA03C] lg:hidden  rounded-full  extrablod text-white uppercase p-3 lg:text-xl text-3xl">
                                TRY YOMZ TODAY
                            </a>
                            <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                                class="lg:flex justify-center w-full h-full bg-[#0AA03C] hidden rounded-full  extrablod text-white uppercase p-3 lg:text-xl text-3xl">
                                TRY YOMZ TODAY
                            </a>

                            <p class="bg-[#F7F8EA] lg:text-lg text-sm risk">Sell Out Risk: <span
                                    class="text-[#E6193C]">HIGH</span> | Inventory:
                                <span class="text-[#E6193C]">LOW</span>
                            </p>

                            <p class="uppercase extrablod">90-Day Picky Momz 200% Happiness Guarantee</p>

                        </div>

                    </div>

                </div>

            </div>

            <!-- Column B -->

        </div>
    </main>

    <!-- BodyContent -->
    <div>
        <!-- Your footer -->
        <footer ref="footerRef" class="bg-[#1EB9F0] lg:py-7 py-3 mt-10">
            <div class="mx-auto max-w-5xl text-center">
                <NuxtImg src="/images/logo.png" alt="logo.png-img" class="max-w-30 mx-auto mb-4" />
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

        <!-- Fixed CTA Button -->
        <div ref="ctaBar"
            :class="['flex items-center justify-center lg:hidden transition-all duration-300 z-50', isFooterVisible ? 'absolute' : 'fixed']"
            :style="{ bottom: isFooterVisible ? `${footerHeight}px` : '1rem', left: 0, right: 0 }">
            <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                class="block w-80 text-center text-white font-semibold text-2xl py-3 bg-[#1EB9F0] rounded-full">
                Try YOMZ today
            </a>
        </div>
    </div>
</template>
