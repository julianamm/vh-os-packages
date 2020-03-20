import styled from "styled-components";
import Color from "../../Colors";

export const ImgWrapper = styled.div`
    width: 80%;
    height: 80%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute; 
` 

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
` 

export const CardLeftWrapper = styled.div`
    width: 280px;
    height: 100%;
    margin-right: 25px;
    z-index: 2;
    
` 

export const CardRightWrapper = styled.div`
    width: 280px;
    height: 100%;
    margin-left: 25px;
    z-index: 2;
` 