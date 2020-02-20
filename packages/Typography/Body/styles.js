import styled from 'styled-components'
import Color from '../../Colors'

export const Body = styled.p`
font-family: Roboto;
  color: ${Color["black-A50"]};
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  padding: 0;

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

  ${({ reverse }) => reverse && `
    color: ${Color.white};
  `}

`
export default Body