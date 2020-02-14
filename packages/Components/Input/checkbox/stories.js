import React from "react";
import { storiesOf } from "@storybook/react";
import VHInputCheckbox from ".";

const data = [
  {
    id: "1",
    value: "123",
    label: "yes",
    checked: true,
  },
  {
    id: "2",
    value: "12355",
    label: "no",
    checked: true,
  }
]

storiesOf("Components|Input/Checkbox", module)
  .add("default", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInputCheckbox        
        title={data[0].label}
        color="gray-100"
        variant="platform1"
        data={data[0]}
        value={data[0].value}
        name={`${data[0].label}-input-checkbox`}
        id={`${data[0].id}-vh-input-checkbox`}
        onEvent={(event) => console.log(event)}
      />
    </div>
  ))
  .add("multiple", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px', display: "flex", alignItems: "flex-start"}}>
      <VHInputCheckbox        
        items={data}
        multi
        onEvent={(event) => console.log(event)}
      />
    </div>
  ))
