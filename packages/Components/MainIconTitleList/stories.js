import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid";
import VHMainIconTitleList from "./index";

const ArrayOfItems = [
    {
        label: "Vue.js"
    },
    {
        label: "Python"
    },
    {
        label: "Ruby on Rails"
    },
    {
        label: "C#"
    },
    {
        label: "Jquery"
    }
]

storiesOf("Components|Main Icon Title List", module)
    .add("Types", () => {
        return (<Row>
            <VHMainIconTitleList 
                items={ArrayOfItems} 
                data="vanhack" />
        </Row>);
    });
