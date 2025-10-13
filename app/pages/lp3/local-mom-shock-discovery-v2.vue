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

                <h1 class="lg:text-4xl text-3xl hidden lg:block"> Local Mom's Shocking Discovery: <span
                        class="extrablod">"My
                        Healthy-Looking
                        Family
                        Was Actually Malnourished"</span></h1>

                <h1 class="block lg:hidden text-[calc(6.5vw-0px)] leading-[calc(1em+1vw)]"><span
                        class="text-xl text-black p-1 underline font-semibold italic bg-[#FFEB00]">
                        Local Mom's Shocking Discovery:</span><br> <span class="extrablod">
                        "My Family <u><i>Looked</i></u> Healthy. But We Were Actually <span
                            class="text-[#E6193C]">Malnourished</span>."</span>
                </h1>

                <p
                    class="bg-[#FFEB00] text-black font-bold p-2 text-xl mt-4 lg:mr-15 mr-0 italic lg:not-italic hidden lg:block">
                    New Research Reveals Tens of Millions of Americans Suffer from 'Hidden Hunger'.</p>

                <p
                    class="block new-text-studies lg:hidden text-black font-bold p-0 text-sm mt-2 lg:mr-15 mr-0 italic lg:not-italic">47 million perfectly "healthy" Americans suffer from the same issue.
                </p>

                <p class="mt-3 font-bold italic lg:not-italic hidden lg:block"> - Even Those Who Look Perfectly Healthy
                </p>

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
                        <span class="extrabold flex">
                            Dr. Pam
                            <img src="/images/check.png" class="ml-1" />
                        </span>
                        <span>
                            Last updated {{ formattedDate }}
                        </span>
                    </div>
                </div>

                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p><span class="extrablod">DENVER, CO</span> - Sarah Owens took her 6-year-old daughter Emma for her
                        annual checkup. She expected to
                        hear the usual: "She's growing well, everything looks normal."

                        <span class="lg:inline block lg:mt-0 mt-3">Instead, she got a <span
                                class="extrablod">punch</span> to the gut.</span>
                    </p>

                    <p class="hidden lg:block">"Your daughter shows signs of many nutrient deficiencies," Dr. Pam
                        explained. "She's low in
                        vitamin C and vitamin D, and she's missing key micronutrients."</p>

                    <p class="lg:hidden">
                        "Your daughter shows signs of many <span class="extrablod">nutrient deficiencies,</span>" Dr.
                        Pam said. </p>
                    <p class="lg:hidden">"She's <span class="extrablod">low</span> in vitamins C and D and missing key
                        micronutrients."</p>

                    <p>The news devastated Sarah. Emma wasn't skinny or sickly-looking. She ate regularly - chicken
                        nuggets, mac & cheese, and grilled cheese sandwiches were her favorites.</p>

                    <p class="italic lg:not-italic">How could she be malnourished?</p>

                    <p class="hidden lg:block">"That’s when I learned about a ‘silent pandemic’ called <span
                            class="extrablod">Hidden
                            Hunger,"</span> Sarah recalls. "My child
                        looked healthy on the outside. But inside, her body was starving for real nutrition."</p>

                    <p class="lg:hidden">“That’s when I learned about a ‘silent pandemic’ called Hidden Hunger," Sarah
                        recalls.
                    </p>

                    <p>"Emma looked healthy on the outside. <span class="extrablod">But inside</span>, her body was
                        starving for real nutrition."</p>
                </div>
                
                <h2 class="text-4xl mb-6 hidden lg:inline"><span class="extrablod">The Silent Crisis Hurting</span> at
                    Least 47
                    Million Americans</h2>

                <h2 class="lg:text-4xl text-3xl  block mb-6 lg:hidden">The <span class="extrablod">Silent Crisis</span>
                    Harming Over 47 Million Americans</h2>

                <img src="/images/fl-1.jpg" class="w-full mb-5">

                <div class="lg:space-y-4 space-y-2 mb-8">

                    <p><span class="extrablod">Dr. Pam</span> is a pediatric nutritionist. She’s spent over 15 years
                        studying childhood nutrition. She
                        says that Sarah's story is far from unique.</p>

                    <p class="hidden lg:block">"I call Hidden Hunger the ‘silent pandemic’ because it’s more widespread
                        than we think. An estimated 47 million Americans have ‘food insecurity’. A lack of consistent
                        access to enough food daily
                        for an active, healthy life,” Dr. Pam explains. “Without a doubt, they’re suffering from Hidden
                        Hunger.
                    </p>

                    <p class="lg:hidden">"Hidden Hunger is a ‘silent pandemic’ because it’s more widespread than we
                        think.
                    </p>

                    <p class="lg:hidden">"Over 47 million Americans have <i>‘food insecurity’</i>. That is, a lack of
                        consistent access to enough
                        food for an active, healthy life,” Dr. Pam explains.
                    </p>

                    <p class="lg:hidden">“No doubt they’re suffering from Hidden Hunger."</p>

                    <p class="hidden lg:block">“Yet, Hidden Hunger is not only about a lack of consistent access to
                        enough food every day,” she
                        continues. “We see plenty of ‘food secure’ kids who get plenty of calories - sometimes too many.
                        But
                        they lack essential vitamins and nutrients, especially micronutrients. Things their growing
                        bodies
                        need.</p>

                    <p class="lg:hidden">“But Hidden Hunger is <span class="extrablod">not</span> about lack of access,”
                        she continues. “Plenty of
                        ‘food secure’ kids and their families have disturbingly <span class="extrablod">low
                            levels</span> of essential nutrients,
                        especially micronutrients...
                    </p>

                    <p class="lg:hidden">"These are people who get plenty of calories. Often too many, in fact.</p>
                    <p class="lg:hidden">"Yet, Hidden Hunger is wrecking their lives, too,"</p>

                    <p class="hidden lg:block">“That’s why I’m certain way more than 47 million Americans have Hidden
                        Hunger."</p>

                    <p class="lg:hidden">
                        “That’s why I’m certain <span class="extrablod"><i>way</i> more</span> than 47 million Americans
                        are suffering from Hidden Hunger."
                    </p>

                    <p>The statistics are alarming:</p>
                </div>

                <div class="bg-[#F2F6FB] py-7 rounded-xl font-bold">
                    <ul class="pl-3 lg:space-y-1 space-y-1 semibold">
                        <li class="gap-2 items-start hidden lg:flex"><img src="/images/blk-check.svg" class="pt-1">
                            Approximately
                            95% of Americans don’t get enough fiber
                        </li>
                        <li class="flex gap-2 items-start lg:hidden"><img src="/images/blk-check.svg" class="pt-1">
                            Roughly 95% of Americans don’t get enough fiber
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1"> 65.5% of
                            Americans don’t get enough vitamin D
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1">An estimated
                            56% of preschool-aged kids have at least one micronutrient deficiency
                        </li>
                        <li class="lg:flex gap-2 items-start hidden"><img src="/images/blk-check.svg" class="pt-1"> Even
                            children
                            who appear healthy and well-fed often suffer inside
                        </li>
                        <li class="lg:hidden flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1"> Even
                            children
                            who appear healthy and well-fed suffer inside
                        </li>
                    </ul>

                    <img src="/images/fl-2.jpg" class="w-full py-6">

                    <div class="lg:space-y-4 space-y-2 px-4 font-bold">
                        <p class="hidden lg:block">"Malnutrition doesn't always look skinny," Dr. Pam emphasizes. "In
                            fact, some of the most
                            undernourished children I see are actually overweight.</p>

                        <p class="lg:hidden"><span class="extrablod">"Malnutrition doesn't always look skinny,"</span>
                            stresses Dr. Pam. "In fact, some of the most undernourished children I see are <span
                                class="extrablod"><i><u>over</u></i>weight.</span>
                        </p>

                        <p class="hidden lg:block">“But let me be clear - it’s not just destroying kids’ lives…</p>
                        <p class="lg:hidden"><span class="extrablod">“<u>But let me be clear</u>:</span> it’s not just
                            destroying kids’ lives…</p>

                        <p class="hidden lg:inline">Hidden Hunger is also endangering the health of millions of adults.
                            So it’s a family problem,
                            not a kid’s problem."</p>

                        <p class="lg:hidden">"Hidden Hunger is <span class="extrablod">threatening</span> the health of
                            millions of adults, too.</p>
                        <p class="lg:hidden">"So it’s a family problem, not a kid problem."</p>

                    </div>

                </div>

                <h3 class="lg:text-4xl text-2xl extrablod mt-8">Why Modern Americans Are Starving in a Land of Plenty
                </h3>

                <img src="/images/fl-3.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p class="hidden lg:block"> <span class="extrablod">The problem isn't lack of food</span> - it's
                        lack of nutrition in the
                        food we eat.</p>
                    <p class="lg:hidden"><span class="extrablod">The problem isn't lack of food.</span>
                        It's lack of <u><i>nutrition</i></u> in the food we eat.</p>

                    <p class="hidden lg:block">"Modern farming practices have stripped nutrients from our soil,"
                        explains Dr. Pam. "Today, you’d
                        need to eat 8 oranges to get the same nutrition your grandparents got from a single orange 50
                        years ago."</p>

                    <p class="lg:hidden">
                        "Modern farming practices have stripped nutrients from our soil," explains Dr. Pam.
                    </p>

                    <p class="lg:hidden">
                        "Today, you need to eat <span class="extrablod">8 oranges</span> to get the <i>same</i>
                        nutrition our grandparents got from a single
                        orange 50 years ago."
                    </p>
                    <p>That's on top of the reality of busy family life. Processed snacks, fast food meals, and the
                        daily
                        battles over eating anything green.</p>

                    <p class="hidden lg:block">"As a parent, you aren't failing your kids," Dr. Pam stresses. "The food
                        system is failing them.
                        Even if you’re a parent who tries to provide healthy options, you’re fighting an uphill battle.
                        There's depleted soil, long shipping times, and foods engineered for shelf-life, not nutrition."
                    </p>

                    <p class="lg:hidden">
                        "As a parent, you aren't failing your kids," Dr. Pam stresses. "The food system is failing
                        them... <i>and <span class="extrablod">you.</span></i>
                    </p>

                    <p class="lg:hidden">“Even if you you try to provide your family with healthy options, it’s an
                        <span class="extrablod">uphill battle.</span>
                    </p>
                    <p>"In addition to the bad soil, there's long shipping times and foods engineered for shelf-life,
                        not nutrition."</p>

                </div>

                <h3 class="lg:text-4xl text-2xl extrablod mt-8">Hidden Signs Most Parents (and Doctors) Miss</h3>

                <img src="/images/fl-4.jpg" class="w-full py-6 pb-0">
                <div class="lg:space-y-4 space-y-2 mb-8 bg-[#FAFAFA] lg:p-5 p-2 lg:py-9 py-4">
                    <p class="hidden lg:block">Hidden Hunger doesn't announce itself with obvious symptoms. Instead, it
                        disguises itself as
                        common
                        childhood issues. Ones that most parents, and many doctors, dismiss as "normal":</p>

                    <p class="lg:hidden">Hidden Hunger doesn't show obvious symptoms. Instead, it disguises itself as
                        common issues. </p>

                    <p class="lg:hidden">Ones that most parents, and many doctors, dismiss as "normal":</p>

                    <p><span class="extrablod">Mood and behavior swings:</span> It's hard to control emotions and
                        behavior without good nutrition.</p>

                    <p><span class="extrablod">Difficulty focusing:</span> The brain,
                        especially a developing one, needs
                        specific nutrients to function well.</p>

                    <p><span class="extrablod">Frequent illness:</span> Kids with nutrient deficiencies get sick more
                        and recover slower.</p>

                    <p class="hidden lg:block"><span class="extrablod">Energy crashes:</span> That 3pm meltdown isn't
                        tiredness. It's often a
                        sign of blood sugar instability from
                        poor nutrition.</p>

                    <p class="lg:hidden"><span class="extrablod">Energy crashes:</span> That 3pm meltdown isn't
                        tiredness. It's a sign of blood sugar instability from poor nutrition.</p>

                    <p><span class="extrablod">Sleep problems:</span> Many nutrients play crucial roles in sleep
                        regulation and quality.</p>

                    <p class="hidden lg:block"><span class="extrablod">Gut health issues:</span> They show up as
                        frequent tummy aches,
                        constipation, or food sensitivities.</p>

                    <p class="lg:hidden"><span class="extrablod">Gut health issues:</span> Show as frequent tummy
                        aches, food sensitivities, or constipation.</p>

                    <p class="hidden lg:block">"I thought Emma's issues were due to her personality," Sarah reflects.
                        "The afternoon meltdowns,
                        the
                        trouble sleeping, always catching colds. I thought that was just how she was. I never connected
                        it
                        to what she was eating."</p>

                    <p class="lg:hidden">
                        "<span class="extrablod">I thought</span> Emma's issues were due to her personality," Sarah
                        says. "The afternoon meltdowns, the trouble sleeping, constant colds... </p>
                    <p class="lg:hidden">"I never <span class="extrablod">connected</span> it to what she was eating."
                    </p>
                </div>

                <h3 class="text-4xl extrablod mt-8">Breakthrough Discovery Changes Everything</h3>
                <img src="/images/fl-5.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p>After seeing thousands of families struggle with Hidden Hunger, Dr. Pam took action. She
                        partnered
                        with an unexpected ally:</p>

                    <p class="hidden lg:block">Anastasia Radzinskaya. She's better known to her nearly 400 million fans
                        as Nastya, star of the
                        top
                        YouTube children’s series Like Nastya.</p>

                    <p class="lg:hidden">Anastasia Radzinskaya. </p>

                    <p class="lg:hidden">She's better known to her nearly <span class="extrablod">400 million</span>
                        fans as Nastya, star of the top YouTube children’s series <span class="extrablod"><i>Like
                                Nastya.</i></span></p>

                    <p>When Nastya learned about Hidden Hunger, she knew she had to help. "Some of the <span
                            class="lg:not-italic italic">Like Nastya</span>
                        family
                        might be suffering," she realized.</p>

                    <p class="lg:hidden">Together, Dr. Pam and Nastya created
                        YOMZ. It's a <span class="extrablod">mouthwatering</span> gummy
                        backed by science to fill the nutrition
                        gaps facing millions of Americans
                        every day.</p>

                    <p class="hidden lg:block">"First, it had to taste amazing - like a treat kids would actually ask
                        for," Dr. Pam explains.
                        “Otherwise, no one would want it.”</p>

                    <p class="lg:hidden">"First, it had to taste amazing - a treat kids would actually ask for,"
                        Dr. Pam explains. </p>

                    <p class="lg:hidden">“It <span class="extrablod">didn’t make sense</span> to make something healthy
                        but not delicious. Otherwise,
                        who’d want it?”</p>

                    <p class="lg:hidden">"But we <span class="extrablod">refused</span> to compromise on nutrition. No
                        artificial dyes, no artificial flavors, no
                        junk.
                        Just pure, bioavailable nutrients in a form both kids and adults would love."</p>

                    <p class="hidden lg:block">So she and Nastya partnered with the world’s #1 gummy manufacturer. Their
                        mission? To make a
                        gummy
                        that would lead the fight against Hidden Hunger.</p>

                    <p class="lg:hidden">So Dr. Pam and Nastya partnered with the world’s #1 gummy manufacturer. </p>
                    <p class="lg:hidden"><span class="extrablod">Their mission?</span> Make a gummy that would lead the
                        fight against Hidden Hunger.
                    </p>

                    <p class="hidden lg:block">That’s why YOMZ OG Gummies come in 3 mouthwatering flavors: Peachy,
                        Strawbeary, and Berry Beary.
                        And
                        if you like your lips to pucker, those same flavors also come in an eye-watering Sour form.</p>

                    <p class="lg:hidden">That’s why YOMZ <span class="extrablod">OG Gummies</span> come in 3
                        mouthwatering flavors: Peachy, Strawbeary, and Berry Beary.
                    </p>

                    <p class="lg:hidden">And if you like your lips to pucker, those same flavors also come in an
                        eye-watering <span class="extrablod">Sour</span> form.
                    </p>

                    <p class="hidden lg:block">Each serving of YOMZ has the phytonutrient equal of 2 servings of fruits
                        and vegetables. It's
                        also
                        packed with essential vitamins, fiber, antioxidants, polyphenols, and gut-supporting
                        ingredients.</p>

                    <p class="lg:hidden">Each serving of YOMZ has the phytonutrient equal of 2 servings of fruits and
                        vegetables.
                    </p>

                    <p class="lg:hidden">It's also <span class="extrablod">packed with</span> essential vitamins, 5g of
                        fiber, antioxidants, polyphenols, and other
                        gut-supporting ingredients</p>

                </div>

                <h3 class="text-3xl extrablod">Real Families, Real Results</h3>
                <p class=" mt-2 mb-4">The results have been remarkable. Parents like you are reporting
                    transformations in their families'
                    health, energy, and behavior.</p>

                <div class="rw lg:space-y-4 space-y-2 bg-[#F0F0F0] lg:p-6 p-4  mb-5">
                    <div class="flex gap-1">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                        <img src="/images/yl-star.svg" class="h-4">
                    </div>
                    <p class="font-bold">"Within a week, Emma was sleeping better," Sarah shares. "After two weeks, her
                        afternoon
                        meltdowns disappeared. One month in, her teacher commented on how much better she was focusing
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
                    <p class="px-5 hidden lg:block">YOMZ is unlike traditional children's vitamins. They're not loaded
                        with sugar or
                        artificial
                        ingredients. They're crafted for the challenges your family faces:</p>

                    <p class="lg:hidden px-5">YOMZ is <span class="extrablod">unlike</span> traditional supplements.
                        It's not loaded with junk or
                        artificial
                        ingredients. It's
                        crafted for the challenges your family faces:</p>

                    <p class="lg:hidden px-5">Yet, YOMZ isn’t a traditional candy gummy, either. <span
                            class="extrablod italic">Even if it tastes like
                            one.</span>
                        Think of it as
                        candy, but better for you.</p>

                    <ul class="lg:space-y-1 space-y-1 pl-5">
                        <li class="flex gap-2 items-start"> <img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Kid-Approved Taste:</span><span
                                    class="font-bold underline lg:hidden">Kid-Approved Taste:</span> To them, it’s
                                candy. To you, it’s
                                their
                                daily servings.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Real Nutrition:</span><span
                                    class="font-bold underline lg:hidden">Real Nutrition:</span> Delivers nutrients from
                                actual fruits
                                and vegetables.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">18 Superfoods:</span><span
                                    class="font-bold underline lg:hidden">18 Superfoods:</span> From leafy greens to
                                berries, it’s a
                                “farmer’s
                                market in a gummy”.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Expert-Developed:</span><span
                                    class="font-bold underline lg:hidden">Expert-Developed:</span> Created by an
                                award-winning
                                nutritionist
                                and tested by millions.</span>
                        </li>

                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span><span class="font-bold lg:block hidden">Gut Health Support:</span><span
                                    class="font-bold underline lg:hidden">Gut Health Support:</span> Meets FDA
                                guidelines as “excellent
                                source
                                of fiber”.</span>
                        </li>
                        <li class="flex gap-2 items-start"><img src="/images/blk-check.svg" class="pt-1 h-5">
                            <span class="lg:block hidden"><span
                                    class="font-bold lg:block hidden">Family-Friendly:</span> Safe and beneficial for
                                ages 2 to 102.</span>
                            <span class="lg:hidden"><span class="font-bold underline lg:hidden">Family-Friendly:</span>
                                Nutritious, delicious, and safe for ages 2 to 102.</span>
                        </li>

                    </ul>
                </div>

                <h3 class="lg:text-4xl text-3xl extrablod mt-8">Don’t You Deserve Peace of Mind?</h3>
                <img src="/images/fl-7.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p class="hidden lg:block">"The most rewarding part of developing YOMZ? Hearing from parents who
                        finally have peace of
                        mind,"
                        <span class="extrablod">Dr. Pam reflects.</span> "Even if every meal is a battle, kids are still
                        getting essential nutrition."
                    </p>

                    <p class="lg:hidden">"The most rewarding part of developing YOMZ? Hearing from parents who finally
                        have peace of mind,"
                        <span class="extrablod">Dr. Pam says.</span>
                    </p>
                    <p class="lg:hidden">"Even if every meal is a battle, parents are assured their kids are <span
                            class="extrablod">still</span> getting essential nutrition."
                    </p>

                    <p>For Sarah, YOMZ has been life-changing. "I used to lie awake at night worrying about Emma's
                        nutrition. Now I know that no matter what she eats during the day, <span
                            class="hidden lg:inline">she's getting</span>
                        <span class="lg:hidden">YOMZ is giving her</span> what her body
                        needs
                        to grow and thrive."
                    </p>
                    <p class="lg:hidden">For Sarah, YOMZ has been life-changing. "I used to lie awake at night worrying
                        about Emma's
                        nutrition. Now I know that <span class="extrablod">no matter what</span> she eats during the
                        day, <span class="hidden lg:inline">she's getting</span>
                        <span class="lg:hidden">YOMZ is giving her</span> what her body
                        needs
                        to grow and thrive."
                    </p>

                    <p class="hidden lg:block">There’s no risk to try these delicious, nutritious gummies. That’s
                        because <span class="extrablod">YOMZ comes with a 90-Day
                            Picky Momz 200% Happiness Guarantee."</span> If you don’t see improvements in your family's
                        health or if no
                        one loves the taste, you get back <span class="extrablod">double</span> what you paid.</p>

                    <p class="lg:hidden">
                        You risk nothing to try these delicious, nutritious gummies. That’s because <span
                            class="extrablod">YOMZ comes with a
                            90-Day Picky Momz 200% Happiness Guarantee."</span>
                    </p>

                    <p class="lg:hidden">If you don’t see improvements in your family's health or if no one loves the
                        taste, you get back
                        <span class="extrablod">double</span> what you paid.
                    </p>
                </div>

                <h3 class="lg:text-4xl text-3xl extrablod mt-8">A Mission Bigger Than Business</h3>
                <img src="/images/fl-8.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p>Dr. Pam and Nastya didn't create YOMZ to solve just <i><u>one</u></i> family's problems.

                        <span class="hidden lg:inline"> Their mission is to end Hidden Hunger for <span
                                class="extrablod">100 million</span> people
                            worldwide.</span>
                    </p>

                    <p class="lg:hidden">Their mission is to end Hidden Hunger for <span class="extrablod"> 100 million
                            people</span> worldwide.</p>

                    <p class="hidden lg:block">"Every child deserves to reach their full potential," Dr. Pam states.
                        "Hidden Hunger robs
                        children—everyone, actually—of energy, focus, immunity, and happiness. We have the knowledge and
                        tools to fix this. Now we have to deliver proper nutrition to the families who need it most."
                    </p>

                    <p class="lg:hidden">"Every child deserves to reach their full potential," Dr. Pam says. "Hidden
                        Hunger robs children... everyone, actually... of energy, focus, immunity, and happiness.
                    </p>

                    <p class="lg:hidden">
                        We have the knowledge and tools to fix this. Now we have to deliver <span
                            class="extrablod">proper nutrition</span> to the
                        families who need it most."
                    </p>

                    <p>Adds Nastya: “YOMZ is for families. So together, let’s smash Hidden <span
                            class="hidden lg:inline">Hunger.</span><span class="lg:hidden">Hunger!</span>”</p>

                    <p class="hidden lg:block">If you’re struggling with picky eaters or constant illness... If
                        behavioral challenges dominate
                        your
                        every day... Or if you simply worry daily about your family's nutrition...</p>

                    <p class="lg:hidden">If you’re struggling with picky eaters or constant illness... If behavior
                        troubles dominate your every day... Or if you simply worry daily about your family's
                        nutrition...</p>

                    <p class="hidden lg:block">YOMZ offers hope.</p>
                    <p class="lg:hidden extrablod">YOMZ offers hope.</p>

                    <p>"You're not failing as a parent," Dr. Pam emphasizes. "You're dealing with a system that makes it
                        <span class="hidden lg:inline">difficult</span> <span
                            class="lg:hidden extrablod">difficult</span> to nourish your child. YOMZ is a tool to help
                        you succeed despite those challenges."
                    </p>

                    <p>"You're not failing as a parent," Dr. Pam emphasizes. "You're dealing with a system that makes it
                        difficult to nourish your child. YOMZ is a tool to help you succeed despite those challenges."
                    </p>
                    <p>Besides their incredible 200% Happiness Guarantee, there’s <span class="hidden lg:inline">2 more
                            reasons</span> <span class="lg:hidden extrablod">2 more reasons</span> to try YOMZ.</p>

                    <p>First, it’s crafted with patented and proprietary ingredients of the highest quality.

                        <span class="lg:inline block lg:mt-0 mt-3"> And second,
                            it's made in the world’s #1 gummy-making facility. This state-of-the-art facility is fully
                            licensed
                            and regularly inspected by the FDA. It operates in full compliance with current Good
                            Manufacturing
                            Practices (cGMP).</span>
                    </p>
                </div>

                <h3 class="lg:text-4xl text-3xl extrablod mt-8">Taking Action</h3>
                <img src="/images/fl-9.jpg" class="w-full py-6">
                <div class="lg:space-y-4 space-y-2 mb-8">
                    <p>To discover more about YOMZ and Hidden Hunger, visit the YOMZ official website. You'll find more
                        information and <span class="hidden lg:inline">take advantage</span><span
                            class="lg:hidden extrablod">take advantage</span> of current promotional offers.</p>

                    <p>YOMZ is backed by scientific research, expert development, and millions of kids' approval. It
                        represents a breakthrough in the fight against Hidden Hunger.</p>

                    <div class="hidden lg:block lg:space-y-4 space-y-2">
                        <p>For Sarah and Emma, the transformation has been <span
                                class="hidden lg:inline">profound</span><span
                                class="lg:hidden extrablod">profound</span>. "Emma is thriving now. She sleeps
                            better,
                            focuses better, and rarely gets sick,"</p>

                        <p>Sarah explains. "It’s changed me, too. I'm not worried about her nutrition anymore. I can
                            actually
                            enjoy being <span class="hidden lg:inline">her mom.</span><span
                                class="lg:hidden extrablod">her mom.</span>"</p>

                        <p>Sarah had one last thing to say: “Don’t fall for the slick ads that promise the world… like I
                            used
                            to. We tried many things before we found YOMZ. So I’m spreading the word about Hidden Hunger
                            and
                            how
                            YOMZ fights it.</p>

                        <p>Now that you know this, <span class="hidden lg:inline">it’s up to you</span><span
                                class="lg:hidden extrablod">it’s up to you</span> as a good parent to do something about
                            it. And it’s so
                            easy.”</p>
                    </div>

                    <div class="lg:hidden lg:space-y-4 space-y-2">
                        <p>The transformation for Sarah and Emma has been <span
                                class="hidden lg:inline">profound</span><span
                                class="lg:hidden extrablod">profound</span>. "She’s thriving. She sleeps better,
                            focuses better, and rarely gets sick,"</p>

                        <p>Sarah continues. "It’s changed me, too. I'm not worried about her nutrition anymore. I can
                            actually enjoy being <span class="hidden lg:inline">her mom.</span><span
                                class="lg:hidden extrablod">her mom.</span>"</p>

                        <p>Sarah had one last thing to say: “Don’t fall for the slick ads that promise the world… like I
                            used to.</p>

                        <p>“We tried many things before we found YOMZ. So I’m spreading the word about Hidden Hunger and
                            how YOMZ fights it.</p>

                        <p>Now that you know this, <span class="hidden lg:inline">it’s up to you</span><span
                                class="lg:hidden extrablod">it’s up to you</span> as a good parent to do something. And
                            it’s so easy.”
                        </p>
                    </div>

                </div>

                <p class="bg-[#EFEFEF] p-3 font-bold">As with any supplement, parents should consult with their child's
                    healthcare provider before making
                    changes to their nutrition routine.</p>

                <div class="w-full flex justify-center mt-7">
                    <a href="https://yomz-checkout-2.vercel.app/" target="_blank" class="hidden lg:flex justify-center h-full bg-black text-white w-140 lg:p-5 p-3 text-2xl font-extrabold uppercase rounded-2xl">
                        Try YOMZ Risk-Free
                    </a>
                    <a href="https://yomz-checkout-2.vercel.app/" target="_blank" class="lg:hidden flex justify-center h-full bg-[#0AA03C] text-white w-140 lg:p-5 p-3 text-3xl font-extrabold uppercase rounded-2xl">
                        Try YOMZ Risk-Free
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