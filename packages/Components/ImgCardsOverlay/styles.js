import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
` 

export const ImgItem = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 80%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
` 

export const CardsWrapper = styled.div`
    width: 100%;
    height: 100%;
` 

export const CardLeftWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin-right: 5px;
    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 2;
` 

export const CardRightWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin-right: 5px;
    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 30%;
    left: 52%;
    z-index: 2;
` 