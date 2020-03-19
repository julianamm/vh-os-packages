import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHInputRadio from "../../Components/Input/radio";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";
import VHTargetLocation from '../../Components/TargetLocation';

const VHRelocationSection = props => {

    const salaryRangeCadList = props.salaryRangeCadList
    const salaryRangeEurList = props.salaryRangeEurList
    const visaStatusCanadianList = props.visaStatusCanadianList
    const visaStatusEUList = props.visaStatusEUList

    const salaryRangeCad = props.salaryRangeCad != undefined ? salaryRangeCadList[props.salaryRangeCad] : []
    const salaryRangeEur = props.salaryRangeEur != undefined ? salaryRangeEurList[parseInt(props.salaryRangeEur)] : []
    const visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : []
    const visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : []
    const companySize = props.companySize ? props.companySize : [{value:false}, {value:false}, {value:false}]

    const targetLocation = props.targetLocation ? props.targetLocation.items : []

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
                        <Row marginBottom={5}>
                            <VHInputRadio
                                data={'openForRemoteJobs'}
                                color="gray-100"
                                variant="subtitle3"
                                onEvent={props.onEvent}
                                text={'Are you open to remote jobs?'}
                                checked={props.openForRemoteJobs}
                            />
                        </Row>
                        <Row marginBottom={5}>
                        <VHTitleDescription
                                        className={`vh-general-section-companySize ${props.className ? props.className : ''}`}
                                        descriptionColor={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red-light"
                                                    : "gray-90"
                                        }
                                        descriptionVariant="caption"
                                        inline
                                        onEvent={props.onEvent}
                                        title="Where would you like to work?"
                                        titleColor={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red"
                                                    : "gray-100"
                                        }
                                        titleVariant="subtitle3"
                                    />
                        </Row>
                        <Row marginBottom={10} width={'600px'}>
                            <VHTargetLocation onEvent={props.onEvent} items={targetLocation}/>
                         </Row>   
                        <Row row>
                            <Row paddingRight8>
                                <VHSelect
                                    caption={'Annual salary expectation CAD'}
                                    leftText="$CAD"
                                    className={`vh-general-section-salaryRangeCad ${props.className ? props.className : ''}`}
                                    currentItem={salaryRangeCad}
                                    data="salaryRangeCad"
                                    items={salaryRangeCadList}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.salaryRangeCad.loading}
                                    description={props.controls.salaryRangeCad.error && props.controls.salaryRangeCad.message}
                                    descriptionColor="red-light"
                                    captionColor={
                                        props.controls.salaryRangeCad.loading
                                            ? "gray-40"
                                            : props.controls.salaryRangeCad.error
                                                ? "red"
                                                : null
                                    }
                                />
                            </Row>
                            <Row>
                                <VHSelect
                                    caption={'Annual salary expectation EUR'}
                                    className={`vh-general-section-salaryRangeEur ${props.className ? props.className : ''}`}
                                    currentItem={salaryRangeEur}
                                    data="salaryRangeEur"
                                    items={salaryRangeEurList}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.salaryRangeEur.loading}
                                    description={props.controls.salaryRangeEur.error && props.controls.salaryRangeEur.message}
                                    descriptionColor="red-light"
                                    captionColor={
                                        props.controls.salaryRangeEur.loading
                                            ? "gray-40"
                                            : props.controls.salaryRangeEur.error
                                                ? "red"
                                                : null
                                    }
                                />
                            </Row>
                        </Row>
                    </Row>
                    <Row column>
                        <Row row>
                            <Row paddingRight8>
                                <VHSelect
                                    caption="Canadian Visa Status"
                                    className={`vh-general-section-visaStatusCanadian ${props.className ? props.className : ''}`}
                                    currentItem={visaStatusCanadian}
                                    data="visaStatusCanadian"
                                    items={visaStatusCanadianList}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.visaStatusCanadian.loading}
                                    description={props.controls.visaStatusCanadian.error && props.controls.visaStatusCanadian.message}
                                    descriptionColor="red-light"
                                    captionColor={
                                        props.controls.visaStatusCanadian.loading
                                            ? "gray-40"
                                            : props.controls.visaStatusCanadian.error
                                                ? "red"
                                                : null
                                    }
                                />
                            </Row>
                            <Row>
                                <VHSelect
                                    caption="EU Visa Status"
                                    className={`vh-general-section-visaStatusEU ${props.className ? props.className : ''}`}
                                    currentItem={visaStatusEU}
                                    data="visaStatusEU"
                                    items={visaStatusEUList}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.visaStatusEU.loading}
                                    description={props.controls.visaStatusEU.error && props.controls.visaStatusEU.message}
                                    descriptionColor="red-light"
                                    captionColor={
                                        props.controls.visaStatusEU.loading
                                            ? "gray-40"
                                            : props.controls.visaStatusEU.error
                                                ? "red"
                                                : null
                                    }
                                />
                            </Row>
                        </Row>
                    </Row>
                    <Row column marginBottom={5}>
                        <Row row marginBottom={5}>
                            <Row paddingRight8>
                                <VHInputRadio
                                    data={'passportValid'}
                                    color="gray-100"
                                    variant="subtitle3"
                                    onEvent={props.onEvent}
                                    text={'Do you have a valid passport?'}
                                    checked={props.passportValid}
                                />
                            </Row>
                            <Row column>
                                <Row marginBottom={5}>
                                    <VHTitleDescription
                                        className={`vh-general-section-companySize ${props.className ? props.className : ''}`}
                                        descriptionColor={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red-light"
                                                    : "gray-90"
                                        }
                                        descriptionVariant="caption"
                                        inline
                                        onEvent={props.onEvent}
                                        title="What size company do you prefer?"
                                        titleColor={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red"
                                                    : "gray-100"
                                        }
                                        titleVariant="subtitle3"
                                    />
                                </Row>
                                <Row row>
                                    <VHInputCheckbox
                                        checked={companySize[0].value}
                                        className=""
                                        color={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red"
                                                    : 'gray-100'
                                        }
                                        data={{
                                            id: 'companySize',
                                            label: 'yes',
                                            value: '1'
                                        }}
                                        disabled={props.controls.companySize.loading}
                                        onEvent={props.onEvent}
                                        title="Startup"
                                        value="123"
                                        variant="platform1"
                                    />
                                    <VHInputCheckbox
                                        checked={companySize[1].value}
                                        className=""
                                        color={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red"
                                                    : 'gray-100'
                                        }
                                        data={{
                                            id: 'companySize',
                                            label: 'yes',
                                            value: '2'
                                        }}
                                        disabled={props.controls.companySize.loading}
                                        onEvent={props.onEvent}
                                        title="Midsize"
                                        value="123"
                                        variant="platform1"
                                    />
                                    <VHInputCheckbox
                                        checked={companySize[2].value}
                                        className=""
                                        color={
                                            props.controls.companySize.loading
                                                ? "gray-40"
                                                : props.controls.companySize.error
                                                    ? "red"
                                                    : 'gray-100'
                                        }
                                        data={{
                                            id: 'companySize',
                                            label: 'yes',
                                            value: '4'
                                        }}
                                        disabled={props.controls.companySize.loading}
                                        onEvent={props.onEvent}
                                        title="Corporate"
                                        value="123"
                                        variant="platform1"
                                    />
                                </Row>
                            </Row>
                        </Row>
                        <Row row >
                            <Row paddingRight8>
                                <VHInputRadio
                                    data={'openForRemoteJobs'}
                                    color="gray-100"
                                    variant="subtitle3"
                                    onEvent={props.onEvent}
                                    text={'Are you actively looking for a job?'}
                                    checked={props.openForRemoteJobs}
                                />
                            </Row>
                            <Row>
                                <VHInputRadio
                                    data={'openForRemoteJobs'}
                                    color="gray-100"
                                    variant="subtitle3"
                                    onEvent={props.onEvent}
                                    text={'What is your notice period?'}
                                    checked={props.openForRemoteJobs}
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
