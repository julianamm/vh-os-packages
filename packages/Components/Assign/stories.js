import React from "react";
import { storiesOf } from "@storybook/react";
import VHAssign from ".";

const data = {
  items: [
    {
      id: 0,
      name: "Carlos",
      email: "carlos@gmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
    },
    {
      id: 1,
      name: "Fabio",
      email: "fabio@gmail.com",
      avatar:
        "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 2,
      name: "Fred",
      email: "fred@gmail.com",
      avatar:
        "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
    },
    {
      id: 3,
      name: "Jose",
      email: "jose@gmail.com",
      avatar:
        "https://randomuser.me/api/portraits/men/29.jpg"
    },
  ]
};

storiesOf("Components|Assign", module).add("VHAssign", () => (
  <div style={{ width: "300px", padding: "60px 24px 24px 24px", height: "450px" }}>
    <VHAssign items={data.items} onEvent={event => console.log(event)} />
  </div>
));
