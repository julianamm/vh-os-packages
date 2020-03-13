import React from "react";
import { storiesOf } from "@storybook/react";
import VHInputMultiple from ".";

const items = [{value: 'Durand'},{value: 'João'},{value: 'João'},{value: 'João'}]
// const items = []

storiesOf("Components|Input/Multiple", module)
  .add("default", () => (
    <div style={{width: '90%', marginLeft:'1%', padding: '9px'}}>
      <VHInputMultiple
        max={5}
        items={JSON.stringify(items)}
        placeholder="VH Multiple Input"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
