import styled from 'styled-components';
import Color from '../../Colors';

export const IconWrapper = styled.span`
  margin-left: 12px;
  vertical-align: middle;
`

export const A = styled.a`
  display: flex;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  width: 100%;
  align-items: center;
  cursor: ${props => props.cursor ? props.cursor : 'pointer'};
  color: ${props => props.color === "primary-light" ? `${Color["primary-light"]} !important` : `${Color["gradient-primary"]}`};
  :visited {
    color: ${Color["gradient-primary"]};
  }
  :hover {
    color: ${Color["primary-light"]};
    text-decoration: underline;
  }
  :active {
    color: ${Color["primary-dark"]};
    text-decoration: underline;
  }
  ${({ sm }) => sm && `
    font-size: 14px;
    line-height: 18px;
  `}
  ${({ xs }) => xs && `
    font-size: 12px;
    line-height: 16px;
  `}
  ${({ lg }) => lg && `
    font-size: 16px;
    line-height: 20px;
  `}
  ${({ noUnderscore }) => noUnderscore && `
    text-decoration: none !important;
  `}
    
  ${({ reverse }) => reverse && `
      justify-content: flex-end;
`}
`