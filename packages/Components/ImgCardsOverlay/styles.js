import styled from "styled-components";
import Color from "../../Colors";

export const ImgWrapper = styled.div`
    width: 80%;
    height: 80%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
    position: fixed; 
` 

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
` 

export const CardLeftWrapper = styled.div`
    width: 250px;
    height: 100%;
    // min-height: 600px;
    margin-right: 10px;
    z-index: 2;
    
` 

export const CardRightWrapper = styled.div`
    width: 250px;
    height: 100%;
    // min-height: 600px;
    margin-left: 10px;
    z-index: 2;
` 