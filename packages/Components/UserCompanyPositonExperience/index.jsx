import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid';
import VHMainTitleDescription from "../MainTitleDescription";
import VHUserPositonExperience from "../UserPositonExperience"

const VHUserCompanyExperience = props => {
  return (
    <>
      <Row marginBottom={5}>
        <VHMainTitleDescription
          title={props.title}
          description={props.description}
          rightTitle={props.rightTitle}
          className={`vh-user-company-position-experience ${props.className ? props.className : ''}`}
        />
      </Row>
      <Row>
        {
          props.userPositions.map( userPosition => (
            <VHUserPositonExperience
              className={`vh-user-company-position-experience ${props.className ? props.className : ''}`}
              {...userPosition}
            />
          ))
        }
      </Row>
    </>
  )
}

VHUserCompanyExperience.defaultProps = {
  className: "",
  rightTitle: "",
};

VHUserCompanyExperience.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rightTitle: PropTypes.string,
  className: PropTypes.string,
  userPositions: PropTypes.shape({}),
}

export default VHUserCompanyExperience;
