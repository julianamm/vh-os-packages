import React from 'react'
import { storiesOf } from '@storybook/react'
import VHIcon from '.'

storiesOf('Source|Icon', module)

.add('VHIcon Image XS', () => (
    <VHIcon 
        color="black-100"
        xs 
        title="bullet icon"
        icon="bullet" />
))

.add('VHIcon Image SM', () => (
    <VHIcon 
       color="black-50"
        sm 
        title="bullet icon"
        icon="bullet" />
))

.add('VHIcon Image MD', () => (
    <VHIcon 
       color="primary-light"
        md 
        title="bullet icon"
        icon="bullet" />
))

.add('VHIcon Image LG', () => (
    <VHIcon 
        color="primary-light"
        lg 
        title="bullet icon"
        icon="bullet" />
))

