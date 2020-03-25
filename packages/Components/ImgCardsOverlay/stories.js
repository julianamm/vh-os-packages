import React from "react";
import { storiesOf } from "@storybook/react";
import VHImgCardsOverlay from "./index";

import imgBubble from "../../../assets/images/img_bubble.svg";
const items = {
    cardLeft: 
        {
            title: "250+",
            description: "VanHack Premium Members have been hired internationally",
        },
    cardRight: 
        {
            title: "80%",
            description: "of Premium Members recommend Premium to their friends",
        },
};

storiesOf("Components|Img Cards Overlay", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#fff", width: '50%', padding: "24px" }}>
                <VHImgCardsOverlay
                    cardLeftTitle={items.cardLeft.title}
                    cardLeftDescription={items.cardLeft.description}
                    cardRightTitle={items.cardRight.title}
                    cardRightDescription={items.cardRight.description}
                    image={imgBubble}
                />
        </div>
    ));