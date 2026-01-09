<script setup lang="ts">
import { ref } from 'vue'

const today = new Date() // get today's date
today.setDate(today.getDate() - 5)  // subtract 5 days

// format date like "Sep 17, 2025"
const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
}

const formattedDate = ref(
    today.toLocaleDateString('en-US', options)
)

// meta tag details
useHead({
    title: LANDING_3.meta.title,
    meta: [
        { name: 'description', content: LANDING_3.meta.description },
        { property: 'og:title', content: LANDING_3.meta.title },
        { property: 'og:description', content: LANDING_3.meta.description },
        { property: 'og:image', content: LANDING_3.meta.ogImage },
        { property: 'og:url', content: LANDING_3.meta.ogUrl },
    ],
})

onMounted(() => {

    // Redirect to the correct landing page based on the stored parameter
    const lpParam = getFromStorage("lpParam", "local");
    navigateTo(`/lp3/local-mom-shock-discovery/${lpParam ?? 'ch1'}`);

})

</script>

<template>

    <!-- Header -->
    <Header :pageName="LANDING_3.header.pageName" />

    <!-- BodyContent -->
    <main>
        <div class="max-w-6xl lg:py-6 py-2 mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-10 gap-0">
                <!-- Column left -->
                <div class="col-span-10 lg:col-span-7 lg:p-4 p-2 allpragraph-fontsize">
                    <p class="mb-2 hidden lg:block">Home > Health > Family Health</p>
                    <p class="mb-2 lg:hidden">Home > Health > Family Health</p>

                    <h1 class="lg:text-4xl text-3xl hidden lg:block">
                        <span
                            class="text-xl text-black p-1 block mb-1 w-fit underline font-semibold italic bg-[#FFEB00]">
                            Local Mom's Shocking Discovery:</span><span class="extrablod">
                            My “Healthy” Family Was Actually <span class="text-[#E6193C]">Malnourished</span>.</span>
                    </h1>

                    <!-- <h1 class="block lg:hidden text-[calc(6vw-0px)] leading-[calc(1em+1vw)]"> -->
                    <h1 class="block lg:hidden text-[7.7vw] sm:text-[calc(6vw-0px)] leading-[calc(1em+1vw)]">

                        <span
                            class="text-lg text-black p-1 block mb-1 w-fit underline font-semibold italic bg-[#FFEB00]">
                            Local Mom's Shocking Discovery:</span><span class="extrablod">
                            My “Healthy” Family Was Actually <span class="text-[#E6193C]">Malnourished</span>.</span>
                    </h1>

                    <p class="flex items-center gap-3 extrablod mt-3">
                        <img src="/images/star.svg" width="110" height="20" alt="star.svg-img" />
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

                    <div class="lg:hidden lg:space-y-4 space-y-2 mb-8">
                        <p>6-year-old Emma had her annual checkup.</p>
                        <p>Her mom Sarah expected nothing unusual.</p>
                        <p>Instead, she got a <span class="extrablod">punch to the gut.</span> </p>
                        <p>"Emma shows signs of <span class="extrablod">serious nutrient deficiency,"</span> Dr. Pam
                            explained.</p>
                        <p>"She's <span class="extrablod">low</span> in vitamin C and vitamin D and <span
                                class="extrablod">missing</span> key micronutrients."</p>
                        <p>The news was <span class="extrablod">devastating.</span> Emma wasn't skinny or
                            sickly-looking.
                        </p>
                        <p>She ate regularly - chicken nuggets, mac and cheese, and grilled cheese were her favorites.
                        </p>
                        <p class="italic">How could she be malnourished?</p>
                        <p>"That’s when I learned about a ‘silent pandemic’ <span class="extrablod">called Hidden
                                Hunger,"</span> Sarah recalls.</p>
                        <p>"Emma <u><i>looked</i></u> healthy. <span class="extrablod">But inside</span>, she was
                            starving
                            for real nutrition."</p>

                        <!-- <p class="hidden lg:block">"Your daughter shows signs of many nutrient deficiencies," Dr. Pam
                        explained. "She's low in
                        vitamin C and vitamin D, and she's missing key micronutrients."</p> -->

                    </div>
                    <div class="hidden lg:block lg:space-y-4 space-y-2 mb-8">
                        <p>6-year-old Emma had her annual checkup.</p>
                        <p>Her mom Sarah expected nothing unusual.</p>
                        <p>Instead, she got a <span class="extrablod">punch to the gut.</span> </p>
                        <p>"Emma shows signs of <span class="extrablod">serious nutrient deficiency,"</span> Dr. Pam
                            explained.</p>
                        <p>"She's <span class="extrablod">low</span> in vitamin C and vitamin D and <span
                                class="extrablod">missing</span> key micronutrients."</p>
                        <p>The news was <span class="extrablod">devastating.</span> Emma wasn't skinny or
                            sickly-looking.
                        </p>
                        <p>She ate regularly - chicken nuggets, mac and cheese, and grilled cheese were her favorites.
                        </p>
                        <p class="italic">How could she be malnourished?</p>
                        <p>"That’s when I learned about a ‘silent pandemic’ <span class="extrablod">called Hidden
                                Hunger,"</span> Sarah recalls.</p>
                        <p>"Emma <u><i>looked</i></u> healthy. <span class="extrablod">But inside</span>, she was
                            starving
                            for real nutrition."</p>

                        <!-- <p class="hidden lg:block">"Your daughter shows signs of many nutrient deficiencies," Dr. Pam
                        explained. "She's low in
                        vitamin C and vitamin D, and she's missing key micronutrients."</p> -->

                    </div>

                    <h2 class="text-4xl mb-5 hidden lg:block">A <span class="extrablod">Silent Crisis</span> for 47
                        Million
                        Americans</h2>

                    <h2
                        class="lg:text-4xl text-[9vw] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)]  block mb-6 lg:hidden">
                        A <span class="extrablod">Silent
                            Crisis</span>
                        for <br class="block sm:hidden" /> 47 Million Americans</h2>

                    <img src="/images/fl-1.jpg" class="w-full mb-5" alt="fl-1.jpg-img" />

                    <div class="lg:space-y-4 space-y-2 mb-8">
                        <p><span class="extrablod">Dr. Pam is board-certified</span> in internal medicine. For over 12
                            years, she’s studied nutrition.</p>

                        <p>She says Sarah's story is far from unique.</p>

                        <p>"Hidden Hunger is a ‘silent pandemic’ because it’s <span class="extrablod">more
                                widespread</span>
                            than we think.</p>

                        <p>“Over 47 million Americans have ‘food insecurity’. </p>
                        <p>“That is, no consistent access to enough food for an active, healthy life,” Dr. Pam explains.
                        </p>
                        <p>“No doubt, they’re suffering from Hidden Hunger.</p>
                        <p>“But Hidden Hunger is <span class="italic extrablod">not</span> about a lack of access,” she
                            continues. </p>
                        <p>“Plenty of ‘food secure’ Americans have <span class="extrablod">disturbingly low
                                levels</span> of
                            essential nutrients, especially micronutrients.</p>
                        <p>“These are people who get plenty of calories.</p>
                        <p>“Yet, Hidden Hunger <span class="extrablod">is wrecking their lives, too.</span></p>
                        <p>“That’s why I’m certain <span class="extrablod"><u><i>way</i></u> more</span> than 47 million
                            Americans have Hidden Hunger."</p>
                        <p>The statistics are alarming:</p>
                    </div>

                    <div class="bg-[#F2F6FB] pb-7 rounded-xl font-bold">
                        <!-- <ul class="pl-3 lg:space-y-1 space-y-1 semibold">
                            <li v-for="(fact, index) in healthFacts" :key="index" class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" alt="blk-check.svg-img" class="pt-1 h-6 w-6" />
                                {{ fact }}
                            </li>
                        </ul> -->

                        <div class="bg-[#f3ebda] p-5 mb-5"><img src="/images/fl-2.jpg"
                                class="h-[300px] w-full md:h-[400px] object-contain" alt="fl-2.jpg-img" /></div>

                        <div class="lg:space-y-4 space-y-2 lg:px-4 font-bold">

                            <p><span class="extrablod">"Malnutrition doesn't always look skinny,"</span>
                                stresses Dr. Pam. </p>

                            <p>"In fact, some of the most undernourished children I see are <span
                                    class="extrablod"><u><i>over</i></u>weight.</span></p>

                            <p><u>“But let me be clear:</u> it’s not just destroying kids’ lives…</p>
                            <p>"Hidden Hunger <span class="extrablod">threatens</span> the health of <span
                                    class="extrablod"> millions of adults,</span> too.</p>
                            <p>"So it’s a family problem, not a kid problem."</p>
                        </div>

                    </div>

                    <h3
                        class="lg:text-4xl text-[6.5vw] sm:text-[calc(5.5vw-0px)] lg:leading-[calc(.7em+1vw)] xl:leading-[36px] leading-[calc(1em+1vw)] extrablod mt-8">
                        Why
                        Modern Americans Are Starving in a Land of
                        Plenty
                    </h3>

                    <img src="/images/fl-3.jpg" class="w-full py-6 h-[350px] md:h-[600px] object-cover"
                        alt="fl-3.jpg-img" />
                    <div class="lg:space-y-4 space-y-2 mb-8">
                        <p><span class="extrablod">The problem isn't lack of food.</span></p>
                        <p>It's lack of <u><i>nutrition</i></u> in the food we eat.</p>
                        <p>"Modern farming practices have <span class="extrablod">stripped nutrients</span> from our
                            soil,"
                            explains Dr. Pam.</p>
                        <p>"Today, you need to eat <span class="extrablod">8 oranges</span> to get the <i>same</i>
                            nutrition
                            as a single orange 50 years ago."</p>
                        <p>That's on top of the busy reality of modern family life:</p>
                        <ul class="lg:pl-2 lg:space-y-4 space-y-2">
                            <li class="flex gap-2 items-center">
                                <img src="/images/blk-check.svg" class="min-w-[20px]" width="20" height="20"
                                    alt="blk-check.svg" />
                                Processed snacks
                            </li>
                            <li class="flex gap-2 items-center">
                                <img src="/images/blk-check.svg" class="min-w-[20px]" width="20" height="20"
                                    alt="blk-check.svg" />
                                Fast food meals
                            </li>
                            <li class="flex gap-2 items-center">
                                <img src="/images/blk-check.svg" class="min-w-[20px]" width="20" height="20"
                                    alt="blk-check.svg" />
                                Daily battles to eat anything green
                            </li>
                        </ul>

                        <p>"As a parent, you aren't failing your kids," Dr. Pam stresses. </p>
                        <p>"The food system is failing them... <i>and</i> <span class="extrablod italic">you.</span>
                        </p>
                        <p>“Even if you try to provide your family with healthy options, it’s an <span
                                class="extrablod">uphill battle.</span></p>
                        <p>"In addition to bad soil, there's supply chain chaos and foods engineered for shelf-life,
                            <span class="extrablod italic">not</span> nutrition."
                        </p>

                    </div>

                    <h3
                        class="lg:text-4xl text-[7.2vw] sm:text-[calc(5.5vw-0px)] lg:leading-[52px] leading-[calc(1em+1vw)] extrablod mt-8">
                        Hidden
                        Signs Most Parents (and Doctors) Miss
                    </h3>

                    <img src="/images/fl-4.jpg" class="w-full py-6 pb-0 h-[350px] md:h-[600px] object-cover"
                        alt="fl-4.jpg-img" />
                    <div class="lg:space-y-4 space-y-2 mb-8 bg-[#FAFAFA] lg:p-5 p-0 lg:py-9 py-4">

                        <p class="extrablod">Hidden Hunger isn’t obvious.</p>
                        <p>Instead, the symptoms <span class="extrablod">disguise themselves</span> as common
                            childhood
                            issues.</p>

                        <p>Ones that most parents, and many doctors, dismiss as "normal":</p>

                        <p><span class="extrablod">Mood and behavior swings:</span> It's hard to control
                            emotions and
                            behavior without good nutrition.</p>

                        <p><span class="extrablod">Difficulty focusing:</span> The brain needs specific
                            nutrients to
                            function well.</p>

                        <p><span class="extrablod">Frequent illness:</span> Kids with nutrient deficiencies get
                            sick
                            more
                            and recover slower.</p>

                        <p><span class="extrablod">Energy crashes:</span> That 3pm meltdown isn't
                            tiredness. It's a sign of blood sugar instability from poor nutrition.</p>

                        <p><span class="extrablod">Sleep problems:</span> Many nutrients play crucial roles in
                            sleep
                            regulation and quality.</p>

                        <p><span class="extrablod">Gut health issues:</span> Show as frequent tummy
                            aches, food sensitivities, or constipation.</p>

                        <p><span class="extrablod">"I thought Emma's issues</span> were just a normal part of
                            growing
                            up,"
                            Sarah says.</p>
                        <p> "The afternoon meltdowns, the trouble sleeping, constant colds... </p>
                        <p>"I never <span class="extrablod">connected it</span> to what she was eating."</p>
                    </div>

                    <h3
                        class="text-[7.5vw] sm:text-[calc(5.5vw-0px)] leading-[calc(1em+1vw)] lg:text-4xl extrablod mt-8">
                        Superfood Gamechanger</h3>
                    <img src="/images/p1-8.jpeg" class="w-full py-6" alt="p1-8.jpeg-img" />
                    <div class="lg:space-y-4 space-y-2 mb-8">
                        <p><span class="extrablod">After seeing thousands</span> of families struggle with
                            Hidden
                            Hunger,
                            Dr. Pam took action.</p>
                        <p>She tried a variety of supplements. And recommended her patients take various others. </p>
                        <p> <span class="extrablod">Almost nothing worked.</span></p>
                        <p>Or if something <span class="extrablod italic underline">did</span> work,
                            patients stopped
                            <span class="extrablod">because they hated the taste.</span>
                        </p>
                        <p>Eventually, it got to Dr. Pam. She started <span class="extrablod">questioning
                                herself.
                            </span>
                        </p>
                        <p>She wondered if she had gone down the <span class="extrablod">wrong path.</span>
                        </p>
                        <p>Just as she thinking about a change... </p>
                        <p>She met someone. <span class="extrablod">An unexpected ally:</span> Anastasia
                            Radzinskaya.
                        </p>
                        <p>She's better known to her nearly 400 million fans as <span class="extrablod">Nastya,</span>
                            star
                            of the top YouTube children’s series <i>Like Nastya.</i></p>
                        <p>By chance, Nastya had learned about Hidden Hunger.</p>
                        <p>Once she heard its dangers, <span class="extrablod">she immediately knew</span>
                            she had to do
                            something to help.</p>
                        <p>"Some of the <i>Like Nastya</i> family might be suffering," she realized.</p>
                        <p>So Nastya co-founded a <span class="extrablod">family supplement brand called Yumzy.</span>
                        </p>
                        <p>Yumzy is the maker of <a @click="() => goToCheckout('lp3')"
                                class="text-blue-600 hover:text-red-500 extrablod cursor-pointer"
                                style="font-weight:600;">YOMZ, a
                                mouthwatering gummy backed by science</a> to fill the nutrition gaps facing millions of
                            Americans every day.</p>
                        <p>Then Nastya partnered with Dr. Pam, who is the medical advisor of this breakthrough
                            family-focused gummy.</p>
                        <p>Dr. Pam explains. "First, it had to <span class="extrablod">taste amazing</span>
                            - like a
                            treat
                            kids would actually ask for. </p>
                        <p>“Otherwise, no one would want it.”</p>
                        <p>"But we <span class="extrablod">also refused to compromise</span> on nutrition.
                            So we added
                            the
                            power of <span class="extrablod">18 superfoods:</span></p>

                        <p>“Vitamins, antioxidants, micronutrients, and 5g of fiber.</p>
                        <p>“All the while keeping amazing taste as our #1 goal.</p>
                        <p>“No artificial colors. No fake flavors. No junk. </p>
                        <p>"Just pure, bioavailable nutrients in a form kids love."</p>
                        <p>She laughs. “And adults, too!”</p>
                        <p>That’s because YOMZ OG Gummies come in 3 juicy flavors: <span class="extrablod">Peachy,
                                Strawbeary, and Berry Beary.</span></p>
                        <p>If you like your lips to pucker, there’s also the <span class="extrablod">tangy YOMZ
                                Sour</span> form in those same 3 flavors.</p>

                        <p>Each serving of YOMZ Gummies has the phytonutrient equal of <span class="extrablod">2
                                servings of fruits and vegetables.</span></p>
                        <p>It's <span class="extrablod">also packed with</span> polyphenols, probiotics,
                            postbiotics,
                            and
                            other gut-supporting ingredients.</p>
                    </div>

                    <!-- Real Families, Real Results -->
                    <h3 class="text-3xl extrablod">Real Families, Real Results</h3>
                    <p class=" mt-2 mb-4">The results have been remarkable.
                        Parents like you constantly share the
                        transformations in their families' health,
                        energy, and behavior.</p>
                    <VerifiedCustomer :name="verifiedCustomers.customer1.name"
                        :reviewText="verifiedCustomers.customer1.reviewText" />

                    <!-- Other parents report similar experiences: -->
                    <h3 class="text-3xl extrablod mb-4">Other parents report similar experiences:</h3>
                    <VerifiedCustomer v-for="([key, customer]) in Object.entries(verifiedCustomers).slice(1)" :key="key"
                        :name="customer.name" :reviewText="customer.reviewText" />

                    <div class="lg:space-y-4 space-y-2 mb-8 bg-[#DCF0E1] pb-7 shadow-lg rounded-xl overflow-hidden">
                        <img src="/images/fl-6.jpg" class="w-full" alt="fl-6.jpg-Img" />
                        <h3
                            class="lg:text-4xl text-[8.3vw] sm:text-[calc(5.5vw-0px)] lg:leading-[52px] leading-[calc(1em+1vw)]  extrablod mt-6 lg:px-5">
                            Why Yumzy Is Different</h3>
                        <p class="lg:px-5">Yumzy is <span class="extrablod">unlike</span> traditional
                            supplements.</p>
                        <p class="lg:px-5"><span class="extrablod italic underline">No</span> junk or fake
                            anything.</p>
                        <p class="lg:px-5">Crafted for the challenges your family faces.</p>
                        <p class="lg:px-5">Yet, Yumzy isn’t a <span class="extrablod">traditional</span>
                            candy gummy,
                            either.
                        </p>
                        <p class="lg:px-5">Even if it tastes like one. </p>

                        <p class="lg:px-5 extrablod"> Think of it as candy, <i>but better for you.</i></p>
                        <ul class="lg:space-y-1 space-y-1 lg:pl-5">
                            <li class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" class="pt-1 h-5" alt="blk-check.svg-Img" />
                                <span>
                                    <span class="font-bold lg:block hidden"> Kid-Approved Taste:</span>
                                    <span class="font-bold underline lg:hidden">
                                        Kid-Approved Taste:
                                    </span>
                                    To them, it’s candy. To you, it’s their daily servings.
                                </span>
                            </li>
                            <li class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" class="pt-1 h-5" alt="blk-check.svg-Img" />
                                <span><span class="font-bold lg:block hidden">Real
                                        Nutrition:</span><span class="font-bold underline lg:hidden">Real
                                        Nutrition:</span>
                                    Delivers nutrients
                                    from
                                    actual fruits and vegetables.</span>
                            </li>
                            <li class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" class="pt-1 h-5" alt="blk-check.svg-Img" />
                                <span><span class="font-bold lg:block hidden">18
                                        Superfoods:</span><span class="font-bold underline lg:hidden">18
                                        Superfoods:</span>
                                    From leafy greens to
                                    berries, it’s a “farmer’s market in a gummy”.</span>
                            </li>
                            <li class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" class="pt-1 h-5" alt="blk-check.svg-Img" />
                                <span><span class="font-bold lg:block hidden">Science-Backed:</span><span
                                        class="font-bold underline lg:hidden">Science-Backed:</span>
                                    Supported by a
                                    nutrition expert and tested by millions.</span>
                            </li>

                            <li class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" class="pt-1 h-5" alt="blk-check.svg-Img" />
                                <span><span class="font-bold lg:block hidden">Gut Health
                                        Support:</span><span class="font-bold underline lg:hidden">Gut Health
                                        Support:</span> Meets FDA
                                    guidelines as “excellent source of fiber”.</span>
                            </li>
                            <li class="flex gap-2 items-start">
                                <img src="/images/blk-check.svg" class="pt-1 h-5" alt="blk-check.svg-Img" />
                                <span><span class="font-bold underline">Family-Friendly:</span>
                                    Nutritious, delicious, and safe for ages 2 to 102.</span>
                            </li>

                        </ul>
                    </div>

                    <h3
                        class="lg:text-4xl text-[10vw] sm:text-[calc(5.5vw-0px)] lg:leading-[52px] leading-[calc(1em+1vw)] extrablod mt-8">
                        Don’t
                        You Deserve Peace of Mind?</h3>
                    <img src="/images/fl-7.jpg"
                        class="w-full py-6 h-[450px] md:h-[600px] md:w-[80%] object-cover object-top"
                        alt="fl-7.jpg-Img" />
                    <div class="lg:space-y-4 space-y-2 mb-8">

                        <p><span class="extrablod">The most rewarding part</span> of Yumzy? "Hearing from
                            parents who
                            finally
                            <span class="extrablod">have peace of mind,</span>" Dr. Pam says.
                        </p>
                        <p>"Even if every meal is a battle, parents are assured their kids <span class="extrablod">are
                                still
                                getting essential nutrition."</span></p>

                        <p>For Sarah, Yumzy has been <span class="extrablod"> life-changing.</span></p>
                        <p>"I used to lie awake at night worrying about Emma's nutrition. </p>
                        <p>"Now I know whatever she eats during the day, <span class="extrablod">YOMZ Gummies are
                                giving
                                her</span>
                            what her body needs to grow and thrive."</p>
                        <p>"There's no risk to try these, either. </p>
                        <p>"That’s because YOMZ comes with Yumzy's famous <span class="extrablod">90-Day 200%
                                Happiness Guarantee.</span>"</p>
                        <p>That's right. In 90 days...</p>

                        <p>If you don’t see improvements in your family's health... </p>
                        <p>Or if no one loves the taste, you get back double what you paid.</p>
                    </div>

                    <h3
                        class="lg:text-4xl text-[11vw] sm:text-[calc(5.5vw-0px)] lg:leading-[52px] leading-[calc(1em+1vw)] extrablod mt-8">
                        A
                        Mission Bigger Than Business</h3>
                    <img src="/images/p1-9.jpg"
                        class="w-full py-6 h-auto md:h-[600px] md:w-[80%] object-cover object-top" alt="fl-8.jpg-Img" />
                    <div class="lg:space-y-4 space-y-2 mb-8">
                        <p>Yumzy wasn't created to solve just <i><u>one</u></i> family's problems.
                        </p>
                        <p>Yumzy's mission is to <span class="extrablod"> end Hidden Hunger for 100
                                million people</span>.
                        </p>

                        <p>"Every child - everyone - should have the chance to reach their <span class="extrablod">full
                                potential,</span>" Dr. Pam says.</p>
                        <p>"Hidden Hunger robs you of that...</p>

                        <p>"<span class="extrablod">By stealing</span> your energy, focus, immunity,
                            and happiness.</p>
                        <p>"But we can change that.</p>
                        <p>"We have the <span class="extrablod">knowledge and tools</span>. Now we
                            have a tasty gummy to
                            do
                            just that - help everyone...</p>
                        <p>"Especially those who need it most."</p>
                        <p>Adds Nastya: “<span class="extrablod">Yumzy is for families.</span> So
                            together, let’s <span class="extrablod italic">smash</span> Hidden
                            Hunger!”</p>
                        <p>If you’re struggling with picky eaters or constant illness... </p>
                        <p>If behavior troubles dominate your every day... </p>
                        <p>Or if you simply worry daily about your family's nutrition...</p>
                        <p><a @click="() => goToCheckout('lp3')"
                                class="cursor-pointer text-blue-600 hover:text-red-500 extrablod"
                                style="font-weight:600;">Yumzy offers
                                hope.</a></p>
                        <p>"You're dealing with a system that makes it difficult to nourish your
                            child.</p>
                        <p>"Yumzy is a tool to <span class="extrablod">help you succeed</span> <i>despite</i> those
                            challenges."
                        </p>
                        <p>Besides their incredible 200% Happiness Guarantee, there’s <span class="extrablod">2 more
                                reasons</span> to try Yumzy.</p>
                        <p>First, it’s crafted with <span class="extrablod">patented blend of
                                proprietary
                                ingredients</span>
                            of the highest quality.</p>
                        <p>Second, it's made in the world’s <span class="extrablod">#1 gummy-making
                                facility. </span>
                        </p>
                        <p>This state-of-the-art facility is <span class="extrablod">fully
                                licensed</span> and regularly
                            inspected by the FDA. It operates in <span class="extrablod">full
                                compliance</span> with
                            current
                            Good Manufacturing Practices (cGMP).</p>
                    </div>

                    <h3
                        class="lg:text-4xl text-[11vw] sm:text-[calc(5.5vw-0px)] lg:leading-[52px] leading-[calc(1em+1vw)] extrablod mt-8">
                        Taking
                        Action</h3>
                    <img src="/images/fl-9.jpg"
                        class="w-full py-6 h-[450px] md:h-[600px] md:w-[80%] object-cover object-top"
                        alt="fl-9.jpg-Img" />
                    <div class="lg:space-y-4 space-y-2 mb-8">
                        <p>To discover more about Yumzy and Hidden Hunger, visit the <span class="extrablod">Yumzy
                                official website.</span> </p>
                        <p>You'll find more information and take advantage of

                            <a @click="() => goToCheckout('lp3')" class="underline italic cursor-pointer">
                                current promotional offers.
                            </a>

                        </p>
                        <p><span class="extrablod">Yumzy is backed by</span> scientific research,
                            expert development, and
                            kids' approval. </p>
                        <p>It represents a <span class="extrablod">breakthrough</span> in the
                            fight against Hidden
                            Hunger.
                        </p>
                        <p>The <span class="extrablod">transformation</span> for Sarah and Emma
                            has been profound. </p>
                        <p><span class="extrablod">"Emma’s thriving. </span> She sleeps better,
                            focuses better, and
                            rarely
                            gets sick."</p>
                        <p>Sarah continues. "It’s changed me, too. I'm not worried about her
                            nutrition anymore. I can
                            actually <span class="extrablod">enjoy being her mom."</span> </p>
                        <p>Sarah adds this: “<span class="extrablod">Don’t fall</span> for the
                            slick ads that promise
                            the
                            world… like I used to.</p>
                        <p>"As Dr. Pam told me once: <span class="italic">Sometimes, a simple
                                change is all we
                                need...'</span> </p>
                        <p>“She's right. <span class="extrablod">We tried many things</span>
                            before we found Yumzy. </p>
                        <p>"We were always looking for the quick fix or to hit the jackpot.</p>
                        <p>"<span class="extrablod">Once we stopped overcomplicating it,</span>
                            it all fell into place.
                        </p>
                        <p>"So <span class="extrablod">I’m spreading the word</span> about
                            Hidden Hunger and how Yumzy
                            fights
                            it.</p>
                        <p>"<span class="extrablod">Now that you know</span> this, it’s up to
                            you as a good parent to do
                            something. </p>
                        <p><span class="extrablod">"And it’s so easy.”</span> </p>

                    </div>

                    <p class="bg-[#EFEFEF] lg:p-3 font-bold">As with any supplement, parents should
                        consult with their
                        child's
                        healthcare provider before making
                        changes to their nutrition routine.</p>

                    <div class="lg:w-100 flex justify-center mt-7 mx-auto">
                        <!-- <a @click="() => goToCheckout('lp3')"
                            class="flex justify-center w-full h-full bg-[#0AA03C] rounded-full  extrablod text-white capitalize p-3 lg:text-xl text-2xl sm:text-3xl">
                            Try Yumzy Risk-Free
                        </a> -->
                        <a @click="() => goToCheckout('lp3')"
                            class="flex justify-center w-full h-full bg-[#0AA03C]  rounded-full extrablod text-white p-3 lg:text-xl text-2xl leading-[calc(1em+1vw)] capitalize cursor-pointer">
                            Apply Discount & <br class="block md:hidden"> Check Availabiity
                        </a>
                    </div>

                    <div class="lg:text-md text-sm sources-text flex flex-col">
                        <p class="extrablod lg:mt-20 mt-5">Sources:</p>
                        <a v-for="(link, index) in footerLinks.LANDING_3" :key="index" :href="link"
                            class="hover:underline break-all italic w-fit" target="_blank">{{ link }}
                        </a>
                    </div>
                </div>

                <!-- Column right -->
                <div class="col-span-10 lg:col-span-3 lg:p-4 p-2 hidden">
                    <div class="border-1 border-[#1EB9F0] p-2 bg-[#F3FBFE] rounded-xl">
                        <h4 class="text-center text-xl font-bold pt-4 extrablod">FINALLY GET YOUR STRENGTH
                            AND ENERGY BACK AFTER 40</h4>

                        <img src="/images/yomz-pack.png" class="w-full p-5" alt="yomz-pack.png-Img" />

                        <div class="bg-white  p-4 rounded-xl">

                            <p class="text-lg font-bold mb-2 extrablod">Customer Reviews</p>

                            <p class="flex gap-1 mb-2">
                                <span class="flex">
                                    <img v-for="i in 5" :key="i" src="/images/yellow-star.svg" class="h-5"
                                        alt="yellow-star.svg-Img" />
                                </span> 4.8 out of 5
                            </p>

                            <p class="mb-2">6,782 customer ratings</p>

                            <div class="max-w-md mx-auto space-y-3">
                                <!-- 5 Star -->
                                <div class="flex items-center gap-1">
                                    <span class="w-12 text-sm font-medium">5 Star</span>
                                    <div class="flex-1 h-4 bg-gray-200">
                                        <div class="h-4 bg-yellow-400 " style="width: 90%"></div>
                                    </div>
                                    <span class="w-10 text-sm font-medium text-right">90%</span>
                                </div>

                                <!-- 4 Star -->
                                <div class="flex items-center gap-1">
                                    <span class="w-12 text-sm font-medium">4 Star</span>
                                    <div class="flex-1 h-4 bg-gray-200">
                                        <div class="h-4 bg-yellow-400" style="width: 7%"></div>
                                    </div>
                                    <span class="w-10 text-sm font-medium text-right">7%</span>
                                </div>

                                <!-- 3 Star -->
                                <div class="flex items-center gap-1">
                                    <span class="w-12 text-sm font-medium">3 Star</span>
                                    <div class="flex-1 h-4 bg-gray-200">
                                        <div class="h-4 bg-yellow-400" style="width: 2%"></div>
                                    </div>
                                    <span class="w-10 text-sm font-medium text-right">2%</span>
                                </div>

                                <!-- 2 Star -->
                                <div class="flex items-center gap-1">
                                    <span class="w-12 text-sm font-medium">2 Star</span>
                                    <div class="flex-1 h-4 bg-gray-200">
                                        <div class="h-4 bg-yellow-400" style="width: 0%"></div>
                                    </div>
                                    <span class="w-10 text-sm font-medium text-right">0%</span>
                                </div>

                                <!-- 1 Star -->
                                <div class="flex items-center gap-1">
                                    <span class="w-12 text-sm font-medium">1 Star</span>
                                    <div class="flex-1 h-4 bg-gray-200">
                                        <div class="h-4 bg-yellow-400" style="width: 1%"></div>
                                    </div>
                                    <span class="w-10 text-sm font-medium text-right">1%</span>
                                </div>
                            </div>

                            <!-- By Feature -->
                            <p class="text-lg extrablod mb-2 mt-4">By Feature</p>
                            <RatingItem v-for="item in ratings" :key="item.label" :label="item.label"
                                :rating="item.rating" />
                        </div>

                        <button @click="() => goToCheckout('lp3')"
                            class="bg-black text-white w-full p-2 mt-3 mb-4 text-xl font-extrabold uppercase rounded-full cursor-pointer">
                            Try YOMZ Risk-Free
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- BodyContent -->
    <!-- <div> -->
    <!-- Footer -->
    <footer class="bg-[#1EB9F0] lg:py-7 py-3">
        <div class="mx-auto max-w-5xl text-center">
            <img src="/images/logo.png" class="max-w-30 mx-auto mb-4" alt="logo.png-Img" />
            <p class="text-white lg:text-lg text-sm">By filling out the field, you consent for YOMZ™
                to use automated technology, including texts and prerecorded messages, to contact you at the number
                and
                email provided about YOMZ™ offers. </p>
        </div>
    </footer>
    <!-- Fixed CTA Button -->
    <!-- <div ref="ctaBar"
            :class="['flex items-center justify-center lg:hidden transition-all duration-300 z-50', isFooterVisible ? 'absolute' : 'fixed']"
            :style="{ bottom: isFooterVisible ? `${footerHeight}px` : '1rem', left: 0, right: 0 }">
            <a href="https://get.yumzy.com/checkout-2-a/" target="_blank"
                class="block w-80 text-center text-white font-semibold text-2xl py-3 bg-[#1EB9F0] rounded-full">
                Try Yumzy Today
            </a>
        </div> -->
    <!-- </div> -->

</template>