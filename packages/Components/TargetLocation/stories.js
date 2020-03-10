import React from "react";
import { storiesOf } from "@storybook/react";
import VHTargetLocation from ".";

storiesOf("Components|Target Location", module)
    .add("Types", () => (
        <div>
           <VHTargetLocation />
        </div>
    ));
