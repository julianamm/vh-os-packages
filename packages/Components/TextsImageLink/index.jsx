import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHTextHighlightDescriptionImage from "../../Components/TextHighlightDescriptionImage/index";
import VHLinkImage from "../../Hyperlinks/LinkImage/index";
import * as S from './styles';

const VHTextsImageLink = props => {
    return (
        <Container>
                <Row>
                    <VHTextHighlightDescriptionImage 
                        title={props.title}
                        highlight={props.highlight}
                        description={props.description}
                        imgSvg={props.imgSvg}
                        reverse={props.reverseTop}
                    />
                    <Container>
                        <S.Wrapper reverse={props.reverseBottom}>
                            <Row width={"50%"}>
                                <VHLinkImage 
                                    xsLabel={props.xsLabel}
                                    smLabel={props.smLabel}
                                    lgLabel={props.lgLabel}
                                    label={props.label}
                                    color={props.color}
                                    to={props.to}
                                    icon={props.icon}
                                    xsIcon={props.xsIcon}
                                    smIcon={props.smIcon}
                                    mdIcon={props.mdIcon}
                                    lgIcon={props.lgImg}
                                />
                            </Row>
                            <Row width={"50%"}></Row>
                        </S.Wrapper>
                    </Container>
                </Row>
        </Container>
    )
}

VHTextsImageLink.defaultProps = {
    reverseTop: false,
    xsLabel: false,
    smLabel: true,
    lgLabel: false,
    xsIcon: false,
    smIcon: true,
    mdIcon: false,
    lgIcon: false,
    reverseBottom: false,
}

VHTextsImageLink.prototypes = {
    className: '',
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSvg: PropTypes.string.isRequired,
    reverseTop: PropTypes.bool,
    smLabel: PropTypes.bool,
    xsLabel: PropTypes.bool,
    lgLabel: PropTypes.bool,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    xsIcon: PropTypes.bool,
    smIcon: PropTypes.bool,
    mdIcon: PropTypes.bool,
    lgIcon: PropTypes.bool,
    reverseBottom: PropTypes.bool,
}

export default VHTextsImageLink;