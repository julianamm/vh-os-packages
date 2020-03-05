import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";


const VHGeneralSection = props => {
  const genders = props.genders
  const gender = props.gender ? [genders[props.gender]] : {};

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
          <Row row responsive marginBottom={5}>
            <Row paddingRight8>
            <VHTitleDescription
                className={`vh-general-section-citizenship ${props.className ? props.className : ''}`}
                descriptionColor={
                  props.controls.citizenship.loading
                  ? "gray-40"
                  : props.controls.citizenship.error
                  ? "red-light"
                  : "gray-90"
                }
                descriptionVariant="caption"
                inline
                onEvent={props.onEvent}
                title="Citizenship"
                titleColor={
                  props.controls.citizenship.loading
                  ? "gray-40"
                  : props.controls.citizenship.error
                  ? "red"
                  : "gray-100"
                }
                titleVariant="subtitle3"
              />
              <VHInput
                type={'text'}
                data={"citizenship"}
                onEvent={props.onEvent}
                disabled={props.controls.citizenship.loading}
                error={props.controls.citizenship.error}
                loading={props.controls.citizenship.loading}
                value={props.citizenship}
              />
            </Row>
            <Row>
            <VHTitleDescription
                className={`vh-general-section-currentLocation ${props.className ? props.className : ''}`}
                descriptionColor={
                  props.controls.location.loading
                  ? "gray-40"
                  : props.controls.location.error
                  ? "red-light"
                  : "gray-90"
                }
                descriptionVariant="caption"
                inline
                onEvent={props.onEvent}
                title="Current Location"
                titleColor={
                  props.controls.location.loading
                  ? "gray-40"
                  : props.controls.location.error
                  ? "red"
                  : "gray-100"
                }
                titleVariant="subtitle3"
              />
              <VHInput
                type={'text'}
                data={"location"}
                onEvent={props.onEvent}
                disabled={props.controls.location.loading}
                error={props.controls.location.error}
                loading={props.controls.location.loading}
                value={props.location}
              />
            </Row>
          </Row>
          <Row row responsive>
            <Row paddingRight8>
                <VHSelect
                  caption="Gender"
                  className={`vh-general-section-gender ${props.className ? props.className : ''}`}
                  currentItem={gender}
                  data="gender"
                  items={genders}
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
