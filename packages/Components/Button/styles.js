import styled from "styled-components";
import Color from "../../Colors";

const Button = styled.button`
  background-color: ${Color["gradient-primary"]};
  border: 1px solid ${Color["gradient-primary"]};
  color: ${Color["gray-20"]};
  border-radius: 4px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  height: 32px;

  :focus {
    outline-style: none;
  }

  :hover {
    background-color: ${Color["primary-light"]};
  }

  :active {
    background-color: ${Color["primary-dark"]};
  }

  ${({ nowrap }) =>
    nowrap &&
    `
    white-space:nowrap;
  `}

  ${({ sm }) =>
    sm &&
    `
    height: 32px;
    font-size: 14px;
    line-height: 18px;
  `}

  ${({ lg }) =>
    lg &&
    `
    height: 40px;
    font-size: 16px;
    line-height: 20px;
  `}

  ${({ xs }) =>
    xs &&
    `
    height: 24px;
    font-size: 12px;
    line-height: 16px;
  `}

  ${({ full }) =>
    full &&
    `
    width: 100%;
  `}

  ${({ primary }) =>
    primary &&
    `
    background-color: ${Color["gradient-primary"]};
    border: 1px solid ${Color["gradient-primary"]};
    :hover {
      background-color: ${Color["primary-light"]};
      border: 1px solid ${Color["primary-light"]};
    }
    :active {
      background-color: ${Color["primary-dark"]};
      border: 1px solid ${Color["primary-dark"]};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    background-color: ${Color.secondary};
    border: 1px solid ${Color.secondary};
    :hover {
      border: 1px solid ${Color["secondary-light"]};
      background-color: ${Color["secondary-light"]};
    }

    :active {
      background-color: ${Color["secondary-dark"]};
      border: 1px solid ${Color["secondary-dark"]};
    }
  `}

  ${({ danger }) =>
    danger &&
    `
    background-color: ${Color.red};
    border: 1px solid ${Color.red};
    :hover {
      background-color: ${Color.red};
      border: 1px solid ${Color.red};
    }

    :active {
      background-color: ${Color["red-dark"]};
      border: 1px solid ${Color["red-dark"]};
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color["black-40"]};
    background-color: ${Color["black-10"]};
    border: solid 1px ${Color["black-10"]};
    :hover {
      background-color: ${Color["black-10"]};
      border: 1px solid ${Color["black-10"]};
      color: ${Color["black-40"]};
      cursor: not-allowed;
    }
  `}

  ${({ black }) =>
  black &&
  `
  background-color: ${Color["black-100"]};
  border: 1px solid ${Color["black-100"]};
  :hover {
    background-color: ${Color["black-80"]};
    border: 1px solid ${Color["black-80"]};
  }
  :active {
    background-color: ${Color["black-90"]};
    border: 1px solid ${Color["black-90"]};
  }
`}

`;

export const OutlinedButton = styled.button`
  color: ${Color["gradient-primary"]};
  border: 1px solid ${Color["gradient-primary"]};
  border-radius: 4px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  height: 32px;
  background: transparent;

  :hover {
    background-color: ${Color["primary-light"]};
    border: 1px solid ${Color["primary-light"]};
    color: ${Color["white-light"]};
  }

  :active {
    background-color: ${Color["primary-dark"]};
    border: 1px solid ${Color["primary-dark"]};
    color: ${Color["white-light"]};
  }

  ${({ nowrap }) =>
    nowrap &&
    `
    white-space:nowrap;
  `}

  ${({ full }) =>
    full &&
    `
    width: 100%;
  `}

  ${({ primary }) =>
    primary &&
    `
    color: ${Color["gradient-primary"]};
    border: 1px solid ${Color["gradient-primary"]};
    :hover {
      background-color: ${Color["primary-light"]};
      border: 1px solid ${Color["primary-light"]};
    }
    :active {
      background-color: ${Color["primary-dark"]};
      border: 1px solid ${Color["primary-dark"]};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    color: ${Color.secondary};
    border: 1px solid ${Color.secondary};
    :hover {
      background-color: ${Color["secondary-light"]};
      border: 1px solid ${Color["secondary-light"]};
    }
    :active {
      background-color: ${Color["secondary-dark"]};
      border: 1px solid ${Color["secondary-dark"]};
    }
  `}

  ${({ danger }) =>
    danger &&
    `
    color: ${Color.red};
    border: 1px solid ${Color.red};
    :hover {
      background-color: ${Color["red-dark"]};
      border: 1px solid ${Color.red};
    }
    :active {
      background-color: ${Color["red-dark"]};
      border: 1px solid ${Color["red-dark"]};
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color["black-40"]} !important;
    background-color: ${Color["black-10"]} !important;
    border: solid 1px ${Color["black-10"]} !important;
    :hover {
      background-color: ${Color["black-10"]};
      border: 1px solid ${Color["black-10"]};
      color: ${Color["black-40"]};
      cursor: not-allowed;
    }
  `}

  ${({ white }) =>
    white &&
    `
      background-color: transparent;
      border: 1px solid ${Color["gray-20"]};
      color: ${Color["gray-20"]};
      :hover {
        background-color: ${Color["primary-light"]};
        border: 1px solid ${Color["primary-light"]};
      }

      :active {
        background-color: ${Color["primary-dark"]};
        border: 1px solid ${Color["primary-dark"]};
      }
    `}

    ${({ black }) =>
    black &&
    `
    color: ${Color["black-100"]};
    border: 1px solid ${Color["black-100"]};
    :hover {
      background-color: ${Color["black-80"]};
      border: 1px solid ${Color["black-80"]};
    }
    :active {
      background-color: ${Color["black-90"]};
      border: 1px solid ${Color["black-90"]};
    }
  `}

`;

export default Button;
