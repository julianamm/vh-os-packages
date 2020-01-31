import React from 'react'
import { storiesOf } from '@storybook/react'
import VHIcon from '.'

storiesOf('Source|Icon', module)

.add('VHIcon Image XS', () => (
    <VHIcon
        xs
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

.add('VHIcon Image SM', () => (
    <VHIcon
        sm
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

.add('VHIcon Image MD', () => (
    <VHIcon
        md
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

.add('VHIcon Image LG', () => (
    <VHIcon
        lg
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

