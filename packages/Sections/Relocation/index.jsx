import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHInputRadio from "../../Components/Input/radio";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";

const VHRelocationSection = props => {

    const salaryExpectationCadList = props.salaryExpectationCadList
    const salaryExpectationEurList = props.salaryExpectationEurList

    const salaryExpectationCad = props.salaryExpectationCad ? props.salaryExpectationCad : []
    const salaryExpectationEur = props.salaryExpectationEur ? props.salaryExpectationEur : []

    return (
        <>
            <Row marginBottom={5}>
                <VHText
                    className={`vh-general-section-title ${props.className ? props.className : ''}`}
                    text={"Relocation"}
                    color="black-50"
                    variant="h2"
                />
            </Row>
            <Row >
                <VHCardBase
                    className={`vh-general-section-card ${props.className ? props.className : ''}`}
                >
                    <Row column>
                        <Row>
                            <VHInputRadio
                                data={'openForRemoteJobs'}
                                color="gray-100"
                                variant="platform"
                                onEvent={props.onEvent}
                                text={'Are you open to remote jobs?'}
                                checked={props.openForRemoteJobs}
                            />
                        </Row>
                        <Row row>
                            <Row>
                                <VHSelect
                                    caption=""
                                    className={`vh-general-section-salaryExpectationCad ${props.className ? props.className : ''}`}
                                    currentItem={salaryExpectationCad}
                                    data="salaryExpectationCad"
                                    items={salaryExpectationCadList}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.salaryExpectationCad.loading}
                                    description={props.controls.salaryExpectationCad.error && props.controls.salaryExpectationCad.message}
                                    descriptionColor="red-light"
                                    captionColor={
                                        props.controls.salaryExpectationCad.loading
                                            ? "gray-40"
                                            : props.controls.salaryExpectationCad.error
                                                ? "red"
                                                : null
                                    }
                                />
                            </Row>
                            <Row>
                                <VHSelect
                                    caption=""
                                    className={`vh-general-section-salaryExpectationEur ${props.className ? props.className : ''}`}
                                    currentItem={salaryExpectationEur}
                                    data="salaryExpectationEur"
                                    items={salaryExpectationEurList}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.salaryExpectationEur.loading}
                                    description={props.controls.salaryExpectationEur.error && props.controls.salaryExpectationEur.message}
                                    descriptionColor="red-light"
                                    captionColor={
                                        props.controls.salaryExpectationEur.loading
                                            ? "gray-40"
                                            : props.controls.salaryExpectationEur.error
                                                ? "red"
                                                : null
                                    }
                                />
                            </Row>
                        </Row>
                    </Row>
                </VHCardBase>
            </Row>
        </>
    )
}

VHRelocationSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHRelocationSection;
