import React from 'react'
import { storiesOf } from '@storybook/react'
import VHTestimonial from '.'

storiesOf('Components|Testimonial', module)

.add('default', () => (
    <VHTestimonial 
        image="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
        testimonial='”All their tips were very valuable!” - First Last Name'
        size={"md"}
    />
))
