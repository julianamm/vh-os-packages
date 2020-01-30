import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import VHButton from ".";

storiesOf("Components|Buttons/Danger", module)
  .add("Default", () => (
    <VHButton danger onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  ))

  .add("Outlined", () => (
    <VHButton danger outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  ))

  .add("Disabled", () => (
    <VHButton
      danger
      outline
      disabled
      onEvent={e => {
        action('onEvent', e)
      }}
      label="VHButton"
    />
  ))

  .add("Full size", () => (
    <>
      <VHButton disabled full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton
        danger
        outline
        full
        onEvent={e => {
          action('onEvent', e)
        }}
        label="VHButton"
      />
    </>
  ));
