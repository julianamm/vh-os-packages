import styled from "styled-components";
import Color from "../../Colors";

const Button = styled.button`
  background: rgb(${Color.primary.rgb.light.r},
  ${Color.primary.rgb.light.g}, ${Color.primary.rgb.light.b}, 0.2);
  border: 1px solid ${Color.primary.main};
  border-radius: 4px;
  font-family: Roboto;
  text-align: center;
  cursor: pointer;
  color: ${Color.black.A50};
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 16px 6px 16px;
  margin: 4px 0 4px 0;
  outline: 0;

  :hover {
    background-color: ${Color.primary.light};
  }

  :active {
    background-color: ${Color.primary.dark};
  }

  ${({ primary }) =>
    primary &&
    `
    background: rgb(${Color.primary.rgb.light.r},
    ${Color.primary.rgb.light.g}, ${Color.primary.rgb.light.b}, 0.2);
    border: 1px solid ${Color.primary.main};
    :hover {
      background-color: ${Color.primary.light};
      border: 1px solid ${Color.primary.light};
      color: ${Color.white.light};
    }
    :active {
      background-color: ${Color.primary.dark};
      border: 1px solid ${Color.primary.dark};
      color: ${Color.white.light};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    background: rgb(${Color.secondary.rgb.light.r},
      ${Color.secondary.rgb.light.g}, ${Color.secondary.rgb.light.b}, 0.2);
    border: 1px solid ${Color.secondary.main};
    :hover {
      color: ${Color.white.light};
      border: 1px solid ${Color.secondary.light};
      background-color: ${Color.secondary.light};
    }

    :active {
      background-color: ${Color.secondary.dark};
      border: 1px solid ${Color.secondary.dark};
    }
  `}

  ${({ danger }) =>
    danger &&
    `
    background: rgb(${Color.danger.rgb.light.r},
    ${Color.danger.rgb.light.g}, ${Color.danger.rgb.light.b}, 0.2);
    border: 1px solid ${Color.danger.main};
    :hover {
      background-color: ${Color.danger.rgb.light.hover};
      border: 1px solid ${Color.danger.light};
    }

    // :active {
    //   background-color: ${Color.danger.dark};
    //   border: 1px solid ${Color.danger.dark};
    // }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color.black.A30};
    background-color: ${Color.black.A5};
    border: solid 1px ${Color.black.A5};
    :hover {
      background-color: ${Color.black.A5};
      border: 1px solid ${Color.black.A5};
      color: ${Color.black.A30};
      cursor: not-allowed;
    }
  `}

  ${({ transparent }) =>
    transparent &&
    `
    background-color: transparent;
  `}

  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: 8px;
  `}

  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: 8px;
  `}

`;

export default Button;
