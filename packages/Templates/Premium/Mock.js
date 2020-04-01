let Mock = {};

Mock.intro = {
    items: {
        title: "VanHack Premium",
        highlight: "Get ready to get hired abroad",
        description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
        label: "JOIN VANHACK PREMIUM",
        image: require("../../assets/general/background/img_hero_premium.png"),
    },

    features: [  
        {   
            icon: "interview",
            title: "Improve your Interviewing Skills",
            description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
        },
        {
            icon: "profile",
            title: "Craft a world-class professional profile",
            description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
        },
        {
            icon: "community",
            title: "Network with a global community",
            description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
        }
    ]
};

Mock.services = {
    items: {
        sectionTitle: "How Premium Works"
    },

    interviewClass:  {
        title: "INTERVIEW CLASSES",
        highlight: "Learn how to ace an interview and improve your English skills at the same time",
        description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
        imgSvg: "interview",
        label: "watch a class",
        to: "https://youtu.be/UXJCtKh14JI",
        icon: "arrow-right",
    },

    otherServices:  [
        {
            title: "PROFILE REVIEW",
            highlight: "Have experts review your VanHack profile - improve all your profiles at once",
            description: "All improvements directly translate to your resume and LinkedIn Profile. Improve all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
            imgSvg: "profile",
            reverseTop: true,
            avatar: require("../../assets/general/UserTestimonials/marco_texeira.jpg"),
            sizeAvatar: "md",
            testimonial: '”The preparation provided made a huge difference in my success” - Marco Teixeira',
            color: "gray-90",
            reverseBottom: true,
        },
        {
            title: "PREMIUM SLACK GROUP",
            highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
            description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with #I-got-a_job. And most of all, inspire each other in your common quest.",
            imgSvg: "slack",
            reverseTop: false,
            avatar: require("../../assets/general/UserTestimonials/shara_shami.jpg"),
            sizeAvatar: "md",
            testimonial: '”All their tips were very valuable!” - Shara Shami',
            color: "gray-90",
            reverseBottom: false,
        },
        {
            title: "LIVE EXCLUSIVE WEBINARS",
            highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
            description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
            imgSvg: "webinar",
            reverseTop: true,
            avatar: require("../../assets/general/UserTestimonials/marcelo_blaz.jpg"),
            sizeAvatar: "md",
            testimonial: '”It was the best decision ever!” - Marcelo Blaz',
            color: "gray-90",
            reverseBottom: true,
        },
    ]
};

Mock.pricing = {
    items: {
        sectionTitle: "Pricing",
        icon: "medal",
        title: "30-day Money Back Guarantee",
        description: "If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked.",

    },
    cardItems: [
        {
            show: false,
            save: "",
            period: "Month",
            price: "65",
            unit: "CAD$/month",
            subscription: "Renews every month",
            cta: "Get Started",
            outlineBtn: true,
            note: "",
        },
        {
            show: true,
            save: "Save 15%",
            noHoverChip: true,
            transparentChip: true,
            period: "Quater",
            price: "65",
            unit: "CAD$/month",
            subscription: "Renews every month",
            cta: "Get Started",
            outlineBtn: true,
            note: "",
        },
        {
            show: true,
            save: "Save almost 25%",
            noHoverChip: true,
            transparentChip: true,
            round: true,
            period: "Semester",
            price: "65",
            unit: "CAD$/month",
            subscription: "Renews every month",
            cta: "Get Started",
            secondaryBtn: true,
            note: "The choice of 46% of premium members",
        },
    ]
};

Mock.success = {
    items: {
        sectionTitle: "Our Success Cases",
        title: "VANHACK PREMIUM CHANGES LIVES",
        highlight: "We've helped over 800 VanHackers get hired abroad in amazing companies in Canada and Europe.",
        imgBackgroundCards: "bubble",
        source: "https://www.youtube.com/embed/ZepkPNPQMrA",
        controls: true,
        poster: require("../../assets/svg/logo/vanhack_logo.svg/index.js"),
        width: '600px',
        height: '470px',
        cardLeft: 
            {
                title: "250+",
                description: "VanHack Premium Members have been hired internationally",
            },
        cardRight: 
            {
                title: "80%",
                description: "of Premium Members recommend Premium to their friends",
            },
        imgVideo: require("../../assets/general/background/img_video_premium_success_case.png"),
        iconVideo: "play",
        videoDescription: "How Marcelo got hired in Saskatoon, Canada as an Engineering Manager from Brazil",
        label: "See our youtube channel",
        to: "https://www.youtube.com/channel/UCmg0eAiV7f8LZf8vePG1tlA",
        iconLink: "arrow-right",
    }
};

Mock.hired = {
    items: {
        sectionTitle: "Premium Vanhackers Hired",
        btnLabel: "JOIN VANHACK PREMIUM"
    },
    candidates: [
        {   
            name: "Mitchell Watson",
            position: "Backend Developer",
            country: "from Brazil",
            userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
            flag: "canada",
        },
        {
            name: "Mitchell Watson",
            position: "Backend Developer",
            country: "from Brazil",
            userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
            flag: "brazil",
        },
        {
            name: "Mitchell Watson",
            position: "Backend Developer",
            country: "from Brazil",
            userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
            flag: "india",
        },
        {
            name: "Mitchell Watson",
            position: "Backend Developer",
            country: "from Brazil",
            userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
            flag: "south-africa",
        },
        {
            name: "Mitchell Watson",
            position: "Backend Developer",
            country: "from Brazil",
            userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
            flag: "germany",
        },
    ]
};

Mock.faq = {
    items: {
        sectionTitle: "Frequently Asked Questions",
        title: "Have questions about VanHack Premium?",
        description: "Give us your email and we’ll get in touch.",
        imgSvg: "meeting",
    },
    faqs: [
        {
            question: "Do I need Premium to get a Job through VH?",
            answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job.",
        },
        {
            question: "Are classes individual or group? What are the classes' schedules and timezone?",
            answer: "The interview practice is group classes. It runs twice a day from Monday to Thursday. From 9 am to 10:30 am and from 4 pm to 5:30 pm Pacific Time (PST). All classes are recorded and available on our VH Premium library.",
        },
        {
            question: "Does premium offer regular English classes and IELTS preparation?",
            answer: "No. Premium does not include either regular English classes or IELTS preparation. Classes are 100% focused on interview preparation. A great way to increase your confidence and interview performance as well as improve your vocabulary and overall English skills.",
        },
    ]
};

export default Mock;