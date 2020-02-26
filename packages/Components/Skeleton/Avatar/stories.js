import React from "react";
import { storiesOf } from "@storybook/react";
import VHAvatarSkeleton from ".";

storiesOf("Components|Skeleton/Avatar", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <VHAvatarSkeleton />
        </div>
    ))
    .add("red", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <VHAvatarSkeleton red/>
        </div>
    ))
