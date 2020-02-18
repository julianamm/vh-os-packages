import styled from 'styled-components';
import Color from '../../Colors'

export const Textarea = styled.textarea`
    width: 100%;
    height: 25px;
    border-radius: 6px;
    border: solid 1px ${Color["gray-30"]};
    background-color: ${Color["gray-20"]};
    padding: 15px;
    margin-top: 5px;
    outline: 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    font-family: Roboto;
    letter-spacing: normal;
`