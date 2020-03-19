import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from '../../Grid';
import VHGeneralSection from '../../Sections/General'
import VHSkillsSection from '../../Sections/skills'
import VHRelocationSection from '../../Sections/Relocation'
import VHEducationSection from '../../Sections/Education'
import VHSocialSection from '../../Sections/Social'
import VHUserCompanyExperienceSection from '../../Sections/UserCompanyExperience'
import VHPageSection from '../PageSection/index'
import ScrollableAnchor from 'react-scrollable-anchor';

const VHProfileTemplate = props => (
  <Container md>
    <Row marginBottom={10}>
      <ScrollableAnchor id={"general"}>
        <VHPageSection content={
          <VHGeneralSection
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </ScrollableAnchor>
    </Row>
    <Row marginBottom={10}>
      <ScrollableAnchor id={"skills"}>
        <VHPageSection content={
          <VHSkillsSection
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </ScrollableAnchor>
    </Row>
    <Row marginBottom={10}>
      <ScrollableAnchor id={"relocation"}>
        <VHPageSection content={
          <VHRelocationSection
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </ScrollableAnchor>
    </Row>

    <Row marginBottom={10}>
      <ScrollableAnchor id={"education"}>
        <VHPageSection content={
          <VHEducationSection
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </ScrollableAnchor>
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
