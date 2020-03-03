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
import VHTextarea from "../../Components/Textarea/index"
const VHModalExperience = props => {
    const [value, handleChange] = React.useState(props.currentItem);
    return (
        <VHModal
            minWidth="700"
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
                            <VHInput placeholder="" onEvent={e => {
                                console.log(e)
                            }} />
                        </div>
                        <div style={{ width: '40%' }}>
                            <VHSelect
                                caption="Location"
                                captionColor={
                                    props.controls.location.loading
                                        ? "gray-40"
                                        : props.controls.location.error
                                            ? "red"
                                            : null
                                }
                                className={`vh-general-section-location ${props.className ? props.className : ''}`}
                                currentItem={props.currentItem}
                                data="location"
                                onEvent={e => { if (e.type === 'OnChange') { handleChange(e.props.item) } }}
                                items={props.items}
                                isLoading={props.controls.location.loading}
                                description={props.controls.location.error && props.controls.location.message}
                                descriptionColor="red-light"
                            />
                        </div>
                    </Row>
                    <Row row>
                        <VHInputRadio
                            color="gray-100"
                            variant="platform1"
                            onEvent={(event) => console.log(event)}
                            data={props.data}
                        />
                        <div style={{ width: '66%' }}>
                            <VHSelect
                                caption="Industry"
                                captionColor={
                                    props.controls.industry.loading
                                        ? "gray-40"
                                        : props.controls.industry.error
                                            ? "red"
                                            : null
                                }
                                className={`vh-general-section-industry ${props.className ? props.className : ''}`}
                                currentItem={props.currentItem}
                                data="industry"
                                onEvent={e => { if (e.type === 'OnChange') { handleChange(e.props.item) } }}
                                items={props.items}
                                isLoading={props.controls.industry.loading}
                                description={props.controls.industry.error && props.controls.industry.message}
                                descriptionColor="red-light"
                            />
                        </div>
                    </Row>
                    <Row marginBottom5>
                        <VHText color="gray-100" variant={'platform'} text="Role Title" />
                        <VHInput placeholder="" onEvent={e => {
                            console.log(e)
                        }} />

                    </Row>
                    <Row marginBottom5>
                        <VHInputCheckbox
                            title={'I am currently working in this role'}
                            color="gray-100"
                            variant="platform1"
                            data={''}
                            value={''}
                            name={`${'working-role'}-input-checkbox`}
                            id={`${'working-role'}-vh-input-checkbox`}
                            onEvent={props.onEvent}
                        />
                    </Row>
                    <Row marginBottom5 row justifySpaceBetween>
                        <Row width={'40%'}>
                            <VHText color="gray-100" variant={'platform'} text="Start Date" />
                            <VHInput placeholder="" onEvent={e => {
                                console.log(e)
                            }} />
                        </Row>
                        <Row width={'40%'}>
                            <VHText color="gray-100" variant={'platform'} text="End Date" />
                            <VHInput placeholder="" onEvent={e => {
                                console.log(e)
                            }} />
                        </Row>
                    </Row>
                    <Row marginBottom5>
                        <VHText color="gray-100" variant={'platform'} text="Description" />
                        <VHTextarea
                    description={props.description}
                    onEvent={props.onEvent}
                  />

                    </Row>
                    <Row marginBottom5>
                        <VHSelect
                            caption="Skills used on this position"
                            isMulti
                            captionColor={
                                props.controls.skillsUsed.loading
                                    ? "gray-40"
                                    : props.controls.skillsUsed.error
                                        ? "red"
                                        : null
                            }
                            className={`vh-skillsUsed-section-skillsUsed ${props.className ? props.className : ''}`}
                            currentItem={props.workAs.current}
                            data="skillsUsed"
                            onEvent={props.onEvent}
                            items={props.workAs}
                            isLoading={props.controls.skillsUsed.loading}
                            description={props.controls.skillsUsed.error && props.controls.skillsUsed.message}
                            descriptionColor="red-light"
                        />
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

VHModalExperience.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalExperience.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalExperience;