import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 100%;
    align-items: ${props => (props.profile ? "flex-start" : "center")}
    ${({ cursor }) => cursor && `
        cursor: pointer;
    `}
`