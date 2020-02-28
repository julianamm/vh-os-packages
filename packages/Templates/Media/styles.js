import styled from 'styled-components'
import Color from '../../Colors'

export const Wrapper1 = styled.div`
    width: 1439px;
    height: 391px;
    // object-fit: contain;
    background-color: ${Color["gradient-primary"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Press = styled.p`
    text-shadow: 0 0 16px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.25);
    font-family: Roboto;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${Color["gray-20"]};
`

export const Wrapper2 = styled.div`
    width: 1440px;
    height: 300px;
    background-color: ${Color["gray-20"]};
    display: flex;
    flex-direction: column;
    align-items: center;
`