import styled from "styled-components";
import Color from "../../../Colors";

export const Input = styled.input`
  border: 1px solid ${Color.black.A20};
  border-radius: 3px;
  color: ${Color.black.A40};
  font-family: Roboto;
  font-size: 0.875rem;
  line-height: 18px;
  padding: 0 8px;
  width: 180px;
  background: transparent;

  ::placeholder {
    opacity: 0.5;
    font-size: 0.875rem;
    color: ${Color.black.A20}
  }
`;
