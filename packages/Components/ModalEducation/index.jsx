import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";
import VHText from "../../Components/Text/index";
import VHButton from "../../Components/Button/index";
import * as S from "./styles"
import {getFormatedDate} from '../../util/index'

const VHModalEducation = props => {

    const item = props.currentItem ? props.currentItem : {};
    const [degreeType, setDegreeType] = React.useState({ value: item.degreeType, label: item.degreeTypeStr });
    const [degreeTitle, setDegreeTitle] = React.useState(item.degreeTitle);
    const [schoolName, setSchoolName] = React.useState(item.schoolName);
    const [startYear, setStartYear] = React.useState(getFormatedDate(item.startDate));
    const [endYear, setEndYear] = React.useState(getFormatedDate(item.endYear));

    return (
        <VHModal
            width="732"
            minWidth="660"
            open={props.openModal}
            onClose={props.onClose}
            onEvent={props.onEvent}
            header={
                <Row row>
                    <VHTitleDescription
                        title={'Add Education'}
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
                    <div style={{ width: '40%' }}>
                        <VHSelect
                            caption="Degree Type"
                            captionColor={null}
                            className={`vh-general-section-degree ${props.className ? props.className : ''}`}
                            currentItem={degreeType}
                            data="degree"
                            onEvent={props.onEvent}
                            items={props.items}
                        />
                        {props.modalEducation.degreeType.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </div>
                    <Row marginBottom5>
                        <VHText color="gray-100" variant={'platform'} text="Degree Title" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={degreeTitle} data={{ id: "ModalEducation", field: "degreeTitle" }} />
                        {props.modalEducation.degreeTitle.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5>
                        <VHText color="gray-100" variant={'platform'} text="School Name" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={schoolName} data={{ id: "ModalEducation", field: "schoolName" }} />
                        {props.modalEducation.schoolName.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5 row justifySpaceBetween>
                        <Row width={'40%'}>
                            <VHText color="gray-100" variant={'platform'} text="Start Year" />
                            <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={startYear} data={{ id: "ModalEducation", field: "startYear" }} />
                            {props.modalEducation.startYear.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                        <Row width={'40%'}>
                            <VHText color="gray-100" variant={'platform'} text="End Year" />
                            <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={endYear} data={{ id: "ModalEducation", field: "endYear" }} />
                        </Row>
                    </Row>
                    <Row alignItemsRight>
                        <VHButton primary onEvent={props.onEvent} data={'saveEducation'} onClose={props.onClose} closeModal={props.closeModal} label="Save" />
                    </Row>
                </Row>
            }>
        </VHModal>
    )
}

VHModalEducation.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalEducation.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalEducation;