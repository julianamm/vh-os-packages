import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid/index";
import VHTest from "./index";

const items = {
    titleColor: "gray-100",
    descriptionColor: "black-70",
    titleVariant: "h4",
    descriptionVariant: "h6",
    title: "Have questions about VanHack Premium?",
    description: "Give us your email and we’ll get in touch.",
    image: require("../../assets/general/backgroundimg_hero_premium.png"),
};

storiesOf("Components|Title Description Image", module)
    .add("Default", () => (
        <Row style={{ backgroundColor: "#f2f2f2", width: "100vw", height: "100vh", padding: "24px" }}>
            <Row width={"50%"}>
                <VHTest
                    titleColor={items.titleColor}
                    descriptionColor={items.descriptionColor}
                    titleVariant={items.titleVariant}
                    descriptionVariant={items.descriptionVariant}
                    title={items.title}
                    description={items.description}
                    image={items.image}
                />
            </Row>
        </Row>
    )); 