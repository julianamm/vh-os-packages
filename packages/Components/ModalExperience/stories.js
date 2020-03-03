import React from "react";
import { storiesOf } from "@storybook/react";
import VHModalExperience from ".";

const items = [
  { value: 0, label: 'No degree' },
  { value: 1, label: 'College (two-year degree)' },
  { value: 2, label: 'Bachelor’s' },
  { value: 3, label: 'Master’s' },
  { value: 4, label: 'PhD'  }
]

const currentItem = [items[4]]

const controls = {location: {loading: false, success: true, error: false}, 
                  industry: {loading: false, success: true, error: false},
                  skillsUsed: {loading: false, success: true, error: false}}

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

const skillsUsed = [
  {
    label: 'C#',
    value: 'c'
  },
  {
    label: 'Java',
    value: 'b'
  },
  {
    label: 'Python',
    value: 'o'
  },
]

const workAs = {
  current: skillsUsed
}

storiesOf('Components|Modal Experience', module)
  .add('VHModalExperience', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      <VHModalExperience data={data} workAs={workAs}
      currentItem={currentItem} items={items} controls={controls} onEvent={e => {
          console.log(e)
        }}/>
    </div>
  ))