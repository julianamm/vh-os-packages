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
import VHLanguageSection from '../../Sections/LanguageSection'

const VHProfileTemplate = props => (
  <Container md>
    <Row marginBottom={10}>
      <div id={"general"}>
        <VHPageSection content={
          <VHGeneralSection
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={10}>
      <div id={"skills"}>
        <VHPageSection content={
          <VHSkillsSection
            preLoading={props.controls.gender.preLoading}
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={10}>
      <div id={"relocation"}>
        <VHPageSection content={
          <VHRelocationSection
            preLoading={props.controls.gender.preLoading}
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={10}>
      <VHSocialSection
        preLoading={props.controls.linkedin.preLoading}
        {...props}
        onEvent={props.onEvent}
      />
    </Row>
    <Row marginBottom={10}>
      <div id={"education"}>
        <VHPageSection content={
          <VHLanguageSection
            {...props}
            preLoading={props.controls.language.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={10}>
      <div id={"education"}>
        <VHPageSection content={
          <VHEducationSection
            {...props}
            preLoading={props.controls.educationSection.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={10}>
      <div id={"education"}>
        <VHPageSection content={
          <VHUserCompanyExperienceSection
            {...props}
            preLoading={props.controls.experienceSection.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    {/*<Row marginBottom={10}>
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
