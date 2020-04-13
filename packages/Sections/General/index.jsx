import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";


const VHGeneralSection = props => {

  const citizenships = props.countries
  const citizenship = props.citizenship != undefined ? citizenships.find(element => element.value === props.citizenship) : {};
  const locations = props.locations
  const location = props.location != undefined ? citizenships.find(element => element.value === props.location) : {};
  const genders = props.genders
  const gender = props.gender != undefined ? genders[props.gender] : {};
  const [preloaderPhone, setPreloaderPhone] = React.useState(true);

  return (
    
    <>
      <Row marginBottom={2}>
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
            <Row marginRight={3} id="citezenship">
              <VHSelect
                preLoading={props.controls.citizenship.preLoading || false}
                caption="Citizenship"
                placeholder="Select an option"
                className={`vh-general-section-citizenship ${props.className ? props.className : ''}`}
                currentItem={citizenship}
                data="citizenship"
                items={citizenships}
                onEvent={props.onEvent}
                isLoading={props.controls.citizenship.loading}
                description={props.controls.citizenship.error && props.controls.citizenship.message}
                descriptionColor="gray-90"
                captionColor={
                  props.controls.citizenship.loading
                  ? "gray-40"
                  : props.controls.citizenship.error
                  ? "red"
                  : 'gray-90'
                }
              />
            </Row>
            <Row id="location" >
              <VHSelect
                  preLoading={props.controls.location.preLoading || false}
                  caption="Current location"
                  placeholder="Select an option"
                  className={`vh-general-section-location ${props.className ? props.className : ''}`}
                  currentItem={location}
                  data="location"
                  items={citizenships}
                  onEvent={props.onEvent}
                  isLoading={props.controls.location.loading}
                  description={props.controls.location.error && props.controls.location.message}
                  descriptionColor="gray-90"
                  captionColor={
                    props.controls.location.loading
                    ? "gray-40"
                    : props.controls.location.error
                    ? "red"
                    : 'gray-90'
                  }
                />
            </Row>
          </Row>
          <Row row responsive>
            <Row marginRight={3} id="gender">
                <VHSelect
                  preLoading={props.controls.gender.preLoading || false}
                  caption="Gender"
                  placeholder="Select an option"
                  className={`vh-general-section-gender ${props.className ? props.className : ''}`}
                  currentItem={gender}
                  data="gender"
                  items={genders}
                  onEvent={props.onEvent}
                  isLoading={props.controls.gender.loading}
                  description={props.controls.gender.error && props.controls.gender.message}
                  descriptionColor="red"
                  
                  captionColor={
                    props.controls.gender.loading
                    ? "gray-40"
                    : props.controls.gender.error
                    ? "red"
                    : 'gray-90'
                  }
                />
            </Row>
            <Row row marginleft={3} >
              <Row column id="phone">
                <VHTitleDescription 
                  className={`vh-general-section-phone ${props.className ? props.className : ''}`}
                  descriptionColor={
                    props.controls.phone.loading
                    ? "gray-40"
                    : props.controls.phone.error
                    ? "red-light"
                    : "gray-90"
                  }
                  preLoading={props.controls.phone.preLoading || false}
                  descriptionVariant="caption"
                  inline
                  onEvent={props.onEvent}
                  title="Phone number"
                  titleColor={
                    props.controls.phone.loading
                    ? "gray-40"
                    : props.controls.phone.error
                    ? "red"
                    : "gray-90"
                  }
                  titleVariant="platform1"
                />
              {
                !props.controls.phone.preLoading && (
                  <VHInput
                    data={"phone"}
                    onEvent={props.onEvent}
                    disabled={props.controls.phone.loading}
                    error={props.controls.phone.error}
                    loading={props.controls.phone.loading}
                    placeholder="+1 778 000 0000"
                    value={props.phone}
                  />
                )
              }
            </Row>
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
