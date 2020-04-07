import React from "react";
import { storiesOf } from "@storybook/react";
import VHInputFile from ".";

storiesOf("Components|Input/File", module)
  .add("default", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInputFile
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
