import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHTitleDescription from '../TitleDescription'
import VHList from '../List'

const SecondStep = props => {

    return (
        <Row column >
            <Row row marginBottom={10}>
                <Row width={'10%'}>
                    <VHIcon icon={'skills'} title="city" md />
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Top Skills'}
                    />
                </Row>
            </Row>
            <Row column>
                <Row column marginBottom5>
                    <VHTitleDescription
                        contents={true}
                        className={`vh-general-section-topSkill-description ${props.className ? props.className : ''}`}
                        descriptionColor={
                            props.controls.topSkill.loading
                                ? "gray-40"
                                : props.controls.topSkill.error
                                    ? "red-light"
                                    : "gray-90"
                        }
                        inline
                        onEvent={props.onEvent}
                        title="Rank your top 3 skills"
                        description="1st = Highest proficiency level; 3rd = Lowest proficiency level"
                        titleColor={
                            props.controls.topSkill.loading
                                ? "gray-40"
                                : props.controls.topSkill.error
                                    ? "red"
                                    : "gray-100"
                        }
                        titleVariant="subtitle3"
                    />
                </Row>
                <Row marginBottom5>
                    <VHList
                        controls={props.controls}
                        onEvent={props.onEvent}
                        secondList={props.yearsOfExperienceList}
                        list={props.skillList}
                        items={props.topSkill}
                        data="vanhack" />
                </Row>
            </Row>

        </Row>
    )

}

SecondStep.defaultProps = {
    className: "",
};

SecondStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default SecondStep
