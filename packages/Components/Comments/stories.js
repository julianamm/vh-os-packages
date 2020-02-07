import React from "react";
import { storiesOf } from "@storybook/react";
import VHComments from ".";

const comments = [
    {
        "profileId": "74637373",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        "fullName": "Anybal Silva",
        "days": "3 days ago",
        "event": "Adding a comment like a boss"
    },
    {
        "profileId": "746373373",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        "fullName": "João Dias",
        "days": "4 days ago",
        "event": "Fixing bug"
    },
    {
        "profileId": "74613437373",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
        "fullName": "Mário Rodeghiero",
        "days": "5 days ago",
        "event": "Had call with Anastasia. She does not need medicals as she is in Germany."
    }
]

storiesOf("Components|Comments", module)
    .add("default", () => (
        <VHComments comments = {comments}/>
    ));
