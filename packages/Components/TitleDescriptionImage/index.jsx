import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import VHText from "../Text/index";
import VHImgSvg from "../ImgSvg";

const VHTitleDescriptionImage =  props => {
    return (
        <Row row alignItemsCenter responsive>
            <Row style={{ justifyContent: "center", marginRight: "30px"}}>
                <Row marginBottom5 responsive>
                    <VHText 
                        variant={"h4"}
                        color={"gray-100"}
                        text={props.title}
                    />
                </Row>
                <VHText 
                    variant={"h6"}
                    color={"black-70"}
                    text={props.description}
                />
            </Row>
            <Row alignItemsCenter>
                <VHImgSvg imgSvg={props.imgSvg} />
            </Row>
        </Row>
    )
}

VHTitleDescriptionImage.defaultProps = {
    className: '',
}

VHTitleDescriptionImage.prototypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func,
    data: PropTypes.object,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSvg: PropTypes.string.isRequired,
}

export default VHTitleDescriptionImage;