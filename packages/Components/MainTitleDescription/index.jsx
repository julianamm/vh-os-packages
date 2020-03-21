import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHTitleDescription from "../TitleDescription/index";


const VHMainTitleDescription = props => {

    return (
        <Row>
            <VHTitleDescription
                pointer={props.pointer}
                onEvent={props.onEvent}
                onOpen={props.onOpen}
                setCurrentItem={props.setCurrentItem}
                className="vh-main-title-description"
                data={props.data}
                description={props.rightTitle}
                descriptionColor="gray-60"
                descriptionVariant="platform1"
                inline
                title={props.title}
                titleColor="primary-light"
                titleVariant="subtitle1"
                setNewExperience={props.setNewExperience}
            />
            <VHTitleDescription
                pointer={props.pointer}
                onEvent={props.onEvent}
                onOpen={props.onOpen}
                setCurrentItem={props.setCurrentItem}
                className="vh-main-title-description"
                data={props.data}
                title={props.description}
                titleColor="gray-90"
                titleVariant="cation"
            />
        </Row>
    )
}

VHMainTitleDescription.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    rightTitle: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHMainTitleDescription;
