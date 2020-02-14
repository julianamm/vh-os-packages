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
        marginRight
        secondary
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    </React.Fragment>
))
.add('round', () => (
    <React.Fragment>
    <VHChip
        round
        primary
        marginRight
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip"
    />
    <VHChip
        round
        primary
        marginRight
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    <VHChip
        round
        marginRight
        danger
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip"
    />
    <VHChip
        round
        marginRight
        danger
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    <VHChip
        round
        marginRight
        secondary
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip"
    />
    <VHChip
        round
        marginRight
        secondary
        transparent
        onEvent={event => {
            console.log(event)
        }}
        label="VH chip transparent"
    />
    </React.Fragment>
))
