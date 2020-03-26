import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import VHText from "../Text/index";
import VHIcon from "../Icon/index";
import * as S from './styles';

const VHImgVideoIconText = props => {
    return (
        <Row alignItemsCenter>
            <S.Wrapper>
                <S.ImgItem image={props.image} />
                <S.ItemsWrapper>
                    <Row row>
                        <Row width={"10%"} alignItemsCenter style={{ justifyContent: "center", marginLeft: "15px" }}>
                            <VHIcon 
                                icon={props.icon}
                                color={props.color}
                                md
                            />
                        </Row>
                        <Row width={"60%"}>
                            <VHText 
                                variant={"platform1"}
                                color={"gray-10"}
                                text={props.text}
                            />
                        </Row>

                    </Row>
                </S.ItemsWrapper>
             
                <S.ImgOverlay />
            </S.Wrapper>
        </Row>
    )
}

VHImgVideoIconText.defaultProps = {
    className: '',
}

VHImgVideoIconText.prototypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func,
    data: PropTypes.object,
    image: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
}

export default VHImgVideoIconText;