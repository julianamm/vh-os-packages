import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHTitleDescription from "../TitleDescription/index";


const VHBlackTitleDescription = props => {

    return (
        <Row>
            <VHTitleDescription
                className="vh-black-title-description"
                data={props.data}
                description={props.rightTitle}
                descriptionColor="gray-60"
                descriptionVariant="platform1"
                inline
                title={props.title}
                titleColor="gray-100"
                titleVariant="subtitle2"
            />
            <VHTitleDescription
                className="vh-black-title-description"
                data={props.data}
                title={props.description}
                titleColor="gray-90"
                titleVariant="cation"
            />
        </Row>
    )
}

VHBlackTitleDescription.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    rightTitle: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHBlackTitleDescription;
