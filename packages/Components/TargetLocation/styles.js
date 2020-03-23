import styled from 'styled-components'
import Color from '../../Colors'

export const Wrapper = styled.div`
    width: 54px;
    height: 90px;
    opacity: ${props => props.disabled ? "0.3" : ""};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`