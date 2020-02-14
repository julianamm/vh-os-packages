import styled from "styled-components";
import Color from "../../Colors";

export const Group = styled.ul`
  padding: 0 0 0 5px;
`;

export const Item = styled.li`
  list-style: none;
  border-left: 1px solid ${Color.tertiary};
  min-height: 4rem;

  :last-child {
    border-left: none;
  }
`;

export const Circle = styled.div`
  width: 13px;
  height: 13px;
  background-color: ${Color.tertiary};
  border-radius: 50%;
  margin-left: -7px;
`;

export const Date = styled.span`
  color: ${Color.tertiary};
  margin-left: 1rem;
  min-width: 70px;
  min-height: 60px;
  align-items: baseline;
  display: grid;
`;

export const WrapperText = styled.span`
  display: grid;
  grid-template-columns: 70px auto;
  grid-column-gap: 1rem;
  margin-top: -1rem;
`;

export const WrapperSameDate = styled.div`
  min-height: 3.5rem;
`;
