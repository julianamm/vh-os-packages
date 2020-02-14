import styled from "styled-components";
import Color from "../../../Colors";

export const PersonalInfo = styled.div`
   width: 100%;
   display: grid;
   div {
       margin-bottom: 0.188rem;
   }
`

export const AvatarWrapper = styled.div`
   border: 1px solid ${Color.blue};
   border-radius: 50%;
   width: 20.7px;
   height: 21.5px;
   display: grid;
   justify-content: center;
   align-items: center;
   margin-right: 1rem;
`

export const Avatar = styled.img`
   width: 100%;
   width: 18.7px;
   height: 19.5px;
   border-radius: 50%;
`

export const IconWrapper = styled.div`
   width: 22.7px;
   height: 21.5px;
   display: grid;
   justify-content: center;
   align-items: center;
   margin-right: 1rem;
`

export const TimeWrapper = styled.div`
   width: 22.7px;
   height: 21.5px;
   display: grid;
   justify-content: center;
   align-items: center;
`
export const CommentsWrapper = styled.div`
   width: 22.7px;
   height: 21.5px;
   display: grid;
   justify-content: center;
   align-items: center;
`

export const FavoriteWrapper = styled.div`
   width: 22.7px;
   height: 21.5px;
   display: grid;
   justify-content: center;
   align-items: center;
   padding-right: 10px;
`

export const MenuCircle = styled.div`
    cursor: pointer;
    margin-top: 0.75rem;
    div {
        width: 4px;
        height: 4px;
        margin-bottom: 3px;
        border-radius: 50%;
        background-color: ${Color["gray-90"]}
    }
`

export const Footer = styled.div`
    margin-top: 1rem;
    padding-top: 0.781rem;
    border-top: 1px solid ${Color["gray-10"]};
    display: grid;
    grid-template-columns: 75% auto;
`

export const Tag = styled.div`
    background-color: ${Color.green};
    width: 69px;
    text-align: center;
    border-radius: 32px;
    font-family: Roboto;
    font-size: 0.75rem;
    color: ${Color["gray-20"]};
    padding: 0.2rem 0.2rem;
    margin-bottom: 1rem;
`

export const Info = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color["gray-80"]};
`

export const Name = styled.h1`
 font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color["gradient-primary"]};
`

export const InfoTime = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.avgTime ? `${Color.green};` : `${Color.red};`}
`