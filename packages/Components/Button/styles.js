import styled from "styled-components";
import Color from "../../Colors";

const Button = styled.button`
  background-color: ${Color.primary.main};
  border: 1px solid ${Color.primary.main};
  color: ${Color.white.main};
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
    background-color: ${Color.primary.light};
  }

  :active {
    background-color: ${Color.primary.dark};
  }

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
    background-color: ${Color.primary.main};
    border: 1px solid ${Color.primary.main};
    :hover {
      background-color: ${Color.primary.light};
      border: 1px solid ${Color.primary.light};
    }
    :active {
      background-color: ${Color.primary.dark};
      border: 1px solid ${Color.primary.dark};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    background-color: ${Color.secondary.main};
    border: 1px solid ${Color.secondary.main};
    :hover {
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
    background-color: ${Color.danger.main};
    border: 1px solid ${Color.danger.main};
    :hover {
      background-color: ${Color.danger.light};
      border: 1px solid ${Color.danger.light};
    }

    :active {
      background-color: ${Color.danger.dark};
      border: 1px solid ${Color.danger.dark};
    }
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

`;

export const OutlinedButton = styled.button`
  color: ${Color.primary.main};
  border: 1px solid ${Color.primary.main};
  border-radius: 4px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  height: 32px;
  background: transparent;

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

  ${({ full }) =>
    full &&
    `
    width: 100%;
  `}

  ${({ primary }) =>
    primary &&
    `
    color: ${Color.primary.main};
    border: 1px solid ${Color.primary.main};
    :hover {
      background-color: ${Color.primary.light};
      border: 1px solid ${Color.primary.light};
    }
    :active {
      background-color: ${Color.primary.dark};
      border: 1px solid ${Color.primary.dark};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    color: ${Color.secondary.main};
    border: 1px solid ${Color.secondary.main};
    :hover {
      background-color: ${Color.secondary.light};
      border: 1px solid ${Color.secondary.light};
    }
    :active {
      background-color: ${Color.secondary.dark};
      border: 1px solid ${Color.secondary.dark};
    }
  `}

  ${({ danger }) =>
    danger &&
    `
    color: ${Color.danger.main};
    border: 1px solid ${Color.danger.main};
    :hover {
      background-color: ${Color.danger.light};
      border: 1px solid ${Color.danger.light};
    }
    :active {
      background-color: ${Color.danger.dark};
      border: 1px solid ${Color.danger.dark};
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color.black.A30} !important;
    background-color: ${Color.black.A5} !important;
    border: solid 1px ${Color.black.A5} !important;
    :hover {
      background-color: ${Color.black.A5};
      border: 1px solid ${Color.black.A5};
      color: ${Color.black.A30};
      cursor: not-allowed;
    }
  `}

  ${({ white }) =>
    white &&
    `
      background-color: transparent;
      border: 1px solid ${Color.white.main};
      color: ${Color.white.main};
      :hover {
        background-color: ${Color.primary.light};
        border: 1px solid ${Color.primary.light};
      }

      :active {
        background-color: ${Color.primary.dark};
        border: 1px solid ${Color.primary.dark};
      }
    `}
`;

export default Button;
