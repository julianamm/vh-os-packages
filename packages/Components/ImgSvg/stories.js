import React from 'react'
import { storiesOf } from '@storybook/react'
import VHImgSvg from '.'

storiesOf('Source|Img Svg', module)

.add('VHImgSvg', () => (
    <VHImgSvg 
        imgSvg="meeting"
    />
))
