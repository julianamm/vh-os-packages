import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumIntroSection from ".";

const items = {
    title: "VanHack Premium",
    highlight: "Get ready to get hired abroad",
    description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
    label: "JOIN VANHACK PREMIUM",
    image: require("../../../assets/general/background/img_hero_premium.png"),
}

const features = [  
    {   
        icon: require('../../../assets/svg/icons/icon_interview.svg'),
        title: "Improve your Interviewing Skills",
        description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
    },
    {
        icon: require('../../../assets/svg/icons/icon_profile.svg'),
        title: "Craft a world-class professional profile",
        description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
    },
    {
        icon: require('../../../assets/svg/icons/icon_community.svg'),
        title: "Network with a global community",
        description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
    }
];

storiesOf("Sections|Premium/Intro", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f8fc", height: "100vh", padding: "24px" }}>
            <VHPremiumIntroSection
                title={items.title}
                highlight={items.highlight}
                description={items.description}
                label={items.label}
                image={items.image}
                features={features}
            />
        </div>
    ));
