import React from 'react'
import { storiesOf } from '@storybook/react'

import VHImg from '.'

storiesOf('Source|Img Crop', module)

.add('VHImg Crop', () => (
    <VHImg
        source="http://via.placeholder.com/200x200"
        onEvent={e => {
            console.log(e)
        }}
    />
))
