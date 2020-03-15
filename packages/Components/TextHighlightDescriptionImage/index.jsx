import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHText from "../Text/index";
import * as S from './styles';

const VHTextHighlightDescriptionImage = props => {
    return (
        <Container>
            <Row row marginBottom={40}>
                <S.Wrapper reverse={props.reverse}>
                    <Row width={"50%"}>
                        <Row width={"35%"} marginBottom5 style={{ borderBottom: "3px solid #059ca6" }}>
                            <VHText 
                                variant={"platform2"}
                                color="tertiary-dark"
                                text={props.title}
                            />
                        </Row>
                        <Row marginBottom5>
                            <VHText 
                                variant={"h2"}
                                color="gray-90"
                                text={props.highlight}
                            />     
                        </Row>
                        <Row marginBottom5>
                            <VHText 
                                variant={"bodyweb"}
                                color="gray-90"
                                text={props.description}
                            />     
                        </Row>
                    </Row>
                    <Row width={"50%"}>
                        <S.ImgWrapper image={props.image}/>
                    </Row>
                </S.Wrapper>
            </Row>
        </Container>
    )
}

VHTextHighlightDescriptionImage.defaultProps = {
    reverse: false
}

VHTextHighlightDescriptionImage.prototypes = {
    className: '',
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reverse: PropTypes.bool
}
  
export default VHTextHighlightDescriptionImage;
