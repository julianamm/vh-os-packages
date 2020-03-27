import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid/index";
import VHTest from "./index";

const items = {
    title: "Have questions about VanHack Premium?",
    description: "Give us your email and we’ll get in touch.",
    imgSvg: "meeting",
};

storiesOf("Components|Title Description Image", module)
    .add("Full screen", () => (
        <Row style={{ backgroundColor: "#f2f2f2", width: "100vw", height: "100vh", padding: "24px" }}>
            <Row>
                <VHTest
                    title={items.title}
                    description={items.description}
                    imgSvg={items.imgSvg}
                />
            </Row>
        </Row>
    ))

    .add("Half Screen", () => (
        <Row style={{ backgroundColor: "#f2f2f2", width: "100vw", height: "100vh", padding: "24px" }}>
            <Row width={"50%"}>
                <VHTest
                    title={items.title}
                    description={items.description}
                    imgSvg={items.imgSvg}
                />
            </Row>
        </Row>
    ));