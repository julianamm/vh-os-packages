
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VHButton from '.';

storiesOf('Components|Buttons/WhiteBorder', module)

  .add('Outlined', () => (
    <div style={{ backgroundColor: "#0074D9", width: "100%", height: "200px", textAlign: "center", paddingTop: "30px" }}>
      <VHButton white outline onEvent={e => {
        action(e)
      }} label="VHButton" />
    </div>
  ))

  .add('Disabled', () => (
    <div style={{ backgroundColor: "#0074D9", width: "100%", height: "200px", textAlign: "center", paddingTop: "30px" }}>
      <VHButton white outline disabled onEvent={e => {
        action(e)
      }} label="VHButton" />
    </div>
  ))

  .add('Full size', () => (
    <div style={{ backgroundColor: "#0074D9", width: "100%", height: "200px", textAlign: "center", padding: "30px" }}>
      <VHButton white outline disabled full onEvent={e => {
        action(e)
      }} label="VHButton" />
      <br />
      <br />
      <VHButton white outline full onEvent={e => {
        action(e)
      }} label="VHButton" />
    </div >
  ))
