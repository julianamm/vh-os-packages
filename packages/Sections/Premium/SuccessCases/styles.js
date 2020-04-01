import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    height: 470px;

    ${({ responsive }) => responsive && `
    @media only screen and (max-width: 768px) {
        width: 350px;
        height: 250px;
    }
`}
` 