import React from "react";
import { storiesOf } from "@storybook/react";
import VHComments from ".";

const comments = [
    {
        "createdOn": "3 days",
        "note": "Adding a comment 007",
        "user": {
            "id": 141394.0,
            "name": "Anybal Silva",
            "email": "anybal@vanhack.com",
            "avatar": "https://vanhackblobstorageprod.blob.core.windows.net/img/User/1498bcb6-6bb6-4def-bd1a-8c2414e21330.jpg",
            "isPremium": false
        },
        "id": 9021
    }
]

storiesOf("Components|Comments", module)
    .add("default", () => (
        <div style={{ width: '589px', padding: "24px"}}>
            <VHComments comments={comments} onEvent={(event) => console.log(event)}/>
        </div>
    ))
    .add("loading", () => (
        <div style={{ width: '589px', padding: "24px"}}>
            <VHComments loading comments={comments} onEvent={(event) => console.log(event)}/>
        </div>
    ))
