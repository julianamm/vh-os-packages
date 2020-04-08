import styled from 'styled-components'
import Color from '../../Colors'

export const Wrapper = styled.div`
    background-color: ${props => Color[props.color]};
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0;
    left: 0;
`