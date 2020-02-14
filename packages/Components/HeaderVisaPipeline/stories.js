import React from 'react'
import { storiesOf } from '@storybook/react'
import VHHeaderVisaPipeline from '.'
import Color from '../../Colors'

storiesOf('Components|Header Visa Pipeline', module)

.add('Header', () => (
    <div style={{backgroundColor: Color['gray-10'], height: '100vh'}}>
        <VHHeaderVisaPipeline
            title="Visa Pipeline"
            onEvent={(event) => console.log(event)}
            inputPlaceholder="Search for companies, vanhackers, position..."
            inputValue="search"
        />
    </div>
))


