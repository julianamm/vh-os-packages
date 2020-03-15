import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHImg from '../Img/index';
import VHText from "../Text/index";
import VHCardBase from "../Cards/Base/index";
import * as S from './styles';

const VHFeaturesCard = props => {
    return (
        <Container alignItemsCenter>
            {/* <VHCardBase>
                <Row row alignItemsCenter height={300}>
                    {props.features.map((feature, index) => (
                        <Row alignItemsCenter>
                            <Row alignItemsCenter marginBottom5>
                                <VHImg
                                    source={feature.icon}
                                    title={feature.title}
                                    md
                                />
                            </Row>
                            <S.RightBorder>
                                <Row alignItemsCenter marginBottom5>
                                    <S.TextWrapper>
                                        <VHText 
                                            variant={"h4"}
                                            color="gray-90"
                                            text={feature.title}
                                        />
                                    </S.TextWrapper>
                                </Row>
                                <Row alignItemsCenter>
                                    <S.TextWrapper>
                                    <VHText 
                                        variant={"bodyweb"}
                                        color="gray-60"
                                        text={feature.description}
                                    />
                                    </S.TextWrapper>       
                                </Row>
                            </S.RightBorder>
                        </Row>
                    ))}
                </Row>
            </VHCardBase> */}
            <VHCardBase noHover>
                <Row row alignItemsCenter height={350}>
                    <Row alignItemsCenter>
                        <Row alignItemsCenter marginBottom5>
                            <VHImg
                                source={props.icon1}
                                title={props.title1}
                                md
                            />
                        </Row>
                        <S.RightBorder>
                            <Row alignItemsCenter marginBottom5>
                                <S.TextWrapper>
                                    <VHText 
                                        variant={"h4"}
                                        color="gray-90"
                                        text={props.title1}
                                    />
                                </S.TextWrapper>
                            </Row>
                            <Row alignItemsCenter>
                                <S.TextWrapper>
                                <VHText 
                                    variant={"bodyweb"}
                                    color="gray-60"
                                    text={props.description1}
                                />
                                </S.TextWrapper>       
                            </Row>
                        </S.RightBorder>
                    </Row>
                    <Row alignItemsCenter>
                        <Row alignItemsCenter marginBottom5>
                            <VHImg
                                source={props.icon2}
                                title={props.title2}
                                md
                            />
                        </Row>
                        <S.RightBorder>
                            <Row alignItemsCenter marginBottom5>
                                <S.TextWrapper>
                                    <VHText 
                                        variant={"h4"}
                                        color="gray-90"
                                        text={props.title2}
                                    />
                                </S.TextWrapper>
                            </Row>
                            <Row alignItemsCenter>
                                <S.TextWrapper>
                                <VHText 
                                    variant={"bodyweb"}
                                    color="gray-60"
                                    text={props.description2}
                                />
                                </S.TextWrapper>       
                            </Row>
                        </S.RightBorder>
                    </Row>
                    <Row alignItemsCenter>
                        <Row alignItemsCenter marginBottom5>
                            <VHImg
                                source={props.icon3}
                                title={props.title3}
                                md
                            />
                        </Row>
                        <S.RightBorder noBorder>
                            <Row alignItemsCenter marginBottom5>
                                <S.TextWrapper>
                                    <VHText 
                                        variant={"h4"}
                                        color="gray-90"
                                        text={props.title3}
                                    />
                                </S.TextWrapper>
                            </Row>
                            <Row alignItemsCenter>
                                <S.TextWrapper>
                                <VHText 
                                    variant={"bodyweb"}
                                    color="gray-60"
                                    text={props.description3}
                                />
                                </S.TextWrapper>       
                            </Row>
                        </S.RightBorder>
                    </Row>
                </Row>
            </VHCardBase>
        </Container>
    )
}

VHFeaturesCard.defaultProps = {
    className: '',
    icon1: PropTypes.string,
    title1: PropTypes.string,
    description1: PropTypes.string,
    icon2: PropTypes.string,
    title2: PropTypes.string,
    description2: PropTypes.string,
    icon3: PropTypes.string,
    title3: PropTypes.string,
    description3: PropTypes.string,
}
  
export default VHFeaturesCard;
