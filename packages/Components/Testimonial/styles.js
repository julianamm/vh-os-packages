import styled from 'styled-components';
import Color from '../../Colors';

export const AvatarWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextWrapper = styled.span`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 'regular';
    line-height: 21.5px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ sm }) => sm && `
        font-size: 14px;
        line-height: 18px;
    `}
    ${({ xs }) => xs && `
        font-size: 12px;
        line-height: 16px;
    `}
    ${({ lg }) => lg && `
        font-size: 16px !important;
        line-height: 20px;
    `}
`
