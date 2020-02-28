import styled from 'styled-components';
import Color from '../../Colors';

export const PreloaderBubble = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32px);
  grid-column-gap: 16px;

  ${({ size }) =>
    size === 'md' &&
    `
      grid-template-columns: repeat(3, 24px);
      grid-column-gap: 12px;
    `}

  ${({ size }) =>
    size === 'sm' &&
    `
      grid-template-columns: repeat(3, 16px);
      grid-column-gap: 8px;
    `}

  ${({ size }) =>
    size === 'xs' &&
    `
      grid-template-columns: repeat(3, 8px);
      grid-column-gap: 12px;
    `}

  div {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: ${Color['primary-light']};
    -webkit-animation: bounce 1.48s ease-in-out infinite both;
    animation: bounce 1.48s ease-in-out infinite both;
    ${({ size }) =>
    size === 'md' &&
    `
      width: 32px;
      height: 32px;
    `}

    ${({ size }) =>
    size === 'sm' &&
    `
      width: 24px;
      height: 24px;
    `}

    ${({ size }) =>
    size === 'xs' &&
    `
      width: 16px;
      height: 16px;
    `}

    :nth-child(1) {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    :nth-child(2) {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    @-webkit-keyframes bounce {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    @keyframes bounce {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @-webkit-keyframes beat {
      to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
    }
    @keyframes beat {
      to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
    }
  }
`;

export const PreloaderCircle = styled.div`
  div {
    width: 50px;
    height: 50px;
    display: block;
    background: transparent;
    border-radius: 50%;
    border: 7px solid rgba(28, 128, 128, 0.2);
    border-left: 7px solid ${Color['primary-light']};
    animation: 1.5s rotate infinite linear;
    margin: 0 auto;
    @keyframes rotate {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }

    ${({ size }) =>
    size === 'md' &&
    `
      width: 32px;
      height: 32px;
      border: 6px solid rgba(28, 128, 128, 0.2);
      border-left: 6px solid ${Color['primary-light']};
    `}

    ${({ size }) =>
    size === 'sm' &&
    `
      width: 24px;
      height: 24px;
      border: 3px solid rgba(28, 128, 128, 0.2);
      border-left: 3px solid ${Color['primary-light']};
    `}

    ${({ size }) =>
    size === 'xs' &&
    `
      width: 16px;
      height: 16px;
      border: 2px solid rgba(28, 128, 128, 0.2);
      border-left: 2px solid ${Color['primary-light']};
    `}
  }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
`;

export const ImageSection = styled.div`
  margin: 0 0 16px 0;
`;

export const PreloaderSection = styled.div`
  margin-left: -6px;
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
