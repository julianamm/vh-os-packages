import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHBlackTitleDescription from "./index";

storiesOf("Components|Black Title Description", module)
    .add("Types", () => (
        <Row>
            <VHBlackTitleDescription
                title="Full Stack Developer"
                description="Oct 2019 - Present . 3 mos"
                data=""
            />
        </Row>
    ));