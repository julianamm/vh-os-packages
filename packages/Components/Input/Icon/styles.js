import styled from "styled-components";
import Color from "../../../Colors";

export const Wrapper = styled.div`

  ${({ loading }) => !loading && `
    border-radius: 6px;
    border: solid 1px ${Color["gray-30"]};
    background-color: ${Color["gray-20"]};
    padding-left: 0.563rem;
    display: grid;
    grid-template-columns: 9px 100%;
    align-items: center;
  `}

  ${({ error }) => error && `
    border-radius: 6px;
    border: solid 1px ${Color["red-dark"]};
    background-color: ${Color["gray-20"]};
    padding-left: 0.563rem;
    display: grid;
    grid-template-columns: 9px 100%;
    align-items: center;
  `}
`;
