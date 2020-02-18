import styled from 'styled-components';
import Color from "../../Colors";

export const Wrapper = styled.div`
  min-width: 62%;
  padding-right: 48px;
`;

export const InfoDate = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: ${Color["tertiary-dark"]};
  border-radius: 3px;
  background-color: ${Color["black-10"]};
  padding: 6px 12px 6px 12px;
`;
