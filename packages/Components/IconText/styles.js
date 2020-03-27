import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 100%;
    align-items: center;
    ${({ cursor }) => cursor && `
        cursor: pointer;
    `}
`