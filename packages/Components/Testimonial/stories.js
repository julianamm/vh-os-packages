import React from 'react'
import { storiesOf } from '@storybook/react'
import VHTestimonial from '.'

storiesOf('Components|Testimonial', module)

.add('default', () => (
    <div style={{ padding: "24px" }}>
        <VHTestimonial 
            image="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            sizeImg={"md"}
            testimonial='”All their tips were very valuable!” - First Last Name'
            color="gray-90"
        />
    </div>
))
.add('xs', () => (
    <div style={{ padding: "24px" }}>
        <VHTestimonial 
            image="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            sizeImg={"sm"}
            testimonial='”All their tips were very valuable!” - First Last Name'
            color="gray-90"
            xs

        />
    </div>
))
.add('sm', () => (
    <div style={{ padding: "24px" }}>
        <VHTestimonial 
            image="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            sizeImg={"sm"}
            testimonial='”All their tips were very valuable!” - First Last Name'
            color="gray-90"
            sm
        />
    </div>
))
.add('lg', () => (
    <div style={{ padding: "24px" }}>
        <VHTestimonial 
            image="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            sizeImg={"lg"}
            testimonial='”All their tips were very valuable!” - First Last Name'
            color="gray-90"
            lg
        />
    </div>
));
