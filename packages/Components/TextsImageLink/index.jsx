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
                        image={props.image}
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
                                    source={props.source}
                                    xsImg={props.xsImg}
                                    smImg={props.smImg}
                                    mdImg={props.mdImg}
                                    lgImg={props.lgImg}
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
    xsImg: false,
    smImg: true,
    mdImg: false,
    lgImg: false,
    reverseBottom: false,
}

VHTextsImageLink.prototypes = {
    className: '',
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reverseTop: PropTypes.bool,
    smLabel: PropTypes.bool,
    xsLabel: PropTypes.bool,
    lgLabel: PropTypes.bool,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    source: PropTypes.string.isRequired,
    xsImg: PropTypes.bool,
    smImg: PropTypes.bool,
    mdImg: PropTypes.bool,
    lgImg: PropTypes.bool,
    reverseBottom: PropTypes.bool,
}

export default VHTextsImageLink;