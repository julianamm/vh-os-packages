import styled from "styled-components";

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContentRight ? 'flex-end' : 'flex-start'};
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