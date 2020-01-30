
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VHButton from '.';

storiesOf('Components|Buttons/Secondary', module)

  .add('Default', () => (
    <VHButton secondary onEvent={e => {
        action(e)
      }} label="VHButton" />
  ))

  .add('Outlined', () => (
    <VHButton secondary outline onEvent={e => {
        action(e)
      }} label="VHButton" />
  ))

  .add('Disabled', () => (
    <VHButton secondary outline disabled onEvent={e => {
        action(e)
      }}  label="VHButton" />
  ))

  .add('Full size', () => (
    <React.Fragment>
      <VHButton disabled full onEvent={e => {
        action(e)
      }}  label="VHButton" />
    <VHButton secondary full onEvent={e => {
        action(e)
      }}  label="VHButton" />
    <VHButton secondary outline full onEvent={e => {
        action(e)
      }}  label="VHButton" />
    </React.Fragment>
  ))

