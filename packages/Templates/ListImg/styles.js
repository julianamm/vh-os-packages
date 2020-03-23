import styled from 'styled-components'
import Color from '../../Colors'

export const Wrapper1 = styled.div`
    display: flex;
    ${({ cover }) => cover && `
        background-image: url(${cover});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    `}
`