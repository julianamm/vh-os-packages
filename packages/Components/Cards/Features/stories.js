import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../../Grid/index";
import VHCardFeatures from "./index";

const features = [
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
];

storiesOf("Components|Cards/Features", module)
    .add("Default", () => (
        <div style={{ padding: "24px" }}>
            <Row>
                <VHCardFeatures
                    features={features}
                />
            </Row>
        </div>
    ));