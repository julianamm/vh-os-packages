import React from 'react'
import { storiesOf } from '@storybook/react'
import VHProfileMenu from '.'

const links = [
    {
        name: 'General',
        href: '#general',
    },
    {
        name: 'Skills',
        href: '#skills',
    },
    {
        name: 'Relocation',
        href: '#relocation',
    },
    {
        name: 'Languages',
        href: '#languages',
    },
    {
        name: 'Experience',
        href: '#experience',
    },
    {
        name: 'Education',
        href: '#education',
    }
]

storiesOf('Components|Profile Menu', module)

    .add('default', () => (
        <VHProfileMenu links={links}
        />
    ))
