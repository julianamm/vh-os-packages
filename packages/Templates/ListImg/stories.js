import React from "react";
import { storiesOf } from "@storybook/react";
import VHComfirmationTemplate from ".";

const ArrayOfItems = [
    { label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"},
    { label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"},
    { label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"},
    { label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"}
]

storiesOf("Templates|List img", module)

.add("default", () => (
    <VHComfirmationTemplate
        title1="Here’s how it work"
        title2="Advantages"
        list1={ArrayOfItems}
        list2={ArrayOfItems}
    />
))
