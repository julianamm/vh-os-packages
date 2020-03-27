import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHText from "../Text/index";
import VHCardBase from "../Cards/Base/index";
import VHImgSvg from "../ImgSvg/index";
import * as S from './styles';

const VHImgCardsOverlay = props => {
    return (
        <Container>
            <Row alignItemsCenter responsive>
                <S.Wrapper>
                    <Row alignItemsCenter>
                        <VHImgSvg imgSvg={props.imgSvg} />
                    </Row>
                    <Row row alignItemsCenter>
                        <S.CardLeftWrapper>
                            <VHCardBase noHover>
                                <Row alignItemsCenter style={{ textAlign: "center" }}>
                                    <VHText 
                                        variant={"h2"}
                                        color={"gray-100"}
                                        text={props.cardLeftTitle}
                                    />
                                    <VHText 
                                        variant={"subtitle2"}
                                        color={"black-60"}
                                        text={props.cardLeftDescription}
                                    />
                                </Row>
                            </VHCardBase>
                        </S.CardLeftWrapper>
                        <S.CardRightWrapper>
                            <VHCardBase noHover>
                                <Row alignItemsCenter style={{ textAlign: "center" }}>
                                    <VHText 
                                        variant={"h2"}
                                        color={"gray-100"}
                                        text={props.cardRightTitle}
                                    />
                                    <VHText 
                                        variant={"subtitle2"}
                                        color={"black-60"}
                                        text={props.cardRightDescription}
                                    />
                                </Row>
                            </VHCardBase>
                        </S.CardRightWrapper>
                    </Row>
                </S.Wrapper>
            </Row>
        </Container>
    )
}

VHImgCardsOverlay.defaultProps = {
    className: '',
}

VHImgCardsOverlay.prototypes = {
    className: PropTypes.string,
    imgSvg: PropTypes.string.isRequired,
    cardLeftTitle: PropTypes.string,
    cardLeftDescription: PropTypes.string,
    cardRightTitle: PropTypes.string,
    cardRightDescription: PropTypes.string,
}

export default VHImgCardsOverlay;