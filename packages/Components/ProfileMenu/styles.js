import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    align-items: center;
    width: 100%;
    height: 40px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    color: ${Color["black-100"]};
    display: flex;
    flex-direction: row;
    :hover {
        border-right : 2px solid ${Color["primary-light"]};
        color: ${Color["primary-light"]};
    }
`

export const Link = styled.a`
    padding-left: 20px;
    text-decoration: none;
    color: ${Color["black-100"]};
    cursor: pointer;
    :hover {
        color: ${Color["primary-light"]};
    }
`
