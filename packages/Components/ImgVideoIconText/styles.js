import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    width: 600px;
    height: 470px;
    position: relative;
` 

export const ImgItem = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
` 

export const ImgOverlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    border-radius: 0 0 7px 7px;
    background-image: linear-gradient(to top, #080809, rgba(88, 90, 90, 0));
    -webkit-transition: all ease .5s;
    -moz-transition: all ease .5s;
    transition: all ease .5s;
    filter: blur(8px);
    -webkit-filter: blur(8px);
` 

export const ItemsWrapper = styled.div`
    position: absolute;
    bottom: 30px;
    z-index: 99;
` 