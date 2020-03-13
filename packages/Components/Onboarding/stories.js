import React from 'react'
import { storiesOf } from '@storybook/react'
import VHOnboarding from '.'

storiesOf('Components|Onboarding', module)

.add('Step 1', () => (
    <VHOnboarding
        steps={16}
        currentStep={1}
        onEvent={e => {
            console.log(e)
        }}
    >
        asdadassad
    </VHOnboarding>
))
