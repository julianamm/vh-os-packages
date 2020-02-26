import React from "react";
import { storiesOf } from "@storybook/react";
import VHTextSkeleton from ".";

storiesOf("Components|Skeleton/Text", module)
    .add("default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <VHTextSkeleton />
        </div>
    ))
    .add("red", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <VHTextSkeleton red/>
        </div>
    ))
