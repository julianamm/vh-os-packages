import React from "react";
import { storiesOf } from "@storybook/react";
import VHUserAvatar from ".";

const candidates = {   
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Jeff Patterson",
    email: "jeffpatterson@gmail.com",
};

storiesOf("Components|User Avatar", module)
    .add("default", () => (
        <div style={{ padding: "24px" }}>
            <VHUserAvatar 
                avatar= {candidates.avatar}
                name= {candidates.name} 
                email= {candidates.email}
            />
        </div>
    ));
