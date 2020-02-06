import styled from "styled-components";
import Color from "../../../Colors";

export const Input = styled.input`
  border: 1px solid ${Color["gray-30"]};
  border-radius: 6px;
  color: ${Color["gray-100"]};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  padding: 9px 24px;
  width: 100%;
  background: transparent;
  outline: 0;
  
  ::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    color: ${Color["gray-50"]};
  }
`;
