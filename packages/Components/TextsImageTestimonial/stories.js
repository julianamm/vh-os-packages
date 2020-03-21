import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHTextsImageTestimonial from "./index";

const premiumServices = [
    {
        title: "INTERVIEW CLASS",
        highlight: "Learn how to ace an interview and improve your English skills at the same time",
        description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
        image: require("../../assets/svg/background/img_premium_interview.svg"),
        reverseTop: false,
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        sizeAvatar: "md",
        testimonial: '”All their tips were very valuable!” - First Last Name',
        color: "gray-90",
        reverseBottom: false,
    },
    {
        title: "PROFILE REVIEW",
        highlight: "Have experts review your VanHack profile - improve all your profiles at once",
        description: "All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
        image: require("../../assets/svg/background/img_premium_interview.svg"),
        reverseTop: true,
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        sizeAvatar: "md",
        testimonial: '”All their tips were very valuable!” - First Last Name',
        color: "gray-90",
        reverseBottom: true,
    },
    {
        title: "PREMIUM SLACK GROUP",
        highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
        description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest.",
        image: require("../../assets/svg/background/img_premium_interview.svg"),
        reverseTop: false,
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        sizeAvatar: "md",
        testimonial: '”All their tips were very valuable!” - First Last Name',
        color: "gray-90",
        reverseBottom: false,
    },
    {
        title: "LIVE EXCLUSIVE WEBINARS",
        highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
        description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
        image: require("../../assets/svg/background/img_premium_interview.svg"),
        reverseTop: true,
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        sizeAvatar: "md",
        testimonial: '”All their tips were very valuable!” - First Last Name',
        color: "gray-90",
        reverseBottom: true,
    },
];

storiesOf("Components|Texts Image Testimonial", module)
    .add("Default", () => (
        <Row style={{ padding: "24px"}}>
            <VHTextsImageTestimonial
                title={premiumServices[0].title}
                highlight={premiumServices[0].highlight}
                description={premiumServices[0].description}
                image={premiumServices[0].image}
                reverseTop={premiumServices[0].reverseTop}
                avatar={premiumServices[0].avatar}
                sizeAvatar={premiumServices[0].label}
                testimonial={premiumServices[0].testimonial}
                color={premiumServices[0].color}
                reverseBottom={premiumServices[0].reverseBottom}
            />
        </Row>
    ))
    .add("Reverse", () => (
        <Row style={{ padding: "24px"}}>
            <VHTextsImageTestimonial
                title={premiumServices[1].title}
                highlight={premiumServices[1].highlight}
                description={premiumServices[1].description}
                image={premiumServices[1].image}
                reverseTop={premiumServices[1].reverseTop}
                avatar={premiumServices[1].avatar}
                sizeAvatar={premiumServices[1].label}
                testimonial={premiumServices[1].testimonial}
                color={premiumServices[1].color}
                reverseBottom={premiumServices[1].reverseBottom}

            />
        </Row>
    ))
    .add("Multiply", () => (
        <Row style={{ padding: "24px"}}>
            {premiumServices.map(service => (
                <VHTextsImageTestimonial
                    title={service.title}
                    highlight={service.highlight}
                    description={service.description}
                    image={service.image}
                    reverseTop={service.reverseTop}
                    avatar={service.avatar}
                    sizeAvatar={service.label}
                    testimonial={service.testimonial}
                    color={service.color}
                    reverseBottom={service.reverseBottom}
                />
            ))}
        </Row>
    ));
    