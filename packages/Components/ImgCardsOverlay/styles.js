import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
` 

export const CardLeftWrapper = styled.div`
    margin-right: 8px;
    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -5%;
    right: 50%;
    z-index: 3;
` 

export const CardRightWrapper = styled.div`
    margin-left: 8px;
    box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 45%;
    left: 50%;
    z-index: 2;
` 