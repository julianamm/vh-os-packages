import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";


const VHGeneralSection = props => {
  return (
    <>
      <Row marginBottom={5}>
        <VHText
          className={`vh-general-section-title ${props.className ? props.className : ''}`}
          text={"General"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row >
        <VHCardBase
          className={`vh-general-section-card ${props.className ? props.className : ''}`}
        >
          <Row row responsive>
            <Row paddingRight8>
                <VHSelect
                  caption="Citizenship"
                  captionColor={
                    props.controls.citizenship.loading
                    ? "gray-40"
                    : props.controls.citizenship.error
                    ? "red"
                    : null
                  }
                  className={`vh-general-section-citizenship ${props.className ? props.className : ''}`}
                  currentItem={props.options.citizenship.currentItem}
                  data="citizenship"
                  onEvent={props.onEvent}
                  items={props.options.citizenship.items}
                  isLoading={props.controls.citizenship.loading}
                  description={props.controls.citizenship.error && props.controls.citizenship.message}
                  descriptionColor="red-light"
                />
            </Row>
            <Row>
              <VHSelect
                caption="Current location"
                className={`vh-general-section-current-location ${props.className ? props.className : ''}`}
                currentItem={props.options.currentLocation.currentItem}
                data="currentLocation"
                items={props.options.currentLocation.items}
                onEvent={props.onEvent}
                isLoading={props.controls.currentLocation.loading}
                description={props.controls.currentLocation.error && props.controls.currentLocation.message}
                descriptionColor="red-light"
                captionColor={
                  props.controls.currentLocation.loading
                  ? "gray-40"
                  : props.controls.currentLocation.error
                  ? "red"
                  : null
                }
              />
            </Row>
          </Row>
          <Row row responsive>
            <Row paddingRight8>
                <VHSelect
                  caption="Gender"
                  className={`vh-general-section-gender ${props.className ? props.className : ''}`}
                  currentItem={props.options.gender.currentItem}
                  data="gender"
                  items={props.options.gender.items}
                  onEvent={props.onEvent}
                  isLoading={props.controls.gender.loading}
                  description={props.controls.gender.error && props.controls.gender.message}
                  descriptionColor="red-light"
                  captionColor={
                    props.controls.gender.loading
                    ? "gray-40"
                    : props.controls.gender.error
                    ? "red"
                    : null
                  }
                />
            </Row>
            <Row>
              <VHTitleDescription
                className={`vh-general-section-phone ${props.className ? props.className : ''}`}
                description="(optional)"
                descriptionColor={
                  props.controls.phone.loading
                  ? "gray-40"
                  : props.controls.phone.error
                  ? "red-light"
                  : "gray-90"
                }
                descriptionVariant="caption"
                inline
                onEvent={props.onEvent}
                title="Phone number"
                titleColor={
                  props.controls.phone.loading
                  ? "gray-40"
                  : props.controls.phone.error
                  ? "red"
                  : "gray-100"
                }
                titleVariant="subtitle3"
              />
              <VHInput
                data={"phone"}
                onEvent={props.onEvent}
                disabled={props.controls.phone.loading}
                error={props.controls.phone.error}
                loading={props.controls.phone.loading}
                placeholder="+1 778 000 0000"
                value={props.phone}
              />
            </Row>
          </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHGeneralSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHGeneralSection;
