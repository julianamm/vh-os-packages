import React from "react";
import { storiesOf } from "@storybook/react";
import VHInput from ".";

storiesOf("Components|Input/Simple", module)
  .add("default", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInput placeholder="VH Simple Input" onEvent={e => {
      console.log(e)
    }} />
    </div>
  ))
  .add("value", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInput value="durand" placeholder="VH Simple Input" onEvent={e => {
      console.log(e)
    }} />
    </div>
  ))
