
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import VHButton from '.';

storiesOf('Components|Buttons/New/Primary', module)

  .add('Default', () => (
    <React.Fragment>
      <VHButton primary onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))

  .add('Small', () => (
    <React.Fragment>
      <VHButton primary sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled sm onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))
  .add('Large', () => (
    <React.Fragment>
      <VHButton primary lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled lg onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))

  .add('Full', () => (
    <React.Fragment>
      <VHButton primary full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton secondary full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton danger full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton success full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
      <VHButton disabled full onEvent={e => {
        action('onEvent', e)
      }} label="VHButton" />
    </React.Fragment>
  ))
