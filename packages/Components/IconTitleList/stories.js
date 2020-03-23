import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHIconTitleList from "./index";

const ArrayOfItems = [
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    },
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    },
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    },
    {
      label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
    }
]

storiesOf("Components|Icon Title List", module)
    .add("Types", () => {
        return (<Row>
            <VHIconTitleList
                items={ArrayOfItems}
                data="vanhack" />
        </Row>);
    });
