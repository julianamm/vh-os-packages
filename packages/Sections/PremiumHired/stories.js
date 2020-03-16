import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "../../Grid/index";
import VHPremiumHired from ".";

const candidates = [
    {   
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    },
];

storiesOf("Sections|Premium Hired", module)

.add("default", () => (
    <div style={{ backgroundColor: "#ffffff", height: "100vh", padding: "24px" }}>
        <VHPremiumHired 
            candidates={candidates}
        />
    </div>
));