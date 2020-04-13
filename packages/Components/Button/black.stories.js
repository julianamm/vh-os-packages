import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import VHButton from ".";

storiesOf("Components|Buttons/Black", module)
  .add("Default", () => (
    <VHButton black onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  ))

  .add("Outlined", () => (
    <VHButton black outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  ))

  .add("Disabled", () => (
    <VHButton
      black
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
      <VHButton black full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton
        black
        outline
        full
        onEvent={e => {
          action('onEvent', e)
        }}
        label="VHButton"
      />
    </>
  ));
