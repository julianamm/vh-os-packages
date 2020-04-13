import React from 'react'
import { storiesOf } from '@storybook/react'

import VHTimer from '.'

const date = new Date();

storiesOf("Components|Timer", module).add("VHTimer", () => (
  <div style={{ width: "250px ", height: "100vh", padding: "24px" }}>
    <VHTimer endDate={ date.setDate(date.getDate() + 2) } onEndTime={(event) => console.log(event)}/>
  </div>
));