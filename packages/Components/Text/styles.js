import styled from 'styled-components'
import Color from '../../Colors'

export const H1 = styled.h1`
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 48px;
    font-weight: 'lighter';

`
export const H2 = styled.h2`
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 34px;
    font-weight: 'lighter';

`
export const H3 = styled.h3`
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 24px;
    font-weight: 'normal';

`
export const H4 = styled.h4`
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 22px;
    font-weight: 'bold';

`
export const H5 = styled.h5`
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 22px;
    font-weight: 'regular';

`
export const H6 = styled.h6`
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 20px;
    font-weight: 'regular';

`
export const Subtitle1 = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 'regular';
    line-height: 22.4px;

`
export const Subtitle2 = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 'bold';

`
export const Subtitle3 = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 'lighter';
    line-height: 23.1px;

`
export const BodyWeb = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 'regular';
    line-height: 28px;

`
export const BodyPlatform = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 'regular';
    line-height: 21.5px;

`
export const BodyPlatform2 = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 'regular';

`
export const Caption = styled.p`
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 'regular';

`
