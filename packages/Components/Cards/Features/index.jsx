import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../../Grid/index';
import VHIcon from '../../Icon/index';
import VHText from "../../Text/index";
import VHCardBase from "../../Cards/Base/index";
import * as S from './styles';

const VHCardFeatures = props => {
    return (
        <Container alignItemsCenter>
            <VHCardBase noHover={props.noHover}>
                <Row row alignItemsCenter responsive>
                    {/* <S.Group> */}
                        {props.features.map(feature => (
                            // <S.Item>
                                <Row marginTop={15} marginBottom5>
                                    <Row alignItemsCenter marginBottom5 height={50}>
                                        <VHIcon
                                            icon={feature.icon}
                                            title={feature.title}
                                            md
                                        />
                                    </Row>
                                    <Row alignItemsCenter marginBottom5 height={50}>
                                        <S.TextWrapper>
                                            <VHText 
                                                variant={"h4"}
                                                color="gray-90"
                                                text={feature.title}
                                            />
                                        </S.TextWrapper>
                                    </Row>
                                    <Row alignItemsCenter marginBottom5 height={160}>
                                        <S.TextWrapper>
                                        <VHText 
                                            variant={"bodyweb"}
                                            color="gray-60"
                                            text={feature.description}
                                        />
                                        </S.TextWrapper>       
                                    </Row>
                                </Row>
                            // </S.Item>
                        ))}
                    {/* </S.Group> */}
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