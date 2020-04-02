import styled from "styled-components";
import Color from "../../Colors";

const Button = styled.button`
  background-color: ${Color["primary"]};
  border: 1px solid ${Color["primary"]};
  width: fit-content;
  color: ${Color["white"]};
  padding:12px;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 14px;
  line-height: auto;
  text-align: center;
  cursor: pointer;
  

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
    font-size: 12px;
    line-height: auto;
    padding:6px;
  `}

  ${({ lg }) =>
    lg &&
    `
    font-size: 16px;
    font-weight:bold;
    padding:18px;
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
  
  ${({ success }) =>
    success &&
    `
    color: ${Color["white"]};
    border: 1px solid ${Color["green"]};
    background-color: ${Color["green"]};
    :hover {
      background-color: ${Color["green-dark"]};
      border: 1px solid ${Color["green-dark"]};
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

`;

export const OutlinedButton = styled.button`
  background-color: transparent;
  border: 1px solid ${Color["primary"]};
  color: ${Color["primary"]};
  padding:12px;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 14px;
  line-height: auto;
  text-align: center;
  cursor: pointer;

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
  ${({ sm }) =>
    sm &&
    `
    font-size: 12px;
    line-height: auto;
    padding:6px;
  `}

  ${({ lg }) =>
    lg &&
    `
    font-size: 16px;
    font-weight:bold;
    padding:18px;
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
    color: ${Color["red"]};
    border: 1px solid ${Color["red"]};
    :hover {
      background-color: ${Color["red-dark"]};
      border: 1px solid ${Color["red-dark"]};
    }
    :active {
      background-color: ${Color["red-dark"]};
      border: 1px solid ${Color["red-dark"]};
    }
  `}

  ${({ success }) =>
    success &&
    `
    color: ${Color["green"]};
    border: 1px solid ${Color["green"]};
    
    :hover {
      background-color: ${Color["green-dark"]};
      border: 1px solid ${Color["green-dark"]};
    }
    :active {
      background-color: ${Color["green-dark"]};
      border: 1px solid ${Color["green-dark"]};
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
`;

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${Color["primary"]};
  padding:12px;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 14px;
  line-height: auto;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: ${Color["gray-10"]};
    border: none;
  }

  :active {
    background-color: ${Color["gray-20"]};
    border: none;
  }

  ${({ nowrap }) =>
    nowrap &&
    `
    white-space:nowrap;
  `}
  ${({ sm }) =>
    sm &&
    `
    font-size: 12px;
    line-height: auto;
    padding:6px;
  `}

  ${({ lg }) =>
    lg &&
    `
    font-size: 16px;
    font-weight:bold;
    padding:18px;
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
    color: ${Color["primary"]};
    :hover {
      color: ${Color["primary-dark"]};
      background-color: ${Color["gray-10"]};      
    }
    :active {
      color: ${Color["primary-dark"]};
      background-color: ${Color["gray-30"]};
    }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    color: ${Color["secondary"]};  
    :hover {
      color: ${Color["secondary"]};  
      background-color: ${Color["gray-10"]};      
    }
    :active {
      color: ${Color["secondary"]};  
      background-color: ${Color["gray-30"]};
    }
  `}

  ${({ danger }) =>
    danger &&
    `
    color: ${Color["red"]};  
    :hover {
      color: ${Color["red"]};  
      background-color: ${Color["gray-10"]};      
    }
    :active {
      color: ${Color["red"]};  
      background-color: ${Color["gray-30"]};
    }
  `}

  ${({ success }) =>
    success &&
    `
    color: ${Color["green"]};  
    :hover {
      color: ${Color["green"]};  
      background-color: ${Color["gray-20"]};      
    }
    :active {
      color: ${Color["green"]};  
      background-color: ${Color["gray-30"]};
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color["black-40"]};
    background-color: ${Color["black-10"]};
   
    :hover {
      background-color: ${Color["black-10"]};
      color: ${Color["black-40"]};
      cursor: not-allowed;
    }
  `}

  ${({ white }) =>
    white &&
    `  
    color: ${Color["white"]};
    :hover {
      background-color: ${Color["gray-20"]};      
    }
    :active {
      background-color: ${Color["gray-30"]};
    }
    `}
`;

export default Button;
