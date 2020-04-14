import React from 'react'
import { storiesOf } from '@storybook/react'

import VHTimer from '.'

const dateNow = new Date();
dateNow.setHours(dateNow.getHours() + 80);

storiesOf("Components|Timer", module).add("VHTimer", () => (
  <div style={{ width: "250px ", height: "100vh", padding: "24px" }}>
    <VHTimer endDate={ new Date(dateNow.getTime() + dateNow.getTimezoneOffset() * 60000) } />
  </div>
));