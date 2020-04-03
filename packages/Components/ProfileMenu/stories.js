import React from 'react'
import { storiesOf } from '@storybook/react'
import VHProfileMenu from '.'

const links = [
    {
        name: 'General',
        href: '#general',
    },
    {
        name: 'Professional Overview',
        href: '#skills',
    },
    {
        name: 'Relocation',
        href: '#relocation',
    },
    {
        name: 'Social Profile',
        href: '#socialProfile',
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
    },
    {
        name: 'Side Projects',
        href: '#sideProjects',
    }
]

storiesOf('Components|Profile Menu', module)

    .add('default', () => (
        <VHProfileMenu links={links}
        />
    ))
