
import React from 'react';
import { storiesOf } from '@storybook/react';
import VHLinkImage from '.';

storiesOf('Hyperlinks|Link Image', module)
  .add('xs', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage 
              to={"#"}
              xsImg
              xsLabel
              label="Link image xs"
              title="Zoombi"
              source="http://via.placeholder.com/200x200"/>
    </div>
  ))
  .add('sm', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               to={"#"}
              smLabel
              label="Link image sm"
              smImg
              title="Zoombi"
              source="http://via.placeholder.com/200x200"/>
    </div>
  ))

  .add('lg', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              lgLabel
              label="Link image lg"
              lgImg
              title="Zoombi"
              source="http://via.placeholder.com/200x200"/>
    </div>
  ))

  .add('noUnderscore', () => (
    <div style={{ padding: "24px" }}>
      <VHLinkImage               
              to={"#"}
              noUnderscore
              label="Link image"
              title="Zoombi"
              source="http://via.placeholder.com/200x200" />
    </div>
  ))