import styled from 'styled-components'
import Color from '../../Colors'

export const Title = styled.p`
    width: 90px;
    height: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--gray-80);
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`
export const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`
export const Name = styled.p`
    height: 21px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    color: ${Color['gray-100']};
    padding-left: 12px;
`
export const Date = styled.p`
    height: 14px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${Color['gray-50']};
    padding-left: 12px;
`
export const Description = styled.p`
    width: 376px;
    height: 30px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    color: ${Color['gray-80']};
    padding-left: 45px;
    margin-top: -10px;
`
export const Area = styled.textarea`
    width: 589px;
    height: 40px;
    border-radius: 6px;
    border: solid 1px var(--gray-30);
    background-color: var(--gray-20);
    padding: 15px;

    ::placeholder {
        color: gray;
    }
`
