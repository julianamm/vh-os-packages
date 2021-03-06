import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHTitleHighlightDescriptionButtonImage from "./index";

import SlackImg from "../../assets/general/background/img_premium_slack.png";

const premiumServices = [
    {
        title: "INTERVIEW CLASS",
        highlight: "Learn how to ace an interview and improve your English skills at the same time",
        description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
        imgSvg: "interview",
        reverse: false,
    },
    {
        title: "PROFILE REVIEW",
        highlight: "Have experts review your VanHack profile - improve all your profiles at once",
        description: "All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
        imgSvg: "profile",
        reverse: true,
    },
    {
        title: "PREMIUM SLACK GROUP",
        highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
        description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest.",
        imgSvg: require("../../assets/general/background/img_premium_slack.png"),
        reverse: false,
    },
    {
        title: "LIVE EXCLUSIVE WEBINARS",
        highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
        description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
        imgSvg: "webinar",
        reverse: true,
    },
];

storiesOf("Components|Text Highlight Description Image", module)
    .add("Default", () => (
        <Row style={{ padding: "24px"}}>
            <VHTitleHighlightDescriptionButtonImage
                title={premiumServices[0].title}
                highlight={premiumServices[0].highlight}
                description={premiumServices[0].description}
                imgSvg={premiumServices[0].imgSvg}
                reverse={premiumServices[0].reverse}
            />
        </Row>
    ))
    .add("Reverse", () => (
        <Row style={{ padding: "24px"}}>
            <VHTitleHighlightDescriptionButtonImage
                title={premiumServices[1].title}
                highlight={premiumServices[1].highlight}
                description={premiumServices[1].description}
                imgSvg={premiumServices[1].imgSvg}
                reverse={premiumServices[1].reverse}
            />
        </Row>
    ))
    .add("Multiply", () => (
        <Row style={{ padding: "24px"}} responsive>
            {premiumServices.map(service => (
                <Row marginBottom={50} responsive>
                    <VHTitleHighlightDescriptionButtonImage
                        title={service.title}
                        highlight={service.highlight}
                        description={service.description}
                        imgSvg={service.imgSvg}
                        reverse={service.reverse}
                    />
                </Row>
            ))}
        </Row>
    ));
    