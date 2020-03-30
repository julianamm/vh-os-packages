import styled from "styled-components";
import Color from "../../../Colors";

export const TextWrapper = styled.span`
    width: 65%;
    max-width: 300px;
    text-align: center;
    height: 100%;
`
export const Group = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
`
export const Item = styled.li`
    list-style: none;
    border-right: 1px solid ${Color["gray-40"]};
    // height: 220px;

      :last-child {
        border-right: none;
    }
`