<script setup>
import { ref } from 'vue'

// get today's date
const today = new Date()
// subtract 5 days
today.setDate(today.getDate() - 5)

// format date like "Sep 17, 2025"
const options = { year: 'numeric', month: 'short', day: 'numeric' }
const formattedDate = ref(today.toLocaleDateString('en-US', options))
</script>

<template>

    <!-- top-header -->
    <div class="bg-black lg:gap-3 gap-1 py-3">
        <div class="max-w-6xl mx-auto">
            <div class="text-white flex items-center justify-between lg:px-0 px-2">
                <p class="uppercase font-bold lg:text-sm text-xs">Health & WELLNESS</p>
                <p class="flex gap-2 uppercase font-bold lg:text-sm text-xs"> <img src="/images/us-flag.webp"
                        class="lg:h-5 h-4"> Trending in the
                    US </p>
            </div>
        </div>
    </div>

    <!-- top-header -->

    <!-- BodyContent -->
    <div class="max-w-6xl lg:py-6 py-2 mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-10 gap-0">
            <!-- Column left -->
            <div class="col-span-10 lg:col-span-7 lg:p-4 p-2 allpragraph-fontsize">
                <p class="mb-2 hidden lg:block">Home > Health > Muscle Building</p>
                <p class="mb-2 lg:hidden">Home > Health > Family Health</p>

                <h1 class="lg:text-4xl text-3xl hidden lg:block">
                    <span class="text-xl text-black p-1 underline font-semibold italic bg-[#FFEB00]">
                        Local Mom's Shocking Discovery:</span><br> <span class="extrablod">
                        My “Healthy” Family  Was Actually <span
                            class="text-[#E6193C]">Malnourished</span>."</span>
                </h1>

                <h1 class="block lg:hidden text-[calc(6.5vw-0px)] leading-[calc(1em+1vw)]"><span
                        class="text-lg text-black p-1 underline font-semibold italic bg-[#FFEB00]">
                        Local Mom's Shocking Discovery:</span><br> <span class="extrablod">
                         My “Healthy” Family  Was Actually <span
                            class="text-[#E6193C]">Malnourished</span>."</span>
                </h1>

                <!-- <p
                    class="bg-[#FFEB00] text-black font-bold p-2 text-xl mt-4 lg:mr-15 mr-0 italic hidden lg:block">
                    New Research Reveals Tens of Millions of Americans Suffer from 'Hidden Hunger'.</p> -->

                <!-- <p class="block new-text-studies lg:hidden text-black font-bold p-0 text-sm mt-2 lg:mr-15 mr-0 italic">
                    47 million perfectly "healthy" Americans suffer from the same issue.</p>

                <p class="mt-3 font-bold italic hidden lg:block">47 million perfectly "healthy" Americans suffer from
                    the same issue.</p> -->

                <p class="flex items-center gap-3 extrablod mt-3"><img src="/images/star.svg"> <span
                        class="font-bold">6,782
                        ratings</span></p>

                <div class="flex gap-3 items-center py-4">
                    <img src="/images/person.png" class="rounded-full w-15">
                    <!-- <div>
                        <span class="extrablod flex">Dr. Pam . <img src="/images/check.png"></span>
                        <span>Last updated Sep 17, 2025</span>
                    </div> -->

                    <div>
                        <span class="extrablod flex">
                            Sabrina Marshall
                            <img src="/images/check.png" class="ml-1" />
                        </span>
                        <span>
                            Last updated {{ formattedDate }}
                        </span>
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
                    <p>The news was <span class="extrablod">devastating.</span> Emma wasn't skinny or sickly-looking.
                    </p>
                    <p>She ate regularly - chicken nuggets, mac and cheese, and grilled cheese were her favorites.</p>
                    <p class="italic">How could she be malnourished?</p>
                    <p>"That’s when I learned about a ‘silent pandemic’ <span class="extrablod">called Hidden
                            Hunger,"</span> Sarah recalls.</p>
                    <p>"Emma <u><i>looked</i></u> healthy. <span class="extrablod">But inside</span>, she was starving
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
                    <p>The news was <span class="extrablod">devastating.</span> Emma wasn't skinny or sickly-looking.
                    </p>
                    <p>She ate regularly - chicken nuggets, mac and cheese, and grilled cheese were her favorites.</p>
                    <p class="italic">How could she be malnourished?</p>
                    <p>"That’s when I learned about a ‘silent pandemic’ <span class="extrablod">called Hidden
                            Hunger,"</span> Sarah recalls.</p>
                    <p>"Emma <u><i>looked</i></u> healthy. <span class="extrablod">But inside</span>, she was starving
                        for real nutrition."</p>

                    <!-- <p class="hidden lg:block">"Your daughter shows signs of many nutrient deficiencies," Dr. Pam
                        explained. "She's low in
                        vitamin C and vitamin D, and she's missing key micronutrients."</p> -->


                </div>

                <h2 class="text-4xl mb-6 hidden lg:inline">A <span class="extrablod">Silent Crisis</span> for 47 Million
                    Americans</h2>

                <h2 class="lg:text-4xl text-3xl  block mb-6 lg:hidden">A <span class="extrablod">Silent Crisis</span>
                    for 47 Million Americans</h2>

                <img src="/images/fl-1.jpg" class="w-full mb-5">

                <div class="lg:space-y-4 space-y-2 mb-8">

                    <p><span class="extrablod">Dr. Pam is board-certified</span> in internal medicine. For over 12
                        years, she’s studied nutrition.</p>

                    <p>She says Sarah's story is far from unique.</p>

                    <p>"Hidden Hunger is a ‘silent pandemic’ because it’s <span class="extrablod">more widespread</span>
                        than we think.</p>

                    <p>“Over 47 million Americans have ‘food insecurity’. </p>
                    <p>“That is, no consistent access to enough food for an active, healthy life,” Dr. Pam explains.</p>
                    <p>“No doubt, they’re suffering from Hidden Hunger.</p>
                    <p>“But Hidden Hunger is <span class="italic extrablod">not</span> about a lack of access,” she
                        continues. </p>
                    <p>“Plenty of ‘food secure’ Americans have <span class="extrablod">disturbingly low levels</span> of
                        essential nutrients, especially micronutrients.</p>
                    <p>“These are people who get plenty of calories.</p>
                    <p>“Yet, Hidden Hunger <span class="extrablod">is wrecking their lives, too.</span></p>
                    <p>“That’s why I’m certain <span class="extrablod"><u><i>way</i></u> more</span> than 47 million
                        Americans have Hidden Hunger."</p>
                    <p>The statistics are alarming:</p>
                </div>

                <div class="bg-[#F2F6FB] py-7 rounded-xl font-bold">
                    <ul class="pl-3 lg:space-y-1 space-y-1 semibold">
                        <!-- <li class="gap-2 items-start hidden lg:flex"><img src="/images/blk-check.svg" class="pt-1">
                            Approximately
                            95% of Americans don’t get enough fiber
                        </li> -->
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1">
                            Roughly 95% of Americans don’t get enough fiber
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1"> 65.5% of
                            Americans don’t get enough vitamin D
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1">An estimated
                            56% of preschool-aged kids have at least one micronutrient deficiency
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1"> Even
                            children
                            who appear healthy and well-fed suffer inside
                        </li>
                    </ul>

                    <img src="/images/fl-2.jpg" class="w-full py-6">

                    <div class="lg:space-y-4 space-y-2 px-4 font-bold">

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

                <h3 class="lg:text-4xl text-2xl extrablod mt-8">Why Modern Americans Are Starving in a Land of Plenty
                </h3>

                <img src="/images/fl-3.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p><span class="extrablod">The problem isn't lack of food.</span></p>
                    <p>It's lack of <u><i>nutrition</i></u> in the food we eat.</p>
                    <p>"Modern farming practices have <span class="extrablod">stripped nutrients</span> from our soil,"
                        explains Dr. Pam.</p>
                    <p>"Today, you need to eat <span class="extrablod">8 oranges</span> to get the <i>same</i> nutrition
                        as a single orange 50 years ago."</p>
                    <p>That's on top of the reality of busy family life.</p>
                    <p>Processed snacks, fast food meals, and the daily battles over eating anything green.</p>

                    <p>"As a parent, you aren't failing your kids," Dr. Pam stresses. </p>
                    <p>"The food system is failing them... <i>and</i> <span class="extrablod italic">you.</span></p>
                    <p>“Even if you try to provide your family with healthy options, it’s an <span
                            class="extrablod">uphill battle.</span></p>
                    <p>"In addition to bad soil, there's supply chain chaos and foods engineered for shelf-life, <span
                            class="extrablod italic">not</span> nutrition."</p>

                </div>

                <h3 class="lg:text-4xl text-2xl extrablod mt-8">Hidden Signs Most Parents (and Doctors) Miss</h3>

                <img src="/images/fl-4.jpg" class="w-full py-6 pb-0">
                <div class="lg:space-y-4 space-y-2 mb-8 bg-[#FAFAFA] lg:p-5 p-2 lg:py-9 py-4">

                    <p class="extrablod">Hidden Hunger isn’t obvious.</p>
                    <p>Instead, the symptoms <span class="extrablod">disguise themselves</span> as common childhood
                        issues.</p>

                    <p>Ones that most parents, and many doctors, dismiss as "normal":</p>

                    <p><span class="extrablod">Mood and behavior swings:</span> It's hard to control emotions and
                        behavior without good nutrition.</p>

                    <p><span class="extrablod">Difficulty focusing:</span> The brain needs specific nutrients to
                        function well.</p>

                    <p><span class="extrablod">Frequent illness:</span> Kids with nutrient deficiencies get sick more
                        and recover slower.</p>



                    <p><span class="extrablod">Energy crashes:</span> That 3pm meltdown isn't
                        tiredness. It's a sign of blood sugar instability from poor nutrition.</p>

                    <p><span class="extrablod">Sleep problems:</span> Many nutrients play crucial roles in sleep
                        regulation and quality.</p>



                    <p><span class="extrablod">Gut health issues:</span> Show as frequent tummy
                        aches, food sensitivities, or constipation.</p>



                    <p><span class="extrablod">"I thought Emma's issues</span> were just a normal part of growing up,"
                        Sarah says.</p>
                        <p> "The afternoon meltdowns, the trouble sleeping, constant colds... </p>
                    <p>"I never <span class="extrablod">connected it</span> to what she was eating."</p>
                </div>

                <h3 class="text-3xl lg:text-4xl extrablod mt-8">Breakthrough Changes Everything</h3>
                <img src="/images/fl-5.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p><span class="extrablod">After seeing thousands</span> of families struggle with Hidden Hunger,
                        Dr. Pam took action.</p>
                    <p>of families struggle with Hidden Hunger, Dr. Pam took action. <span class="extrablod">Nothing
                            worked.</span></p>
                    <p>Or if something <span class="extrablod italic underline">did</span> work, patients stopped <span
                            class="extrablod">because they hated it.</span></p>
                    <p>Eventually, it got to Dr. Pam. She started <span class="extrablod">questioning herself. </span>
                    </p>
                    <p>She wondered if she had gone down the <span class="extrablod">wrong path.</span> </p>
                    <p>Just as she thinking about a change... </p>
                    <p>She met someone. <span class="extrablod">An unexpected ally:</span> Anastasia Radzinskaya.</p>
                    <p>She's better known to her nearly 400 million fans as <span class="extrablod">Nastya,</span> star
                        of the top YouTube children’s series <i>Like Nastya.</i></p>
                    <p>By chance, Nastya had learned about Hidden Hunger.</p>
                    <p>Once she heard its dangers, <span class="extrablod">she immediately knew</span> she had to do
                        something to help.</p>
                    <p>"Some of the <i>Like Nastya</i> family might be suffering," she realized.</p>
                    <p>So Nastya co-founded <span class="extrablod">YOMZ.</span></p>
                    <p>It's a <span class="extrablod">mouthwatering gummy backed by science</span> to fill the nutrition
                        gaps facing millions of Americans every day.</p>
                    <p>Then Nastya partnered with Dr. Pam as the YOMZ medical advisor.</p>
                    <p>Dr. Pam explains. "First, it had to <span class="extrablod">taste amazing</span> - like a treat
                        kids would actually ask for. </p>
                    <p>“Otherwise, no one would want it.”</p>
                    <p>"But we <span class="extrablod">also refused to compromise</span> on nutrition. So we added the
                        power of <span class="extrablod">18 superfoods:</span></p>

                    <p>“Vitamins, antioxidants, micronutrients, and 5g of fiber.</p>
                    <p>“All the while keeping amazing taste as our #1 goal.</p>
                    <p>“No artificial colors. No fake flavors. No junk. </p>
                    <p>"Just pure, bioavailable nutrients in a form kids love."</p>
                    <p>She laughs. “And adults, too!”</p>
                    <p>So she and Nastya partnered with the <span class="extrablod">world’s #1 gummy manufacturer.
                        </span></p>
                    <p>Their goal? To make a gummy that would <span class="extrablod">lead the fight against Hidden
                            Hunger.</span></p>
                    <p>That’s why YOMZ OG Gummies come in 3 juicy flavors: <span class="extrablod">Peachy, Strawbeary,
                            and Berry Beary.</span></p>
                    <p>If you like your lips to pucker, there’s also an <span class="extrablod">eye-watering Sour</span>
                        form in those same flavors.</p>

                    <p>Each serving of YOMZ has the phytonutrient equal of <span class="extrablod">2 servings of fruits
                            and vegetables.</span></p>
                    <p>It's <span class="extrablod">also packed with</span> polyphenols, probiotics, postbiotics, and
                        other gut-supporting ingredients.</p>
                </div>

                <h3 class="text-3xl extrablod">Real Families, Real Results</h3>
                <p class=" mt-2 mb-4">The results have been remarkable.
                    Parents like you constantly share the
                    transformations in their families' health,
                    energy, and behavior.</p>

                <div class="rw lg:space-y-4 space-y-2 bg-[#F0F0F0] lg:p-6 p-4  mb-5">
                    <div class="flex gap-1">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                    </div>
                    <p class="font-bold">"Within a week, Emma was sleeping better," Sarah shares. "After two weeks, her
                        afternoon meltdowns disappeared. Her teacher even commented on how much better she was focusing
                        in class."
                    </p>
                    <p class="flex justify-between font-bold text-xl"> - Sarah <span
                            class="flex gap-1 text-sm items-center text-[#0EB400]"><img src="/images/subtract.svg"
                                class="h-4"> Verified Customer</span></p>
                </div>

                <h3 class="text-3xl extrablod mb-4">Other parents report similar experiences:</h3>

                <div class="rw lg:space-y-4 space-y-2 bg-[#F0F0F0] lg:p-6 p-4 mb-5">
                    <div class="flex gap-1">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                    </div>
                    <p class="font-bold">"My daughter actually asks for her YOMZ every morning. She thinks it's candy,
                        but I know she's getting real nutrition."
                    </p>
                    <p class="flex justify-between font-bold text-xl"> - Michelle K. <span
                            class="flex gap-1 text-sm items-center text-[#0EB400]"><img src="/images/subtract.svg"
                                class="h-4"> Verified Customer</span></p>
                </div>

                <div class="rw lg:space-y-4 space-y-2 bg-[#F0F0F0] lg:p-6 p-4 mb-5">
                    <div class="flex gap-1">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                    </div>
                    <p class="font-bold">"For the first time in years, we went through cold and flu season without
                        anyone getting sick."
                    </p>
                    <p class="flex justify-between font-bold text-xl"> - Denise R. <span
                            class="flex gap-1 text-sm items-center text-[#0EB400]"><img src="/images/subtract.svg"
                                class="h-4"> Verified Customer</span></p>
                </div>

                <div class="rw lg:space-y-4 space-y-2 bg-[#F0F0F0] lg:p-6 p-4 mb-5">
                    <div class="flex gap-1">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                    </div>
                    <p class="font-bold">"The difference in my son's school performance and focus is incredible. He's
                        more active, happier, and way less cranky."
                    </p>
                    <p class="flex justify-between font-bold text-xl">- Jennifer M. <span
                            class="flex gap-1 text-sm items-center text-[#0EB400]"><img src="/images/subtract.svg"
                                class="h-4"> Verified Customer</span></p>
                </div>

                <div class="lg:space-y-4 space-y-2 mb-8 bg-[#DCF0E1] pb-7 shadow-lg rounded-xl overflow-hidden">
                    <img src="/images/fl-6.jpg" class="w-full">
                    <h3 class="lg:text-4xl text-3xl  extrablod mt-6 px-5">Why YOMZ Is Different</h3>
                    <p class="px-5">YOMZ is <span class="extrablod">unlike</span> traditional supplements.</p>
                    <p class="px-5"><span class="extrablod italic underline">No</span> junk or fake anything.</p>
                    <p class="px-5">Crafted for the challenges your family faces.</p>
                    <p class="px-5">Yet, YOMZ isn’t a <span class="extrablod">traditional</span> candy gummy, either.
                    </p>
                    <p class="px-5">Even if it tastes like one. </p>
                    <p class="px-5"><span class="extrablod">Think of it as candy, <i>but better for you.</i></span></p>
                    <ul class="lg:space-y-1 space-y-1 pl-5">
                        <li class="flex gap-2 items-start"> <img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span>
                                <span class="font-bold lg:block hidden">Kid-Approved Taste:</span><span
                                    class="font-bold underline lg:hidden">Kid-Approved Taste:</span> To them, it’s
                                candy. To you, it’s their daily servings.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Real Nutrition:</span><span
                                    class="font-bold underline lg:hidden">Real Nutrition:</span> Delivers nutrients from
                                actual fruits and vegetables.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">18 Superfoods:</span><span
                                    class="font-bold underline lg:hidden">18 Superfoods:</span> From leafy greens to
                                berries, it’s a “farmer’s market in a gummy”.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Science-Backed:</span><span
                                    class="font-bold underline lg:hidden">Science-Backed:</span> Supported by a
                                nutrition expert and tested by millions.</span>
                        </li>

                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Gut Health Support:</span><span
                                    class="font-bold underline lg:hidden">Gut Health Support:</span> Meets FDA
                                guidelines as “excellent source of fiber”.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold underline">Family-Friendly:</span>
                                Nutritious, delicious, and safe for ages 2 to 102.</span>
                        </li>

                    </ul>
                </div>

                <h3 class="lg:text-4xl text-3xl extrablod mt-8">Don’t You Deserve Peace of Mind?</h3>
                <img src="/images/fl-7.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">

                    <p><span class="extrablod">The most rewarding part</span> of YOMZ? "Hearing from parents who finally
                        <span class="extrablod">have peace of mind,</span>" Dr. Pam says.
                    </p>
                    <p>"Even if every meal is a battle, parents are assured their kids <span class="extrablod">are still
                            getting essential nutrition."</span></p>

                    <p>For Sarah, YOMZ has been <span class="extrablod"> life-changing.</span></p>
                    <p>"I used to lie awake at night worrying about Emma's nutrition. </p>
                    <p>"Now I know whatever she eats during the day, YOMZ <span class="extrablod">is giving her</span>
                        what her body needs to grow and thrive."</p>
                    <p>"There's no risk to try these, either. </p>
                    <p>"That’s because YOMZ comes with a <span class="extrablod">90-Day Picky Momz 200% Happiness
                            Guarantee.</span>"</p>
                    <p>That's right. In 90 days...</p>

                    <p>If you don’t see improvements in your family's health... </p>
                    <p>Or if no one loves the taste, you get back double what you paid.</p>
                </div>

                <h3 class="lg:text-4xl text-3xl extrablod mt-8">A Mission Bigger Than Business</h3>
                <img src="/images/fl-8.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p>YOMZ wasn't created to solve just <i><u>one</u></i> family's problems.</p>
                    <p>Their mission is to <span class="extrablod"> end Hidden Hunger for 100 million people</span>.</p>


                    <p>"Every child - everyone - should have the chance to reach their <span class="extrablod">full
                            potential,</span>" Dr. Pam says.</p>
                    <p>"Hidden Hunger robs you of that...</p>

                    <p>"<span class="extrablod">By stealing</span> your energy, focus, immunity, and happiness.</p>
                    <p>"But we can change that.</p>
                    <p>"We have the <span class="extrablod">knowledge and tools</span>. Now we have a tasty gummy to do
                        just that - help everyone...</p>
                    <p>"Especially those who need it most."</p>
                    <p>Adds Nastya: “<span class="extrablod">YOMZ is for families.</span> So together, let’s <span
                            class="extrablod italic">smash</span> Hidden Hunger!”</p>
                    <p>If you’re struggling with picky eaters or constant illness... </p>
                    <p>If behavior troubles dominate your every day... </p>
                    <p>Or if you simply worry daily about your family's nutrition...</p>
                    <p class="extrablod">YOMZ offers hope.</p>
                    <p>"You're dealing with a system that makes it difficult to nourish your child.</p>
                    <p>"YOMZ is a tool to <span class="extrablod">help you succeed</span> <i>despite</i> those
                        challenges."</p>
                    <p>Besides their incredible 200% Happiness Guarantee, there’s <span class="extrablod">2 more
                            reasons</span> to try YOMZ.</p>
                    <p>First, it’s crafted with <span class="extrablod">patented blend of proprietary ingredients</span>
                        of the highest quality.</p>
                    <p>Second, it's made in the world’s <span class="extrablod">#1 gummy-making facility. </span></p>
                    <p>This state-of-the-art facility is <span class="extrablod">fully licensed</span> and regularly
                        inspected by the FDA. It operates in <span class="extrablod">full compliance</span> with current
                        Good Manufacturing Practices (cGMP).</p>
                </div>

                <h3 class="lg:text-4xl text-3xl extrablod mt-8">Taking Action</h3>
                <img src="/images/fl-9.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p>To discover more about YOMZ and Hidden Hunger, <span class="extrablod">visit the YOMZ official
                            website</span> </p>
                    <p>You'll find more information and take advantage of <span class="underline italic">current
                            promotional offers.</span> </p>
                    <p><span class="extrablod">YOMZ is backed by</span> scientific research, expert development, and kids' approval. </p>
                    <p>It represents a <span class="extrablod">breakthrough</span> in the fight against Hidden Hunger.</p>
                    <p>The <span class="extrablod">transformation</span> for Sarah and Emma has been profound. </p>
                    <p><span class="extrablod">"Emma’s thriving. </span> She sleeps better, focuses better, and rarely gets sick."</p>
                    <p>Sarah continues. "It’s changed me, too. I'm not worried about her nutrition anymore. I can actually <span class="extrablod">enjoy being her mom."</span> </p>
                    <p>Sarah adds this: “<span class="extrablod">Don’t fall</span> for the slick ads that promise the world… like I used to.</p>
                    <p>"As Dr. Pam told me once: <span class="italic">Sometimes, a simple change is all we need...'</span> </p>
                    <p>“She's right. <span class="extrablod">We tried many things</span> before we found YOMZ. </p>
                    <p>"We were always looking for the quick fix or to hit the jackpot.</p>
                    <p>"<span class="extrablod">Once we stopped overcomplicating it,</span> it all fell into place.</p>
                    <p>"So <span class="extrablod">I’m spreading the word</span> about Hidden Hunger and how YOMZ fights it.</p>
                    <p>"<span class="extrablod">Now that you know</span> this, it’s up to you as a good parent to do something. </p>
                    <p><span class="extrablod">"And it’s so easy.”</span> </p>

                </div>

                <p class="bg-[#EFEFEF] p-3 font-bold">As with any supplement, parents should consult with their child's
                    healthcare provider before making
                    changes to their nutrition routine.</p>

                <div class="lg:w-80 flex justify-center mt-7 mx-auto">
                    <!-- <a href="https://yomz-checkout-2.vercel.app/" target="_blank" class="hidden lg:flex justify-center h-full bg-black text-white w-140 lg:p-5 p-3 text-2xl font-extrabold uppercase rounded-2xl">
                        Try YOMZ Risk-Free
                    </a>
                    <a href="https://yomz-checkout-2.vercel.app/" target="_blank" class="lg:hidden flex justify-center h-full bg-[#0AA03C] text-white w-140 lg:p-5 p-3 text-3xl font-extrabold uppercase rounded-2xl">
                        Try YOMZ Risk-Free
                    </a> -->
                    <a href="https://yomz-checkout-2.vercel.app/" target="_blank"
                        class="flex justify-center w-full h-full bg-[#0AA03C] lg:hidden  rounded-full  extrablod text-white uppercase p-3 lg:text-xl text-3xl">
                        TRY YOMZ Risk-Free
                    </a>
                    <a href="https://yomz-checkout-2.vercel.app/"
                        class="flex text-center justify-center w-full h-full bg-[#0AA03C] hidden lg:block rounded-full extrablod text-white uppercase p-3 lg:text-xl text-3xl">
                        TRY YOMZ Risk-Free
                    </a>
                    <!-- <a href="https://yomz-checkout-2.vercel.app/"
                            class="lg:flex justify-center w-full h-full bg-black hidden rounded-full  extrablod text-white uppercase p-3 lg:text-xl text-lg">
                            Try YOMZ Risk-Free
                        </a>
                        <a href="https://yomz-checkout-2.vercel.app/"
                            class="flex justify-center w-full h-full bg-[#0AA03C] lg:hidden  rounded-full  extrablod text-white uppercase p-3 lg:text-xl text-3xl">
                            TRY YOMZ TODAY
                        </a> -->

                </div>

                <div class="lg:text-lg text-sm sources-text font-bold lg:space-y-1 space-y-2">
                    <p class="extrablod lg:mt-20 mt-5">Sources:</p>
                    <p class="break-all">https://pmc.ncbi.nlm.nih.gov/articles/PMC10918648/</p>
                    <p class="break-all">https://www.feedingamerica.org/hunger-in-america</p>
                    <p class="break-all">https://pubmed.ncbi.nlm.nih.gov/24724766/</p>
                    <p class="break-all">https://pubmed.ncbi.nlm.nih.gov/24724766/</p>
                    <p class="break-all">https://pmc.ncbi.nlm.nih.gov/articles/PMC9573946/</p>
                    <p class="break-all mb-5">https://pmc.ncbi.nlm.nih.gov/articles/PMC6124841/</p>
                </div>
            </div>

            <!-- Column right -->
            <div class="col-span-10 lg:col-span-3 lg:p-4 p-2 hidden lg:block">
                <div class="border-1 border-[#1EB9F0] p-2 bg-[#F3FBFE] rounded-xl">
                    <h4 class="text-center text-xl font-bold pt-4 extrablod">FINALLY GET YOUR STRENGTH
                        AND ENERGY BACK AFTER 40</h4>

                    <img src="/images/yomz-pack.png" class="w-full p-5">

                    <div class="bg-white  p-4 rounded-xl">

                        <p class="text-lg font-bold mb-2 extrablod">Customer Reviews</p>

                        <p class="flex gap-1 mb-2"><span class="flex">
                                <img src="/images/yl-star.svg" class="h-5">
                                <img src="/images/yl-star.svg" class="h-5">
                                <img src="/images/yl-star.svg" class="h-5">
                                <img src="/images/yl-star.svg" class="h-5">
                                <img src="/images/yl-star.svg" class="h-5">
                            </span> 4.8 out of 5</p>

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

                        <p class="text-lg extrablod mb-2 mt-4">By Feature</p>

                        <p class="flex justify-between items-center">Results <span class="flex items-center gap-0">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4 mr-1">
                                4.9</span></p>

                        <p class="flex justify-between items-center">Quality <span class="flex items-center gap-0">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4 mr-1">
                                4.8</span></p>

                        <p class="flex justify-between items-center">Safety <span class="flex items-center gap-0">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4 mr-1">
                                4.8</span></p>

                        <p class="flex justify-between items-center">Value <span class="flex items-center gap-0">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4">
                                <img src="/images/yl-star.svg" class="h-4 mr-1">
                                4.9</span></p>

                    </div>

                    <button
                        class="bg-black text-white w-full p-2 mt-3 mb-4 text-xl font-extrabold uppercase rounded-full">
                        Try YOMZ Risk-Free
                    </button>

                </div>
            </div>
        </div>
    </div>

    <!-- BodyContent -->

    <footer class="bg-[#1EB9F0] lg:py-7 py-3">
        <div class="mx-auto max-w-5xl text-center"><img src="/images/logo.png" class="max-w-30 mx-auto mb-4">
            <p class="text-white lg:text-lg text-sm">By filling out the field, you consent for YOMZ™
                to use automated technology, including texts and prerecorded messages, to contact you at the number
                and
                email provided about YOMZ™ offers. </p>
        </div>
    </footer>

</template>