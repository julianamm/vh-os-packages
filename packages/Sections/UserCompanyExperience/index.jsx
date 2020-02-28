import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHButton from "../../Components/Button";
import VHUserCompanyPositionExperience from "../../Components/UserCompanyPositonExperience";


const VHUserCompanyExperienceSection = props => {
  return (
    <>
      <Row marginBottom={5}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={`Experience ${props.yearsOfExperience}`}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          {
            props.userExperience.map(userPosition => {
              return (
                <Row marginBottom={10}>
                  <VHUserCompanyPositionExperience
                    {...userPosition}
                    />
                </Row>
              )
            })
          }
          <Row row>
            <Row paddingRight8 autoWidth>
              <VHButton
                nowrap
                primary
                onEvent={props.onEvent}
                data={"AddExperience"}
                label="Add Experience"
              />
            </Row>
            <Row row>
              <VHButton
                outline
                primary
                onEvent={props.onEvent}
                data={"RequestProfileReview"}
                label="Request Profile Review"
              />
            </Row>
          </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHUserCompanyExperienceSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHUserCompanyExperienceSection;
