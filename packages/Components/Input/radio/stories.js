import React from "react";
import { storiesOf } from "@storybook/react";
import VHInputRadio from ".";

const data = {
  text: 'Company Size',
  items: [
    {
      name: 'Startup'
    },
    {
      name: 'Midsize'
    },
    {
      name: 'Corporate'
    }
  ]
}

storiesOf("Components|Input/Radio", module)
  .add("default", () => (
    <div style={{ width: '80%', marginLeft: '1%', padding: '9px' }}>
      <VHInputRadio
        color="gray-100"
        variant="platform"
        onEvent={(event) => console.log(event)}
        data={data}
      />
    </div>
  ))
