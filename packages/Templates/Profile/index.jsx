import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from '../../Grid';
import VHGeneralSection from '../../Sections/General'
import VHSkillsSection from '../../Sections/skills'
import VHSocialSection from '../../Sections/Social'
import VHUserCompanyExperienceSection from '../../Sections/UserCompanyExperience'

const VHProfileTemplate = props => (
  <Container md>
    <Row marginBottom={10}>
      <VHGeneralSection
        {...props}
        onEvent={props.onEvent}
      />
    </Row>
     <Row marginBottom={10}>
      <VHSkillsSection
        {...props}
        onEvent={props.onEvent}
      />
    </Row>
    {/*<Row marginBottom={10}>
      <VHSocialSection
        {...props.social}
        onEvent={props.onEvent}
      />
    </Row>
    <Row marginBottom={10}>
      <VHUserCompanyExperienceSection
        {...props.userCompanyExperience}
        onEvent={props.onEvent}
      />
    </Row> */}
  </Container>
)

VHProfileTemplate.defaultProps = {
}

VHProfileTemplate.propTypes = {
}

export default VHProfileTemplate
