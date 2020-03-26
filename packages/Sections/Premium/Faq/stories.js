import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumIntroSection from ".";

import imageTest from "../../../assets/svg/background/img_meeting.svg/index.js";

const items = {
    sectionTitle: "Frequently Asking Questions",
    title: "Have questions about VanHack Premium?",
    description: "Give us your email and we’ll get in touch.",
    image: require("../../../assets/svg/background/img_meeting.svg"),
}

const faqs = [
    {
        question: "Do I need Premium to get a Job through VH?",
        answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job.",
    },
    {
        question: "Are classes individual or group?",
        answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job.",
    },
    {
        question: "Does premium offer regular English classes and IELTS preparation?",
        answer: "No. Premium is a value-added service for people who wish to improve their professional skills. It does not guarantee you a job.",
    },
]

storiesOf("Sections|Premium/Faq", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f6f9", height: "100vh", padding: "24px" }}>
            <VHPremiumIntroSection
                sectionTitle={items.sectionTitle}
                title={items.title}
                description={items.description}
                image={imageTest}
                faqs={faqs}
            />
        </div>
    ));
