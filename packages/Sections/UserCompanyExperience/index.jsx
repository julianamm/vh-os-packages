import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
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
                <Row marginBottom={15}>
                  <VHUserCompanyPositionExperience
                    {...userPosition}
                    />
                </Row>
              )
            })
          }
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
