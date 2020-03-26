import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHText from "../Text/index";
import VHCardBase from "../Cards/Base/index";
import * as S from './styles';

const VHImgCardsOverlay = props => {
    return (
        <Container>
            <Row responsive>
                <S.Wrapper>
                    <S.ImgItem image={props.image}/>
                    <S.CardsWrapper>
                        <Row row alignItemsCenter>
                            <S.CardLeftWrapper>
                                <VHCardBase noHover>
                                    <Row alignItemsCenter style={{ padding: "50px 0", textAlign: "center" }}>
                                        <Row width={"90%"} alignItemsCenter>
                                            <VHText 
                                                variant={"h2"}
                                                color={"gray-100"}
                                                text={props.cardLeftTitle}
                                            />
                                        </Row>
                                        <Row width={"90%"} alignItemsCenter style={{ textAlign: "center"}}>
                                            <VHText 
                                                variant={"subtitle2"}
                                                color={"black-60"}
                                                text={props.cardLeftDescription}
                                            />
                                        </Row>
                                    </Row>
                                </VHCardBase>
                            </S.CardLeftWrapper>

                            <S.CardRightWrapper>
                                <VHCardBase noHover>
                                    <Row alignItemsCenter style={{ padding: "50px 0", textAlign: "center"}}>
                                        <Row width={"90%"} alignItemsCenter>
                                            <VHText 
                                                variant={"h2"}
                                                color={"gray-100"}
                                                text={props.cardRightTitle}
                                            />
                                        </Row>
                                        <Row width={"90%"} alignItemsCenter style={{ textAlign: "center"}}>
                                            <VHText 
                                                variant={"subtitle2"}
                                                color={"black-60"}
                                                text={props.cardRightDescription}
                                            />
                                        </Row>
                                    </Row>
                                </VHCardBase>
                            </S.CardRightWrapper>
                        </Row>
                    </S.CardsWrapper>
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
    image: PropTypes.string.isRequired,
    cardLeftTitle: PropTypes.string,
    cardLeftDescription: PropTypes.string,
    cardRightTitle: PropTypes.string,
    cardRightDescription: PropTypes.string,
}

export default VHImgCardsOverlay;