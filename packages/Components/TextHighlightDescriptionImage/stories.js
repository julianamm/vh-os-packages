import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHTitleHighlightDescriptionButtonImage from "./index";

import premiumInterview from "../../../assets/images/img_premium_interview.svg";
import premiumProfile from "../../../assets/images/img_premium_profile.svg";
import premiumSlack from "../../../assets/images/img_premium_slack.svg";
import premiumWebinars from "../../../assets/images/img_premium_webinars.svg";

storiesOf("Components|Text Highlight Description Image", module)
    .add("Default", () => (
        <Row>
            <VHTitleHighlightDescriptionButtonImage
                title="INTERVIEW CLASS"
                highlight="Learn how to ace an interview and improve your English skills at the same time"
                description="Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience."
                image={premiumInterview}
                reverse={false}
            />
        </Row>
    ))
    .add("Reverse", () => (
        <Row>
            <VHTitleHighlightDescriptionButtonImage
                title="INTERVIEW CLASS"
                highlight="Learn how to ace an interview and improve your English skills at the same time"
                description="Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience."
                image={premiumInterview}
                reverse={true}
            />
        </Row>
    ));