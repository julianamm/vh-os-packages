import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumPricingSection from ".";

storiesOf("Sections|Premium Pricing", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f8fc", height: "100vh", padding: "24px" }}>
            <VHPremiumPricingSection
            />
        </div>
    ));