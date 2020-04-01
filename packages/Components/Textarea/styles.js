import styled from 'styled-components';
import Color from '../../Colors'
import VHInput from '../Input/Simple'

export const Textarea = styled(VHInput)`
    width: 100%;
    min-height:45px;
    border-radius: 6px;
    border: solid 1px ${Color["gray-30"]};
    background-color: ${Color["gray-20"]};
    padding: 6px 9px;
    margin-top: 5px;
    outline: 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    font-family: Roboto;
    letter-spacing: normal;
`