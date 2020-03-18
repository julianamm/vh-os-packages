import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../../Grid/index';
import VHImg from '../../Img/index';
import VHText from "../../Text/index";
import VHCardBase from "../../Cards/Base/index";
import * as S from './styles';

const VHCardFeatures = props => {
    return (
        <Container alignItemsCenter>
            <VHCardBase noHover={props.noHover}>
                <Row row alignItemsCenter height={300}>
                    <S.Group>
                        {props.features.map(feature => (
                            <S.Item>
                                <Row width={300}>
                                    <Row alignItemsCenter marginBottom5>
                                        <VHImg
                                            source={feature.icon}
                                            title={feature.title}
                                            md
                                        />
                                    </Row>
                                    <Row alignItemsCenter marginBottom5>
                                        <S.TextWrapper>
                                            <VHText 
                                                variant={"h4"}
                                                color="gray-90"
                                                text={feature.title}
                                            />
                                        </S.TextWrapper>
                                    </Row>
                                    <Row alignItemsCenter marginBottom5>
                                        <S.TextWrapper>
                                        <VHText 
                                            variant={"bodyweb"}
                                            color="gray-60"
                                            text={feature.description}
                                        />
                                        </S.TextWrapper>       
                                    </Row>
                                </Row>
                            </S.Item>
                        ))}
                    </S.Group>
                </Row>
            </VHCardBase>
        </Container>
    )
}

VHCardFeatures.defaultProps = {
    className: '',
    noHover: true,
}

VHCardFeatures.prototypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    noHover: PropTypes.bool,

}

export default VHCardFeatures;