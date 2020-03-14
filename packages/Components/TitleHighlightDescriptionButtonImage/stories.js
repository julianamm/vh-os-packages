import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHTitleHighlightDescriptionButtonImage from "./index";

import premiumHero from "../../../assets/images/img_hero_premium.png";

storiesOf("Components|Title Highlight Description Button Image", module)
    .add("Types", () => (
        <Row>
            <VHTitleHighlightDescriptionButtonImage
                title="VanHack Premium"
                highlight="Get ready to get hired abroad"
                description="Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more."
                label="JOIN VANHACK PREMIUM"
                image={premiumHero}
            />
        </Row>
    ));