import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHText from "../Text/index";
import VHCardBase from "../Cards/Base/index";
import * as S from './styles';

const VHImgCardsOverlay = props => {
    return (
        <Container>
            <Row alignItemsCenter>
                <Row alignItemsCenter>
                    <S.ImgWrapper image={props.image}/>
                </Row>
                <S.Wrapper>
                    <Row row alignItemsCenter>
                        <Row width={"50%"} style={{ height: "100%", alignItems: "flex-end", justifyContent: "start"}}>
                            <S.CardLeftWrapper>
                                <VHCardBase noHover>
                                    <Row alignItemsCenter style={{ padding: "50px 0", textAlign: "center"}}>
                                        <Row width={"80%"} alignItemsCenter>
                                            <VHText 
                                                variant={"h2"}
                                                color={"gray-100"}
                                                text={props.cardLeftTitle}
                                            />
                                        </Row>
                                        <Row width={"80%"} alignItemsCenter style={{ textAlign: "center"}}>
                                            <VHText 
                                                variant={"subtitle2"}
                                                color={"black-60"}
                                                text={props.cardLeftDescription}
                                            />
                                        </Row>
                                    </Row>
                                </VHCardBase>
                            </S.CardLeftWrapper>
                        </Row>
                        <Row width={"50%"} style={{ marginTop: "25%", alignItems: "flex-start", justifyContent: "flex-end"}}>
                            <S.CardRightWrapper>
                                <VHCardBase noHover>
                                    <Row alignItemsCenter style={{ padding: "50px 0", textAlign: "center"}}>
                                        <Row width={"80%"} alignItemsCenter>
                                            <VHText 
                                                variant={"h2"}
                                                color={"gray-100"}
                                                text={props.cardRightTitle}
                                            />
                                        </Row>
                                        <Row width={"80%"} alignItemsCenter style={{ textAlign: "center"}}>
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
    image: PropTypes.string.isRequired,
    cardLeftTitle: PropTypes.string,
    cardLeftDescription: PropTypes.string,
    cardRightTitle: PropTypes.string,
    cardRightDescription: PropTypes.string,
}

export default VHImgCardsOverlay;