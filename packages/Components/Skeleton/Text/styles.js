import styled, { css, keyframes } from 'styled-components'
import Color from '../../../Colors'
const OffsetWidth = '100%'
const OffsetHeight = 16

const shine = keyframes`
    0%   {
        background-position: -100px;
    }
    40% { background-position: 200px}
    100% { background-position: 1000px}
`;

export default styled.div`
    width: ${OffsetWidth}px;
    height: ${OffsetHeight}px;
    background-color: ${props => props.baseColor ? props.baseColor : '#ccc'};
    border-radius: 3px;
    background-image: linear-gradient(90deg, ${props => props.baseColor ? props.baseColor : '#ccc'} 0px, ${props => props.shineColor ? props.shineColor : '#ccc'} 40px, ${props => props.baseColor ? props.baseColor : '#ccc'}  80px);
    animation: ${shine} 1.5s  infinite linear;
`
