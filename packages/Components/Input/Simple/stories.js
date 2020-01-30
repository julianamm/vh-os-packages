import React from "react";
import { storiesOf } from "@storybook/react";
import VHInput from ".";

storiesOf("Components|Input/Simple", module)
  .add("default", () => (
    <VHInput placeholder="VH Simple Input" onEvent={e => {
      console.log(e)
    }} />
  ));
