import React from 'react';
import { storiesOf } from '@storybook/react';
import VHPreloader from '.';

storiesOf('Components|Preloader', module)
  .add('VHPreloader type bubble default', () => <VHPreloader type="bubble" />)
  .add('VHPreloader type bubble md', () => (
    <VHPreloader type="bubble" size="md" />
  ))
  .add('VHPreloader type bubble sm', () => (
    <VHPreloader type="bubble" size="sm" />
  ))
  .add('VHPreloader type bubble xs', () => (
    <VHPreloader type="bubble" size="xs" />
  ))
  .add('VHPreloader type circle default', () => <VHPreloader type="circle" />)
  .add('VHPreloader sm', () => <VHPreloader type="circle" size="sm" />)
  .add('VHPreloader xs', () => <VHPreloader type="circle" size="xs" />)
  .add('VHLoading Full Page', () => <VHPreloader type="fullPage" size="xs" />);
