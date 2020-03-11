import React from 'react'
import { storiesOf } from '@storybook/react'
import VHProgressBar from '.'

storiesOf('Components|Progress Bar', module)

.add('default', () => (
    <VHProgressBar
        steps={6}
        currentStep={1}
        onEvent={e => {
            console.log(e)
        }}
    />
))
