import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";
import VHText from "../../Components/Text/index";
import VHButton from "../../Components/Button/index";
import VHInputRadio from "../../Components/Input/radio"
import VHInputCheckbox from "../../Components/Input/checkbox"
import VHInputMultiple from "../../Components/Input/Multiple"
import VHTextarea from "../../Components/Textarea/index"
import { getFormatedDate } from '../../util/index'
import * as S from './styles.js'

const VHModalExperience = props => {

    const items = JSON.stringify([])
    const item = props.modalExperience;
    const currentItem = props.currentItem ? props.currentItem : {};
    return (
        <VHModal
            width="732"
            minWidth="660"
            open={true}
            onClose={props.onClose}
            onEvent={props.onEvent}
            header={
                <Row row>
                    <VHTitleDescription
                        title={'Add Experience'}
                        description={''}
                        titleVariant="h3"
                        titleColor="black-50"
                        descriptionColor="gray-100"
                        descriptionVariant="platform"
                        onEvent={props.onEvent} />
                </Row>
            }
            content={
                <Row column>
                    <Row row justifySpaceBetween>
                        <div style={{ width: '40%' }}>
                            <VHText color="gray-100" variant={'platform'} text="Company Name" />
                            <VHInput placeholder="" onEvent={props.onEvent} value={item.companyName.value}
                                data={{ id: "ModalExperience", field: "companyName" }} />
                        </div>
                        <div style={{ width: '40%' }}>
                            <VHSelect
                                caption="Location"
                                captionColor={null
                                }
                                className={`vh-general-section-location ${props.className ? props.className : ''}`}
                                currentItem={{ value: item.countryId.value, label: currentItem.country }}
                                data={{ id: "ModalExperience", field: "countryId" }}
                                onEvent={props.onEvent}
                                items={props.countries}
                                descriptionColor="red-light"
                            />
                            {item.countryId.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </div>
                    </Row>
                    <Row row justifySpaceBetween>
                        <div style={{ width: '40%' }}>
                            <VHSelect
                                caption="Company Size"
                                captionColor={null
                                }
                                className={`vh-general-section-company-size ${props.className ? props.className : ''}`}
                                currentItem={{ value: item.companySize.value, label: currentItem.companySizeStr }}
                                data={{ id: "ModalExperience", field: "companySize" }}
                                onEvent={props.onEvent}
                                items={props.companyList}
                                descriptionColor="red-light"
                            />
                            {item.companySize.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </div>
                        <div style={{ width: '40%' }}>
                            <VHSelect
                                caption="Industry"
                                captionColor={null
                                }
                                className={`vh-general-section-industry ${props.className ? props.className : ''}`}
                                currentItem={{ value: item.industryId.value, label: item.industryId.value ? props.industryList[item.industryId.value].label : '' }}
                                data={{ id: "ModalExperience", field: "industryId" }}
                                onEvent={props.onEvent}
                                items={props.industryList}
                                descriptionColor="red-light"
                            />
                            {item.industryId.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </div>
                    </Row>
                    {item.workExperiences.map((experience, index) => {
                        return (
                            <React.Fragment>
                                <Row width={'40%'} marginBottom5>
                                    <VHSelect
                                        caption="Role Title"
                                        captionColor={null
                                        }
                                        className={`vh-general-section-position ${props.className ? props.className : ''}`}
                                        currentItem={{ value: experience.positionId.value, label: experience.positionId.value ? props.positions[experience.positionId.value].label : '' }}
                                        data={{ id: "ModalExperience", field: "positionId", index: index }}
                                        onEvent={props.onEvent}
                                        items={props.positions}
                                        descriptionColor="red-light"
                                    />
                                    {experience.positionId.messageError && (
                                        <S.ErrorMessage>Field required</S.ErrorMessage>
                                    )}
                                </Row>
                                {index === item.workExperiences.length - 1 &&
                                    <Row marginBottom5>
                                        <VHInputCheckbox
                                            title={'I am currently working in this role'}
                                            color="gray-100"
                                            variant="platform1"
                                            data={{
                                                checked: experience.isCurrentRole,
                                                id: 'isCurrentRole',
                                                index: index
                                            }}
                                            checked={experience.isCurrentRole}
                                            value={''}
                                            name={`${'working-role'}-input-checkbox`}
                                            id={`${'working-role'}-vh-input-checkbox`}
                                            onEvent={props.onEvent}
                                        />
                                    </Row>
                                }
                                <Row marginBottom5 row justifySpaceBetween>
                                    <Row width={'40%'}>
                                        <VHText color="gray-100" variant={'platform'} text="Start Date" />
                                        <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={getFormatedDate(experience.startDate.value)} data={{ id: "ModalExperience", field: "startDate", index: index }} />
                                        {experience.startDate.messageError && (
                                            <S.ErrorMessage>Field required</S.ErrorMessage>
                                        )}
                                    </Row>
                                    <Row width={'40%'}>
                                        <VHText color="gray-100" variant={'platform'} text="End Date" />
                                        <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={getFormatedDate(experience.endDate.value)} data={{ id: "ModalExperience", field: "endDate", index: index }} />
                                    </Row>
                                </Row>
                                <Row marginBottom5>
                                    <VHText color="gray-100" variant={'platform'} text="Description" />
                                    <VHInputMultiple
                                        max={5}
                                        items={experience.description}
                                        placeholder="Job Experience"
                                        data={{id: 'multipleInput'}}
                                        onEvent={props.onEvent}
                                    />
                                    {experience.description.messageError && (
                                        <S.ErrorMessage>Field required</S.ErrorMessage>
                                    )}
                                </Row>
                                {index === item.workExperiences.length - 1 &&
                                    <Row marginBottom5>
                                        <VHText color="gradient-primary" onEvent={props.onEvent} data={'addRole'} variant={'platform'} text="+ Add other role for this company" cursor />
                                    </Row>
                                }
                            </React.Fragment>
                        )
                    })}
                    <Row alignItemsRight>
                        <VHButton primary data={{ action: 'saveExperience', id: currentItem.id }} onEvent={props.onEvent} onClose={props.onClose} closeModal={props.closeModal} label="Save" />
                    </Row>
                </Row>
            }>
        </VHModal>
    )
}

VHModalExperience.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalExperience.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalExperience;