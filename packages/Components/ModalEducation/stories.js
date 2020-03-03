import React from "react";
import { storiesOf } from "@storybook/react";
import VHModalEducation from ".";

const items = [
  { value: 0, label: 'No degree' },
  { value: 1, label: 'College (two-year degree)' },
  { value: 2, label: 'Bachelor’s' },
  { value: 3, label: 'Master’s' },
  { value: 4, label: 'PhD'  }
]

const currentItem = [items[4]]

const controls = {degree: {loading: false, success: true, error: false}}

storiesOf('Components|Modal Education', module)
  .add('VHModalEducation', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      <VHModalEducation currentItem={currentItem} items={items} controls={controls} onEvent={e => {
          console.log(e)
        }}/>
    </div>
  ))