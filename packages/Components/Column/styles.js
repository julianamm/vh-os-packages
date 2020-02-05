import styled from "styled-components";
import Color from "../../NewColors";

export const Column = styled.div`
    max-width: 302px;
    min-height: 100vh;
    border-radius: 6px;
    background-color: transparent;
    padding: 1rem;
    box-sizing: border-box;
    transition: background-color 0.5s ease;

    :hover {
        background-color: ${Color["gray-10"]};
    }
`

export const ColumnName = styled.h1`
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color["gray-90"]};
`

export const AvgTime = styled.p`
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color["gray-70"]};
`

export const NumberOfCards = styled.div`
    margin: 0 0 0 1rem;
    width: 30.1px;
    height: 30.1px;
    background-color: ${Color["gray-30"]};
    color: ${Color["gray-90"]};
    border-radius: 50%;
    text-align: center;
    display: grid;
    align-items: center;
`