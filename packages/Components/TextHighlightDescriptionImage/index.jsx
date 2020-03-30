import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHText from "../Text/index";
import VHImgSvg from "../ImgSvg/index";
import * as S from './styles';

const VHTextHighlightDescriptionImage = props => {
    return (
        <Row>
            <S.Wrapper reverse={props.reverse} responsive>
                <Row marginBottom5 style={{ justifyContent: "center"}}>
                    <Row alignItemsLeft marginBottom={8}>
                        <S.UnderlineText>
                            <VHText 
                                variant={"platform2"}
                                color="tertiary-dark"
                                text={props.title}
                            />
                        </S.UnderlineText>
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
                <Row alignItemsCenter marginBottom5 mobileImgsSM>
                    <VHImgSvg imgSvg={props.imgSvg} />
                </Row>
            </S.Wrapper>

        </Row>
    )
}

VHTextHighlightDescriptionImage.defaultProps = {
    reverse: false,
}

VHTextHighlightDescriptionImage.prototypes = {
    className: '',
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSvg: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
}

export default VHTextHighlightDescriptionImage;