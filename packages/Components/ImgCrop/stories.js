import React from 'react'
import { storiesOf } from '@storybook/react'

import VHImg from '.'

storiesOf('Source|Img Crop', module)

.add('VHImg Crop', () => (
    <VHImg
        xs
        title="Zoombi"
        source="http://via.placeholder.com/200x200"
    />
))
