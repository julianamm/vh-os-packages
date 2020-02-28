import styled, { css, keyframes } from 'styled-components'

const avatarOffset = 24

const shineAvatar = keyframes`
    0%   {
        background-position: -${avatarOffset}px;
    }
    40% { background-position: ${avatarOffset}px;}
    100% { background-position: ${avatarOffset}px;}
`;


export default styled.div`
    width: ${avatarOffset}px;
    height: ${avatarOffset}px;
    background-color: #ccc;
    border-radius: 50%;
    background-image: linear-gradient(90deg, ${props => props.baseColor ? props.baseColor : '#ccc'} 0px, ${props => props.shineColor ? props.shineColor : '#ccc'} 40px, ${props => props.baseColor ? props.baseColor : '#ccc'}  80px);
    animation: ${shineAvatar} 1.5s  infinite linear;
`
