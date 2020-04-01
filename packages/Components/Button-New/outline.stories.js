
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import VHButton from '.';

storiesOf('Components|Buttons/New/Outlined', module)

.add('Default', () => (
  <React.Fragment>
    <VHButton outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton secondary outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton danger outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton success outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton disabled outline onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  </React.Fragment>
))

.add('Small', () => (
  <React.Fragment>
    <VHButton primary outline sm onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton secondary outline sm onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton danger outline sm onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton success outline sm onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton disabled outline sm onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  </React.Fragment>
))
.add('Large', () => (
  <React.Fragment>
    <VHButton primary outline lg onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton secondary outline lg onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton danger outline lg onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton success outline lg onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton disabled outline lg onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  </React.Fragment>
))

.add('Full', () => (
  <React.Fragment>
    <VHButton primary outline full onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton secondary outline full onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton danger outline full onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton success outline full onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
    <VHButton disabled outline full onEvent={e => {
      action('onEvent', e)
    }} label="VHButton" />
  </React.Fragment>
))