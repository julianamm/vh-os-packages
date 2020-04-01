import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Colors from '../../Colors'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHSelect from '../Input/Select'

const FirstStep = props => {
    const steps = new Array(props.steps).fill('');
    return (
        <Row row alignItemsCenter >
            <Row width={'10%'}>
                <VHIcon icon={'experience'} title="city" md />
            </Row>
            <Row width={'70%'}>
                <VHText
                    variant={"h4"}
                    color="gray-90"
                    text={'Professional details'}
                />
            </Row>

            <Row width={'60%'}>
                <VHSelect
                    preLoading={props.preLoading}
                    caption="Which role best applies to your experience?"
                    captionColor={
                        props.controls.positionSkill.loading
                            ? "gray-40"
                            : props.controls.positionSkill.error
                                ? "red"
                                : 'gray-100'
                    }
                    className={`vh-skills-section-positionSkill ${props.className ? props.className : ''}`}
                    currentItem={position}
                    data="positionSkill"
                    onEvent={props.onEvent}
                    items={positions}
                    isLoading={props.controls.positionSkill.loading}
                    description={props.controls.positionSkill.error && props.controls.positionSkill.message}
                    descriptionColor="red-light"
                />
            </Row>

            <Row width={'30%'}>
                <VHSelect
                    preLoading={props.preLoading}
                    caption="How many years have you worked as a tech professional?"
                    captionColor={
                        props.controls.yearsOfExperience.loading
                            ? "gray-40"
                            : props.controls.yearsOfExperience.error
                                ? "red"
                                : 'gray-100'
                    }
                    className={`vh-skills-section-yearsOfExperience ${props.className ? props.className : ''}`}
                    currentItem={yearsOfExperience}
                    data="yearsOfExperience"
                    onEvent={props.onEvent}
                    items={yearsOfExperienceList}
                    isLoading={props.controls.yearsOfExperience.loading}
                    description={props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message}
                    descriptionColor="red-light"
                />
            </Row>
            <Row paddingRight8>
                <VHInputRadio
                    data={'activelyLookingForJob'}
                    color="gray-100"
                    variant="subtitle3"
                    onEvent={props.onEvent}
                    text={'Are you actively looking for a job?'}
                    checked={props.activelyLookingForJob}
                />
            </Row>

        </Row>
    )

}

FirstStep.defaultProps = {
    className: "",
};

FirstStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default FirstStep
