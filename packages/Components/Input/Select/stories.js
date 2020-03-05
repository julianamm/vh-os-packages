import React from "react";
import { storiesOf } from "@storybook/react";
import VHSelect from ".";

const items = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const currentItem = [items[4]]

storiesOf("Components|Input/Select", module)
  .add("default", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHSelect
        isLoading
        caption="Annual salary expectation"
        data={'AnyObjectOrString'}
        className={'AnyObjectOrString'}
        currentItem={currentItem}
        items={items}
        isMulti
        description="See salaries for this position"
        descriptionColor="primary"
        leftText="$CAD"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("single", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHSelect
        caption="Annual salary expectation"
        data={'AnyObjectOrString'}
        className={'AnyObjectOrString'}
        currentItem={currentItem}
        items={items}
        description="See salaries for this position"
        descriptionColor="primary"
        leftText="$CAD"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("border remover", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHSelect
        removeBorder
        caption="Annual salary expectation"
        data={'AnyObjectOrString'}
        className={'AnyObjectOrString'}
        currentItem={currentItem}
        items={items}
        description="See salaries for this position"
        descriptionColor="primary"
        leftText="$CAD"
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ));
