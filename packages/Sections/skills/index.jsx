import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";
import VHList from "../../Components/List";
import VHTitleDescription from "../../Components/TitleDescription";


const VHSkillsSection = props => {
  const positions = props.positions
  const position = props.positionSkill ? [positions[props.positionSkill]] : {};

  const yearsOfExperienceList = props.yearsOfExperienceList
  const yearsOfExperience = props.yearsOfExperience ? [yearsOfExperienceList[props.yearsOfExperience]] : {};

  const workAsList = props.workAsList
  const workAs = props.workAs ? [workAsList[props.workAs]] : [];

  const topSkills = props.topSkills ? props.topSkills : []

  return (
    <>
      <Row marginBottom={5}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Skills"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          <Row row justifySpaceBetween>
            <Row width={'60%'}>
              <VHSelect
                caption="I am..."
                captionColor={
                  props.controls.positionSkill.loading
                    ? "gray-40"
                    : props.controls.positionSkill.error
                      ? "red"
                      : null
                }
                className={`vh-skills-section-positionSkill ${props.className ? props.className : ''}`}
                currentItem={position}
                data="position"
                onEvent={props.onEvent}
                items={positions}
                isLoading={props.controls.positionSkill.loading}
                description={props.controls.positionSkill.error && props.controls.positionSkill.message}
                descriptionColor="red-light"
              />
            </Row>
            <Row width={'30%'}>
              <VHSelect
                caption="With..."
                captionColor={
                  props.controls.yearsOfExperience.loading
                    ? "gray-40"
                    : props.controls.yearsOfExperience.error
                      ? "red"
                      : null
                }
                className={`vh-skills-section-yearsOfExperience ${props.className ? props.className : ''}`}
                currentItem={yearsOfExperience}
                data="yearsOfExperience"
                onEvent={props.onEvent}
                items={yearsOfExperienceList}
                isLoading={props.controls.yearsOfExperience.loading}
                description={props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message}
                descriptionColor="red-light"
              />
            </Row>
          </Row>
          <Row marginBottom3>
            <VHInputCheckbox
              checked={props.openForDifferentRole}
              className=""
              color={
                props.controls.openForDifferentRole.loading
                  ? "gray-40"
                  : props.controls.openForDifferentRole.error
                    ? "red"
                    : 'gray-100'
              }
              data={{
                checked: props.openForDifferentRole,
                id: 'openForDifferentRole',
                label: 'yes',
                value: '123'
              }}
              disabled={props.controls.openForDifferentRole.loading}
              onEvent={props.onEvent}
              title="I am open to working in a different role"
              value="123"
              variant="platform1"
            />
          </Row>
          <Row>
            <VHSelect
              caption="I would like to work as..."
              isMulti
              captionColor={
                props.controls.workAsSkills.loading
                  ? "gray-40"
                  : props.controls.workAsSkills.error
                    ? "red"
                    : null
              }
              className={`vh-skills-section-workAsSkills ${props.className ? props.className : ''}`}
              currentItem={workAs}
              data="workAsSkills"
              onEvent={props.onEvent}
              items={workAsList}
              isLoading={props.controls.workAsSkills.loading}
              description={props.controls.workAsSkills.error && props.controls.workAsSkills.message}
              descriptionColor="red-light"
            />
          </Row>
          <Row>
          <VHTitleDescription
                className={`vh-general-section-topSkills-description ${props.className ? props.className : ''}`}
                descriptionColor={
                  props.controls.topSkills.loading
                  ? "gray-40"
                  : props.controls.topSkills.error
                  ? "red-light"
                  : "gray-90"
                }
                descriptionVariant="caption"
                inline
                onEvent={props.onEvent}
                title="Rank your top 3 skills"
                description="1st = Highest proficiency level; 3rd = Lowest proficiency level"
                titleColor={
                  props.controls.topSkills.loading
                  ? "gray-40"
                  : props.controls.topSkills.error
                  ? "red"
                  : "gray-100"
                }
                titleVariant="subtitle3"
              />
          </Row>
          <Row>
            <VHList
              items={topSkills}
              data="vanhack" />
          </Row> 
        </VHCardBase>
      </Row>
    </>
  )
}

VHSkillsSection.propTypes = {
  onEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
  className: PropTypes.string
}

export default VHSkillsSection;
