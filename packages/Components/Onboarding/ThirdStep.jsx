import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHTitleDescription from '../TitleDescription'
import VHSecondaryList from '../SecondaryList'

const ThirdStep = props => {

    return (
        <Row column marginLeft={1} marginRight={1}>
            <Row row marginBottom={10} alignItemsCenter >
                <Row autoWidth marginRight={5}>
                    <VHIcon icon={'skills'} title="city" md color="gray-50"/>
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Secondary Skills'}
                    />
                </Row>
            </Row>
            <Row column height={'200px'}> 
                <Row column marginBottom={2}>
                    <VHTitleDescription
                         contents={true}
                         className={`vh-general-section-topSkill-description ${props.className ? props.className : ''}`}
                         onEvent={props.onEvent}
                         title="Add up to 5 secondary skills"
                         titleColor={
                           props.controls.secondarySkill.loading
                             ? "gray-40"
                             : props.controls.secondarySkill.error
                               ? "red"
                               : "gray-100"
                         }
                         titleVariant="subtitle1"
                    />
                </Row>
                <Row>
                    <VHSecondaryList
                        controls={props.controls}
                        onEvent={props.onEvent}
                        secondList={props.yearsOfExperienceList}
                        list={props.skillList}
                        items={props.secondarySkill}
                        data="vanhack" />
                </Row>
            </Row>

        </Row>
    )

}

ThirdStep.defaultProps = {
    className: "",
};

ThirdStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default ThirdStep
