import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHSelect from '../Input/Select'
import VHInputRadio from '../Input/radio'
import VHTargetLocation from '../TargetLocation/'

const FourthStep = props => {

    const visaStatusCanadianList = props.visaStatusCanadianList
    const visaStatusEUList = props.visaStatusEUList
    const targetLocation = props.targetLocation ? props.targetLocation.items : []
    const visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : []
    const visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : []

    return (
        <Row column >
            <Row row marginBottom5>
                <Row width={'10%'}>
                    <VHIcon icon={'relocation'} title="city" md />
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Secondary Skills'}
                    />
                </Row>
            </Row>
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
