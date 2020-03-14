import styled from "styled-components";
import Color from "../../Colors";

export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-image: url(${props => props.image && props.image});
    background-repeat: no-repeat;
    background-position: center;
`