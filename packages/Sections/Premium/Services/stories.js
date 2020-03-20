import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumServicesSection from ".";

const premiumInterviewClass = {
    title: "INTERVIEW CLASS",
    highlight: "Learn how to ace an interview and improve your English skills at the same time",
    description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
    image: require("../../../../assets/images/img_premium_interview.svg"),
    label: "watch a class",
    to: "#",
    source: require("../../../../assets/icons/icon_arrow_right.svg"),
};

const premiumOtherServices = [
    {
        title: "PROFILE REVIEW",
        highlight: "Have experts review your VanHack profile - improve all your profiles at once",
        description: "All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
        image: require("../../../../assets/images/img_premium_profile.svg"),
        reverseTop: true,
        avatar: require("../../../../assets/images/premium_testimonial_marco_teixeira.jpg"),
        sizeAvatar: "md",
        testimonial: '”The preparation provided made a huge difference in my success” - Marco Teixeira ',
        color: "gray-90",
        reverseBottom: true,
    },
    {
        title: "PREMIUM SLACK GROUP",
        highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
        description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest.",
        image: require("../../../../assets/images/img_premium_slack.png"),
        reverseTop: false,
        avatar: require("../../../../assets/images/premium_testimonial_shara_shami.jpg"),
        sizeAvatar: "md",
        testimonial: '”All their tips were very valuable!” - Shara Shami',
        color: "gray-90",
        reverseBottom: false,
    },
    {
        title: "LIVE EXCLUSIVE WEBINARS",
        highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
        description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
        image: require("../../../../assets/images/img_premium_webinars.svg"),
        reverseTop: true,
        avatar: require("../../../../assets/images/premium_testimonial_marcelo_blaz.jpg"),
        sizeAvatar: "md",
        testimonial: '”It was the best decision ever!” - Marcelo Blaz',
        color: "gray-90",
        reverseBottom: true,
    },
];

storiesOf("Sections|Premium/Services", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#fffffff", height: "100vh", padding: "24px" }}>
            <VHPremiumServicesSection
                title={premiumInterviewClass.title}
                highlight={premiumInterviewClass.highlight}
                description={premiumInterviewClass.description}
                image={premiumInterviewClass.image}
                label={premiumInterviewClass.label}
                to={premiumInterviewClass.to}
                source={premiumInterviewClass.source}
                premiumOtherServices={premiumOtherServices}
            />
        </div>
    ));
