import styled, { keyframes } from 'styled-components';
import Color from "../../Colors";

/**
 * FadeIn Animation
 */
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
  display: ${props => (props.open ? "block" : "none")};
  animation: 0.35s ${FadeIn} ease-in;
  
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;

  :hover {
    overflow-y: auto;
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Color["gray-30"]};
    border-radius: 4px;
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  width: ${props => props.width ? `${props.width}%` : 'auto'};
  min-width: ${props => props.minWidth ? `${props.minWidth}px` : 'auto'};
  max-width: 960px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${Color.white};
  border: solid 1px #e0e0e0;
  border-radius: 3px;
  padding: 32px;
  animation: 0.35s ${FadeIn} ease-in;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  margin: 0;
  padding: 0;
  font-family: NunitoSans, sans-serif;
  color: ${Color["black-90"]};
`;

export const Close = styled.span`
  cursor: pointer;
  float: right;
  color: #000000;
`;

export const Content = styled.div`
  margin-top: 1rem;
  font-family: Roboto;
`;

export const ConfirmationSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
  justify-content: end;
  margin-top: 2rem;
`;
