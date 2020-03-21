import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumPricingSection from ".";

import iconMedal from "../../../../assets/icons/icon_medal.svg/index.jsx";

const cardItems = [
    {
        show: false,
        save: "",
        period: "Month",
        price: "65",
        unit: "CAD$/month",
        subscription: "Renew every month",
        cta: "Get Started",
        outlineBtn: true,
        note: "",
    },
    {
        show: true,
        save: "Save 15%",
        noHoverChip: true,
        transparentChip: true,
        period: "Month",
        price: "65",
        unit: "CAD$/month",
        subscription: "Renew every month",
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
        period: "Month",
        price: "65",
        unit: "CAD$/month",
        subscription: "Renew every month",
        cta: "Get Started",
        secondaryBtn: true,
        note: "The choice of 46% of premium members",
    },
];

storiesOf("Sections|Premium/Pricing", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "rgba(203, 248, 251, 0.44)", height: "100vh", padding: "24px" }}>
            <VHPremiumPricingSection
                sectionTitle="Pricing"
                source={iconMedal}
                title="30 Days Money Back Guarantee"
                description="If you're not getting incredible value and feeling more prepared than ever to get a job in Canada or Europe in the first 30 days, just talk to us and we'll refund 100% of your purchase, no questions asked."
                cardItems={cardItems}
                onEvent={(event) => console.log(event)}
            />
        </div>
    ));
