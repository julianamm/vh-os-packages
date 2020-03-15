import styled from "styled-components";
import Color from "../../Colors";

export const TextWrapper = styled.span`
    width: 60%;
    text-align: center;
    height: 100%;
`

export const RightBorder = styled.span`
    border-right: ${props => props.noBorder ? "0": `1px solid ${Color["gray-40"]}`};
    min-height: 200px;
    max-height: 200px;
`