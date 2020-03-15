import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumIntroSection from ".";

import premiumHero from "../../../assets/images/img_hero_premium.png"


const features = [  
    {   
        icon1: require('../../../assets/icons/icon_interview.svg'),
        title1: "Improve your Interviewing Skills",
        description1: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
    },
    {
        icon2: require('../../../assets/icons/icon_profile.svg'),
        title2: "Craft a world-class professional profile",
        description2: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
    },
    {
        icon3: require('../../../assets/icons/icon_community.svg'),
        title3: "Network with a global community",
        description3: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
    }
]

storiesOf("Sections|Premium Intro", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f8fc", height: "100vh", padding: "24px" }}>
            <VHPremiumIntroSection
                title="VanHack Premium"
                highlight="Get ready to get hired abroad"
                description="Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more."
                label="JOIN VANHACK PREMIUM"
                image={premiumHero}
                icon1={features[0].icon1}
                title1={features[0].title1}
                description1={features[0].description1}
                icon2={features[1].icon2}
                title2={features[1].title2}
                description2={features[1].description2}
                icon3={features[2].icon3}
                title3={features[2].title3}
                description3={features[2].description3}
            />
        </div>
    ));