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
        flag: "usa",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "ireland",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "uk",
    },
    {
        name: "Mitchell Watson",
        position: "Backend Developer",
        country: "from Brazil",
        userPhoto: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        flag: "germany",
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
