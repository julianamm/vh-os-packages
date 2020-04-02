
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import VHButton from '.';

storiesOf('Components|Buttons/New/Text Buttom', module)

  .add('Default', () => (
    <React.Fragment>
      <VHButton textButton primary onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton textButton secondary  onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton textButton danger  onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton textButton success onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton textButton  disabled onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))

  .add('Small', () => (
    <React.Fragment>
      <VHButton primary textButton sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary textButton sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger textButton sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success textButton sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled textButton sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))
  .add('Large', () => (
    <React.Fragment>
      <VHButton primary textButton lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary textButton lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger textButton lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success textButton lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled textButton lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))

  .add('Full', () => (
    <React.Fragment>
      <VHButton primary textButton full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary textButton full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger textButton full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success textButton full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled textButton full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))
