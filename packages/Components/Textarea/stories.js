import React from "react";
import { storiesOf } from "@storybook/react";
import VHTextarea from ".";

const data = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
}


storiesOf("Components|Textarea", module)
  .add("default", () => (
    <VHTextarea description={data.description} onEvent={(event) => console.log(event)}/>
  ))