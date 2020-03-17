import styled from 'styled-components'
import Color from '../../Colors'

export const Wrapper1 = styled.div`
    height: 70vh;
    background-color: ${Color["gradient-primary"]};
    display: flex;
    align-items: center;
    ${({ cover }) => cover && `
        background-image: url(${cover});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    `}
`