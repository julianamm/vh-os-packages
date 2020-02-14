import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid';
import VHChip from "../Chips/index";
import VHBlackTitleDescription from "../BlackTitleDescription/index";
import VHIconTitleList from "../IconTitleList/index";

const VHUserPositonExperience = props => {
    return (        
        <Row hideTimeline>
            <VHBlackTitleDescription 
                title={props.headline}
                description={props.period}
                onEvent={props.onEvent}
                hideTimeline
                rightTitle={props.rightTitle}
                className={`vh-user-position-experience ${props.className ? props.className : ''}`}
            />
            <VHIconTitleList 
                onEvent={props.onEvent}
                items={props.description}
            />
            <Row style={{ borderRadius: "20px", display: "inline"}}>
                {props.skills.map(skill =>( 
                    <VHChip
                        label={skill.label}
                        transparent={props.transparent}
                        onEvent={props.onEvent}
                        // style={{ borderRadius: "20px" }}
                    />  
                ))}
            </Row>
        </Row>  
    )
}

VHUserPositonExperience.defaultProps = {
    onEvent: null,
    hideTimeline: false,
    className: "",
    transparent: true
};

VHUserPositonExperience.propTypes = {
    onEvent: PropTypes.func,
    headline: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    hideTimeline: PropTypes.bool,
    rightTitle: PropTypes.string,
    description: PropTypes.array.isRequired,
    skills: PropTypes.array,
    className: PropTypes.string,
}

export default VHUserPositonExperience;
