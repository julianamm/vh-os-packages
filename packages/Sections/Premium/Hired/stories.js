import React from "react";
import { storiesOf } from "@storybook/react";
import VHPremiumHiredSection from ".";

const items = {
    sectionTitle: "Premium Vanhackers hired",
    btnLabel: "JOIN VANHACK PREMIUM",
};

const candidates = [
    {   
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "canada",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "south-africa",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "india",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "russia",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "brazil",
    },
];

storiesOf("Sections|Premium/Hired", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#ffffff", height: "100vh", padding: "24px" }}>
            <VHPremiumHiredSection
                sectionTitle={items.sectionTitle}
                btnLabel={items.btnLabel}
                candidates={candidates}
            />
        </div>
    ));
