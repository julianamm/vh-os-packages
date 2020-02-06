import styled from "styled-components";
import Color from "../../../Colors";

export const Card = styled.div`
    background-color: ${Color["gray-20"]};
    border-radius: ${props => props.noBorder ? "0": "6px"};
    padding: 24px;
    box-sizing: border-box;
    border-top: ${props => props.favorite ? `3px solid ${Color["yellow-dark"]}` : 'none'};

    :hover {
        box-shadow: ${props => !props.noHover && `0 4px 14px 0 rgba(0, 0, 0, 0.1)`};
    }
`