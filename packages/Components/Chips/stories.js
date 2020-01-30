import React from 'react'
import { storiesOf } from '@storybook/react'
import VHChip from '.'

storiesOf('Components|Chips', module)

.add('primary', () => (
    <React.Fragment>
    <VHChip
        primary
        marginRight
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip"
    />
    <VHChip
        primary
        marginRight
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    <VHChip
        marginRight
        danger
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip"
    />
    <VHChip
        marginRight
        danger
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    <VHChip
        marginRight
        secondary
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip"
    />
    <VHChip
        secondary
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    </React.Fragment>
))
