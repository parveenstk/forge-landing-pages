export const LANDING_1: LandingPageData = {
    header: {
        desktopText: "Try Yumzy Today & Get 60% Off",
        mobileText: "Try Yumzy Today & Get 60% Off",
        pageName: "LP-1"
    },

    meta: {
        title: '7 Warning Signs',
        description: 'Discover the 7 warning signs you’re missing in your business.',
        ogImage: '/images/lp1-preview.png',
    }
};

export const LANDING_2: LandingPageData = {
    header: {
        desktopText: "TRY Yumzy & GET UP TO 60% OFF",
        mobileText: "TRY Yumzy & GET UP TO 60% OFF",
        pageName: "LP-2"
    },

    meta: {
        title: '8 Shocking Reasons You Need This!',
        description: 'Discover 8 shocking reasons why this is a must-have. Click to learn more!',
        ogImage: '/images/lp2-preview.png',
    }
};

export const LANDING_3: LandingPageData = {
    header: {
        desktopText: "TRY Yumzy & GET UP TO 60% OFF",
        mobileText: "TRY Yumzy & GET UP TO 60% OFF",
        pageName: "LP-3"
    },

    meta: {
        title: 'Local Mom’s Shocking Discovery – You Won’t Believe This!',
        description: 'See how a local mom made a shocking discovery that is changing lives. Click to find out more!',
        ogImage: '/images/lp3-preview.png',
        ogUrl: 'https://forge-landing-pages.vercel.app/cfyomz/lp3/local-mom-shock-discovery'
    }
};

export const ratings = [
    { label: 'Results', rating: 4.9 },
    { label: 'Quality', rating: 4.8 },
    { label: 'Safety', rating: 4.8 },
    { label: 'Value', rating: 4.9 },
]

export const countdown: TimeUnit[] = [
    { value: '02', label: 'HRS' },
    { value: 53, label: 'MIN' },
    { value: 41, label: 'SEC' },
];

export const healthFacts = [
    "Roughly 95% of Americans don’t get enough fiber",
    "65.5% of Americans don’t get enough vitamin D",
    "An estimated 56% of preschool-aged kids have at least one micronutrient deficiency",
    "Even children who appear healthy and well-fed suffer inside"
];

export const verifiedCustomers = {
    customer1: {
        name: "Sarah",
        reviewText: 'Within a week, Emma was sleeping better," Sarah shares. "After two weeks, her afternoon meltdowns disappeared. Her teacher even commented on how much better she was focusing in class.',
    },

    customer2: {
        name: "Michelle K.",
        reviewText: "My daughter actually asks for her Yumzy every morning. She thinks it's candy, but I know she's getting real nutrition.",
    },

    customer3: {
        name: "Denise R.",
        reviewText: "For the first time in years, we went through cold and flu season without anyone getting sick.",
    },

    customer4: {
        name: "Jennifer M.",
        reviewText: "The difference in my son's school performance and focus is incredible. He's more active, happier, and way less cranky.",
    }
};

export const footerLinks = {
    LANDING_1: [
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC6316224/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC11547883/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC9102588/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC8546969",
        "https://www.ccjm.org/content/89/3/154",
        "https://www.sciencedirect.com/science/article/abs/pii/S0378512201002754",
        "https://pubmed.ncbi.nlm.nih.gov/38082300/"
    ],

    LANDING_3: [
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC10918648/",
        "https://www.feedingamerica.org/hunger-in-america",
        "https://pubmed.ncbi.nlm.nih.gov/24724766/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC9573946/",
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC6124841/",
    ],
}

export const PopUpOne = [
    "Better Family Nutrition",
    "Sharper Focus",
    "Improved Gut Health",
    "Stronger Immunity",
    "Balanced Moods"
]

export const errorContent = {
    emoji: "🧸",
    label: "OOPS!",
    heading: "404 – Page Lost",
    message: "It looks like this page went on a little adventure and got lost. 🗺️✨",
    extra: "Don’t worry, you didn’t break anything. Let’s help you get back to a safe place!",
    tip: "Tip for kids: If you’re not sure what to do, ask a grown-up to help you click the home button. 💖",
    primaryButton: "🏠 Go to Home",
    secondaryButton: "🔙 Go Back",
};

// redirected according to the landing-page (params)
export const goToCheckout = (lp: string) => {
    const route = useRoute();
    const router = useRouter();
    const value = String(route.params.v ?? "");

    // Match pattern like ch1, ch2, ch3, etc.
    const match = value.match(/^ch(\d+)$/);

    if (!match) {
        router.push("/error");
        return;
    }

    // Mapping (convert chN --> letter)
    const mapping: Record<string, { [key: string]: string }> = {
        lp1: {
            ch1: "a/lp1",
            ch2: "b/lp1",
            ch3: "c/lp1",
            ch4: "https://get.yumzy.com/sales-page/lp1"
        },
        lp2: {
            ch1: "a/lp2",
            ch2: "b/lp2",
            ch3: "c/lp2", 
            ch4: "https://get.yumzy.com/sales-page/lp2"
        },
        lp3: {
            ch1: "a/lp3",
            ch2: "b/lp3",
            ch3: "c/lp3",
            ch4: "https://get.yumzy.com/sales-page/lp3"
        }
    };

    const letter = mapping[lp] && mapping[lp][value]; // example: value="ch2" -> "b"

    if (!letter) {
        router.push("/error");
        return;
    }

    // special case ch4
    if (value === "ch4") window.open(letter, "_blank");
    else window.open(`https://get.yumzy.com/checkout-2-${letter}`, "_blank");
};
