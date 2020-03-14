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
            <VHCardBase>
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




            </VHCardBase>
        </Container>
    )
}

VHFeaturesCard.defaultProps = {
    className: '',
}
  
export default VHFeaturesCard;
