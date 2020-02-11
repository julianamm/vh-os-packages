import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHTitleDescription from "../TitleDescription/index";


const VHInfoTitleDescription = props => {

    return (
        <Row>
            <VHTitleDescription
                className="vh-info-title-description"
                data={props.data}
                description={props.rightTitle}
                descriptionColor="gray-30"
                descriptionVariant="platform1"
                inline
                title={props.title}
                titleColor="gray-90"
                titleVariant="subtitle3"
            />
            <VHTitleDescription
                className="vh-info-title-description"
                data={props.data}
                title={props.description}
                titleColor="gray-50"
                titleVariant="platform1"
            />
        </Row>
    )
}

VHInfoTitleDescription.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    rightTitle: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHInfoTitleDescription;
