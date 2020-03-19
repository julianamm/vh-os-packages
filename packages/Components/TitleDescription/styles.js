import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    * {
        margin: 0 0 0 0;
        display: ${props => props.inline ? 'inline' : 'block'};
    }
    cursor: ${props => props.pointer && 'pointer'};
    display: ${props => props.contents && 'contents'};
`

export const Display = styled.div`
    padding-left: ${props => props.inline && '5px'};
`