import React from "react";
import { storiesOf } from "@storybook/react";
import VHSimpleWithButton from ".";

storiesOf("Components|Input/Simple with Button", module)
  .add("default", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHSimpleWithButton
        placeholder="Email"
        value=""
        data={{}}
        onEvent={() => console.log(event)}
        label="SEND"
      />
    </div>
  ));
