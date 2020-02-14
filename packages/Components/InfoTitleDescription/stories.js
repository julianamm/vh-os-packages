import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHInfoTitleDescription from "./index";

storiesOf("Components|Info Title Description", module)
    .add("Types", () => (
        <Row>
            <VHInfoTitleDescription
                title="Rank your top 3 skills"
                description="Highest proficiency level; 3 = Lowest proficiency level"
                data=""
            />
            <VHInfoTitleDescription
                title="Add up to 5 secondary skills"
                data=""
            />
            <VHInfoTitleDescription
                title="Drift Way"
                rightTitle="(5 yr 9 mos)"
                description="E-comerce - Startup - Belo Horizonte - Brazil"
                data=""
            />
        </Row>
    ));
