import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    
    ${({ reverse }) => reverse && `
        flex-direction: row-reverse;
  `}
`