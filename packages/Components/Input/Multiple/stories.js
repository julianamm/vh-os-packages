import React from "react";
import { storiesOf } from "@storybook/react";
import VHInputMultiple from ".";

const items = JSON.stringify([{id: 1, value: 'Durand', loading: false}, { id: 2, value: 'Robson', error: true}])
// const items = []
// const items = '[{"id":1,"value":"Durand Neto"},{"id":2,"value":"Robson"},{"value":"asdas"}]'
storiesOf("Components|Input/Multiple", module)
  .add("default", () => (
    <div style={{width: '90%', marginLeft:'1%', padding: '9px'}}>
      <VHInputMultiple
        max={5}
        items={items}
        placeholder="VH Multiple Input"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("loading", () => (
    <div style={{width: '90%', marginLeft:'1%', padding: '9px'}}>
      <VHInputMultiple
      loading
        max={5}
        items={items}
        placeholder="VH Multiple Input"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("error", () => (
    <div style={{width: '90%', marginLeft:'1%', padding: '9px'}}>
      <VHInputMultiple
        error
        max={5}
        items={items}
        placeholder="VH Multiple Input"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
