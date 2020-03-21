import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHTitleHighlightDescriptionButtonImage from "./index";

const items = {
    title: "VanHack Premium",
    highlight: "Get ready to get hired abroad",
    description: "Acquire career skills that will make you stand out from the herd! Live interview practice, profile review, exclusive webinars and more.",
    label: "JOIN VANHACK PREMIUM",
    image: require("../../assets/general/background/img_hero_premium.png"),
}

storiesOf("Components|Title Highlight Description Button Image", module)
    .add("Default", () => (
        <Row>
            <VHTitleHighlightDescriptionButtonImage
                title={items.title}
                highlight={items.highlight}
                description={items.description}
                label={items.label}
                image={items.image}
            />
        </Row>
    ));