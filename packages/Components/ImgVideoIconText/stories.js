import React from "react";
import { storiesOf } from "@storybook/react";
import VHImgVideoIconText from "./index";

import ImageSuccessCase from "../../assets/general/background/img_video_premium_success_case.png";

storiesOf("Components|Img Video Icon Text", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#ffffff", width: "100vw", height: "100vh", padding: "24px" }}>
            <VHImgVideoIconText
                image={ImageSuccessCase}
                icon="world"
                color="gray-10"
                text="How Marcelo got hired in Saskatoon, Canada as an Engineering Manager from Brazil"
            />
        </div>
    ));