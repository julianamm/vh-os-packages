import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHSelect from '../Input/Select'
import VHInputRadio from '../Input/radio'
import VHTargetLocation from '../TargetLocation/'
import VHTitleDescription from "../../Components/TitleDescription";

const FourthStep = props => {

    const visaStatusCanadianList = props.visaStatusCanadianList
    const visaStatusEUList = props.visaStatusEUList
    const targetLocation = props.targetLocation ? props.targetLocation.items : []
    const visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : []
    const visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : []

    return (
        <Row column>
            <Row row marginBottom={10} alignItemsCenter >
                <Row autoWidth marginRight={5}>
                    <VHIcon icon={'relocation'} title="city" md color="gray-50"/>
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Relocation'}
                    />
                </Row>
            </Row>
            <Row column>
                <Row marginBottom={10} style={{padding:'1px'}}>
                    <VHInputRadio
                        data={'openForRemoteJobs'}
                        color="gray-90"
                        variant="platform1"
                        onEvent={props.onEvent}
                        text={'Are you open to remote jobs?'}
                        checked={props.openForRemoteJobs}
                    />
                </Row>
                <Row marginBottom={1} >
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
                                    : "gray-90"
                        }
                        titleVariant="platform1"
                    />
                </Row>
                <Row marginBottom={5} width={'100%'}>
                    <VHTargetLocation onEvent={props.onEvent} items={targetLocation} />
                </Row>
                <Row row responsive>
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
                            descriptionColor="red"
                            captionColor={
                                props.controls.visaStatusCanadian.loading
                                    ? "gray-40"
                                    : props.controls.visaStatusCanadian.error
                                        ? "red"
                                        : "gray-90"
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
                            descriptionColor="red"
                            captionColor={
                                props.controls.visaStatusEU.loading
                                    ? "gray-40"
                                    : props.controls.visaStatusEU.error
                                        ? "red"
                                        : "gray-90"
                            }
                        />
                    </Row>
                </Row>
            </Row>

        </Row>
    )

}

FourthStep.defaultProps = {
    className: "",
};

FourthStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default FourthStep
