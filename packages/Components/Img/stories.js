import React from 'react'
import { storiesOf } from '@storybook/react'
import VHImg from '.'

storiesOf('Source|Img', module)

.add('VHImg Image XS', () => (
    <VHImg
        xs
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

.add('VHImg Image SM', () => (
    <VHImg
        sm
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

.add('VHImg Image MD', () => (
    <VHImg
        md
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))

.add('VHImg Image LG', () => (
    <VHImg
        lg
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))