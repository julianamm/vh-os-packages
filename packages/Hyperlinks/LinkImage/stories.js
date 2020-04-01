import React from 'react';
import { storiesOf } from '@storybook/react';
import VHLinkImage from '.';

storiesOf('Hyperlinks|Link Image', module)
  .add('xs', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage 
              to={"#"}
              xsIcon
              xsLabel
              label="Link icon xs"
              icon= "canada" />
    </div>
  ))
  .add('sm', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              smLabel
              label="Link icon sm"
              icon= "canada"
              smIcon />
    </div>
  ))

  .add('lg', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              lgLabel
              label="Link icon lg"
              icon= "canada"
              lgIcon />
    </div>
  ))

  .add('noUnderscore', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              noUnderscore
              label="Link icon noUnderscore"
              icon= "canada" />
    </div>
  ))

  .add('round', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              round
              label="Link icon round"
              icon= "canada" />
    </div>
  ))

  .add('reverse', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              reverse
              label="Link icon reverse"
              icon= "canada" />
    </div>
  ));