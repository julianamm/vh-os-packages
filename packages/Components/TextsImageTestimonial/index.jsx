import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHTextHighlightDescriptionImage from "../../Components/TextHighlightDescriptionImage/index";
import VHTestimonial from "../../Components/Testimonial/index";
import * as S from './styles';

const VHTextsImageTestimonial = props => {
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
                            <Row>
                                <VHTestimonial 
                                    image={props.avatar}
                                    sizeImg={props.sizeAvatar}
                                    color={props.color}
                                    testimonial={props.testimonial}
                                    xsTestimonial={props.xsTestimonial}
                                    smTestimonial={props.smTestimonial}
                                    lgTestimonial={props.lgTestimonial}
                                />
                            </Row>
                            <Row></Row>
                        </S.Wrapper>
                    </Container>
                </Row>
        </Container>
    )
}

VHTextsImageTestimonial.defaultProps = {
    reverseTop: false,
    sizeAvatar: 'md',
    xsTestimonial: false,
    smTestimonial: false,
    lgTestimonial: false,
    reverseBottom: false,
}

VHTextsImageTestimonial.prototypes = {
    className: '',
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSvg: PropTypes.string.isRequired,
    reverseTop: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    sizeAvatar: PropTypes.string,
    testimonial: PropTypes.string.isRequired,
    color: PropTypes.string,
    xsTestimonial: PropTypes.bool,
    smTestimonial: PropTypes.bool,
    lgTestimonial: PropTypes.bool,
    reverseBottom: PropTypes.bool,
}

export default VHTextsImageTestimonial;