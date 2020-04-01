import React from 'react';
import { storiesOf } from '@storybook/react';

import VHMediaSource from '.';
import VanHackLogo from '../../assets/svg/logo/vanhack_logo.svg/index.js';

storiesOf('Source|Video', module)
  .add('default', () => (
    <VHMediaSource
      source="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
      poster={VanHackLogo}
    />
  ))
  .add('default with control', () => (
    <VHMediaSource
      source="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
      controls
      poster={VanHackLogo}
    />
  ))
  .add('default with youtube', () => (
    <VHMediaSource
      source="https://www.youtube.com/embed/2QLM0AQLfgw"
      youtube
      controls
      poster={VanHackLogo}
    />
  ));
