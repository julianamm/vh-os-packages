import styled from "styled-components";

export const ImgWrapper = styled.div`
    width: 90%;
    height: 90%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
`

export const UnderlineText = styled.span`
    border-bottom: 3px solid #059ca6;
    margin: auto 0;
`

export const Wrapper = styled.div`
    display: flex;
    
    ${({ reverse }) => reverse && `
        flex-direction: row-reverse;
  `}
`