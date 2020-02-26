import React from "react";
import { storiesOf } from "@storybook/react";
import VHDescriptionSkeleton from ".";

storiesOf("Components|Skeleton/Description", module)
    .add("default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <VHDescriptionSkeleton />
        </div>
    ))
    .add("red", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <VHDescriptionSkeleton red/>
        </div>
    ))
