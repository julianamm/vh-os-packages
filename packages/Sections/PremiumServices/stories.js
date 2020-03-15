import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumServicesSection from ".";

import premiumHero from "../../../assets/images/img_hero_premium.png"


storiesOf("Sections|Premium Services", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#ffffff", height: "100vh", padding: "24px" }}>
            <VHPremiumServicesSection
                
            />
        </div>
    ));