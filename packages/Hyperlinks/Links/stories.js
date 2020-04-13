
import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from '../../Colors'
import VHLink from '.';

storiesOf('Hyperlinks|Links', module)
  .add('xs', () => (
    <div style={{ padding: "24px" }}>
      <VHLink to={"#"} xs label="VH link" />
    </div>
  ))
  .add('xs with onClick', () => (
    <div style={{ padding: "24px" }}>
      <VHLink onEvent={ e => { console.log(e) }} xs label="VH link with OnClick" />
    </div>
  ))
  .add('sm', () => (
    <div style={{ padding: "24px" }}>
      <VHLink to={"#"} sm label="VH link" />
    </div>
  ))

  .add('lg', () => (
    <div style={{ padding: "24px" }}>
      <VHLink to={"#"} lg label="VH link" />
    </div>
  ))

  .add('reverse', () => (
    <div style={{ width: '200px', height: '200px', backgroundColor: Color["primary-dark"], padding: "24px" }}>
      <VHLink reverse to={"#"} lg label="VH link reverse" />
    </div>
  ))

  .add('noUnderscore', () => (
    <div style={{ width: '200px', height: '200px', backgroundColor: Color["primary-dark"], padding: "24px" }}>
      <VHLink reverse to={"#"} lg label="VH link reverse" noUnderscore/>
    </div>
  ))