import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHMainTitleDescription from "./index";

storiesOf("Components|Main Title Description", module)
    .add("Types", (props) => (
        <Row>
            <VHMainTitleDescription
                title="Valgariam"
                description="E-comerce - Startup - Belo Horizonte - Brazil"
                data="data"
            />
            <VHMainTitleDescription
                title="Drift Way"
                rightTitle="(5 yr 9 mos)"
                description="E-comerce - Startup - Belo Horizonte - Brazil"
                data="data"
            />
        </Row>
    ));
