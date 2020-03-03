import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";
import VHText from "../../Components/Text/index";
import VHButton from "../../Components/Button/index";

const VHModalEducation = props => {
    const [value, handleChange] = React.useState(props.currentItem);
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
                                captionColor={
                                    props.controls.degree.loading
                                        ? "gray-40"
                                        : props.controls.degree.error
                                            ? "red"
                                            : null
                                }
                                className={`vh-general-section-degree ${props.className ? props.className : ''}`}
                                currentItem={props.currentItem}
                                data="degree"
                                onEvent={e => {if(e.type === 'OnChange'){handleChange(e.props.item)}}}
                                items={props.items}
                                isLoading={props.controls.degree.loading}
                                description={props.controls.degree.error && props.controls.degree.message}
                                descriptionColor="red-light"
                            />
                        </div>
                        <Row marginBottom5>
                            <VHText color="gray-100" variant={'platform'} text="Degree Title" />
                            <VHInput placeholder="" onEvent={e => {
                                console.log(e)
                            }} />
                        </Row>
                        <Row marginBottom5>
                            <VHText color="gray-100" variant={'platform'} text="School Name" />
                            <VHInput placeholder="" onEvent={e => {
                                console.log(e)
                            }} />
                        </Row>
                        <Row marginBottom5 row justifySpaceBetween>
                            <Row width={'40%'}>
                                <VHText color="gray-100" variant={'platform'} text="Start Year" />
                                <VHInput placeholder="" onEvent={e => {
                                    console.log(e)
                                }} />
                            </Row>
                            <Row width={'40%'}>
                                <VHText color="gray-100" variant={'platform'} text="End Year" />
                                <VHInput placeholder="" onEvent={e => {
                                    console.log(e)
                                }} />
                            </Row>
                        </Row>
                        <Row alignItemsRight>
                            <VHButton primary onEvent={e => {
                            }} label="Save" />
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