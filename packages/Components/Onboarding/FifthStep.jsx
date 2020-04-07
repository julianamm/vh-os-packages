import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHSelect from '../Input/Select'
import VHTitleDescription from '../TitleDescription'
import VHInput from '../Input/Simple'
import VHInputIcon from '../Input/Icon/'

const FifthStep = props => {

    const citizenships = props.countries
    const citizenship = props.citizenship != undefined ? citizenships.find(element => element.value === props.citizenship) : {};
    const location = props.location != undefined ? citizenships.find(element => element.value === props.location) : {};
    const genders = props.genders
    const gender = props.gender != undefined ? [genders[props.gender]] : {};

    return (
        <Row column >
            <Row row marginBottom={10}>
                <Row width={'10%'}>
                    <VHIcon icon={'user'} title="city" md />
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Personal Info'}
                    />
                </Row>
            </Row>
            <Row column>
                <Row row>
                    <Row paddingRight8>
                        <VHSelect
                            preLoading={props.controls.citizenship.preLoading || false}
                            caption="Citizenship"
                            placeholder="Select an option"
                            className={`vh-general-section-citizenship ${props.className ? props.className : ''}`}
                            currentItem={citizenship}
                            data="citizenship"
                            items={citizenships}
                            onEvent={props.onEvent}
                            isLoading={props.controls.citizenship.loading}
                            description={props.controls.citizenship.error && props.controls.citizenship.message}
                            descriptionColor="gray-90"
                            captionColor={
                                props.controls.citizenship.loading
                                    ? "gray-40"
                                    : props.controls.citizenship.error
                                        ? "red"
                                        : 'gray-90'
                            }
                        />
                    </Row>
                    <Row paddingRight8>
                        <VHSelect
                            preLoading={props.controls.location.preLoading || false}
                            caption="Location"
                            placeholder="Select an option"
                            className={`vh-general-section-location ${props.className ? props.className : ''}`}
                            currentItem={location}
                            data="location"
                            items={citizenships}
                            onEvent={props.onEvent}
                            isLoading={props.controls.location.loading}
                            description={props.controls.location.error && props.controls.location.message}
                            descriptionColor="gray-90"
                            captionColor={
                                props.controls.location.loading
                                    ? "gray-40"
                                    : props.controls.location.error
                                        ? "red"
                                        : 'gray-90'
                            }
                        />
                    </Row>
                </Row>
                <Row row>
                    <Row paddingRight8>
                        <VHSelect
                            preLoading={props.controls.gender.preLoading || false}
                            caption="Gender"
                            placeholder="Select an option"
                            className={`vh-general-section-gender ${props.className ? props.className : ''}`}
                            currentItem={gender}
                            data="gender"
                            items={genders}
                            onEvent={props.onEvent}
                            isLoading={props.controls.gender.loading}
                            description={props.controls.gender.error && props.controls.gender.message}
                            descriptionColor="red"

                            captionColor={
                                props.controls.gender.loading
                                    ? "gray-40"
                                    : props.controls.gender.error
                                        ? "red"
                                        : 'gray-90'
                            }
                        />
                    </Row>
                    <Row column paddingRight8>
                        <VHTitleDescription
                            className={`vh-general-section-phone ${props.className ? props.className : ''}`}
                            descriptionColor={
                                props.controls.phone.loading
                                    ? "gray-40"
                                    : props.controls.phone.error
                                        ? "red-light"
                                        : "gray-90"
                            }
                            preLoading={props.controls.phone.preLoading || false}
                            descriptionVariant="caption"
                            inline
                            onEvent={props.onEvent}
                            title="Phone number"
                            titleColor={
                                props.controls.phone.loading
                                    ? "gray-40"
                                    : props.controls.phone.error
                                        ? "red"
                                        : "gray-90"
                            }
                            titleVariant="platform1"
                        />
                        {
                            !props.controls.phone.preLoading && (
                                <VHInput
                                    data={"phone"}
                                    onEvent={props.onEvent}
                                    disabled={props.controls.phone.loading}
                                    error={props.controls.phone.error}
                                    loading={props.controls.phone.loading}
                                    placeholder="+1 778 000 0000"
                                    value={props.phone}
                                />
                            )
                        }
                    </Row>
                </Row>
                <Row marginBottom5>
                        <VHInputIcon
                            className=""
                            disabled={props.controls.linkedin.loading}
                            error={props.controls.linkedin.error}
                            loading={props.controls.linkedin.loading}
                            data={'linkedin'}
                            icon="linkedin"
                            onEvent={props.onEvent}
                            placeholder="http://linkedin.com/"
                            value={props.linkedin}
                        />
                    </Row>
            </Row>

        </Row>
    )

}

FifthStep.defaultProps = {
    className: "",
};

FifthStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default FifthStep
