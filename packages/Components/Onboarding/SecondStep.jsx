import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHTitleDescription from '../TitleDescription'
import VHList from '../List'

const SecondStep = props => {

    return (
        <Row column marginLeft={1} marginRight={1}>
            <Row row marginBottom={10} alignItemsCenter >
                <Row autoWidth marginRight={5}>
                    <VHIcon icon={'skills'} title="city" md color="gray-50" />
                </Row>
                <Row >
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
                    onEvent={props.onEvent}
                    title="Rank your top 3 skills"
                    titleColor={
                        props.controls.topSkill.loading
                        ? "gray-40"
                        : props.controls.topSkill.error
                            ? "red"
                            : "gray-100"
                    }
                    titleVariant="subtitle1"
                    description="1st = Highest proficiency level; 3rd = Lowest proficiency level"
                    descriptionColor={
                        props.controls.topSkill.loading
                        ? "gray-40"
                        : props.controls.topSkill.error
                            ? "red"
                            : "gray-50"
                    }
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
