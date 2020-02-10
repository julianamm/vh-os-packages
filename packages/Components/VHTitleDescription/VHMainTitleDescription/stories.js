import React from "react";
import { storiesOf } from "@storybook/react";
import VHMainTitleDescription from ".";

storiesOf("Components|Title/Main Title", module)
    .add("Types", (props) => (
        <div>
            <VHMainTitleDescription
                title="Valgariam"
                description="E-comerce - Startup - Belo Horizonte - Brazil"
                data={props.data}
            />
            <VHMainTitleDescription
                title="Drift Way"
                rightTitle="(5 yr 9 mos)"
                description="E-comerce - Startup - Belo Horizonte - Brazil"
                data={props.data}
            />
        </div>
    ));
