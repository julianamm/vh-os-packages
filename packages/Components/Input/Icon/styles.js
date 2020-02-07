import styled from "styled-components";
import Color from "../../../Colors";

export const Wrapper = styled.div`
  border-radius: 6px;
  border: solid 1px ${Color["gray-30"]};
  background-color: ${Color["gray-20"]};
  padding-left: 0.563rem;
  display: grid;
  grid-template-columns: 9px 100%;
  align-items: center;
`;
