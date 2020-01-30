
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VHButton from '.';

storiesOf('Components|Buttons/Primary', module)

  .add('Default', () => (
    <VHButton primary onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
  ))

  .add('Outlined', () => (
    <VHButton primary outline onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
  ))

  .add('Disabled', () => (
    <VHButton primary outline disabled onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
  ))

  .add('Full size', () => (
    <React.Fragment>
      <VHButton disabled full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton primary full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton primary outline full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))
