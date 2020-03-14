import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHFeaturesCard from "./index";

const features = [  
    {   
        icon: require('../../../assets/icons/icon_interview.svg'),
        title: "Improve your Interviewing Skills",
        description: "We help you learn the cultural and professional nuances with 40+ hours of live classes every month"
    },
    {
        icon: require('../../../assets/icons/icon_profile.svg'),
        title: "Craft a world-class professional profile",
        description: "Our experts will help you update your profile. Using the right  format can make all the difference in your quest for an international job"
    },
    {
        icon: require('../../../assets/icons/icon_community.svg'),
        title: "Network with a global community",
        description: "Join thousands of motivated premium members from all over the world. Learn from your peers in a judgement-free environment"
    }
]

storiesOf("Components|Features Card", module)
    .add("Types", () => (
        <Row>
            <VHFeaturesCard
                features={features}
            />
        </Row>
    ));