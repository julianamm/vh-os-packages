import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";
import VHList from "../../Components/List";
import VHSecondaryList from "../../Components/SecondaryList";
import VHTitleDescription from "../../Components/TitleDescription";


const VHSkillsSection = props => {
  const positions = props.positions
  const position = props.positionSkill != undefined ? [positions[props.positionSkill]] : {};

  const yearsOfExperienceList = props.yearsOfExperienceList
  const yearsOfExperience = props.yearsOfExperience != undefined ? [yearsOfExperienceList[props.yearsOfExperience]] : {};

  const workAsList = props.positions

  let workAs = []

  if(props.workAs){
    props.workAs.map(item=>{
      if(item.id){
      workAs.push({value: item.id, label: item.name})
      }else{
        workAs.push({value: item, label: positions[item].label})
      }
    })
  }

  return (
    <>
      <Row marginBottom={5}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Professional Overview"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          <Row row justifySpaceBetween responsive>
            <Row width={'60%'}>
              <VHSelect
                preLoading={props.preLoading}
                caption="I am..."
                captionColor={
                  props.controls.positionSkill.loading
                    ? "gray-40"
                    : props.controls.positionSkill.error
                      ? "red"
                      : 'gray-100'
                }
                className={`vh-skills-section-positionSkill ${props.className ? props.className : ''}`}
                currentItem={position}
                data="positionSkill"
                onEvent={props.onEvent}
                items={positions}
                isLoading={props.controls.positionSkill.loading}
                description={props.controls.positionSkill.error && props.controls.positionSkill.message}
                descriptionColor="red-light"
              />
            </Row>
            <Row width={'30%'}>
              <VHSelect
                preLoading={props.preLoading}
                caption="With..."
                captionColor={
                  props.controls.yearsOfExperience.loading
                    ? "gray-40"
                    : props.controls.yearsOfExperience.error
                      ? "red"
                      : 'gray-100'
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
          <Row marginBottom3 responsive>
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
              preLoading={props.preLoading}
              caption="I would like to work as..."
              isMulti
              captionColor={
                props.controls.workAs.loading
                  ? "gray-40"
                  : props.controls.workAs.error
                    ? "red"
                    : null
              }
              className={`vh-skills-section-workAs ${props.className ? props.className : ''}`}
              currentItem={workAs}
              data="workAs"
              onEvent={props.onEvent}
              items={workAsList}
              isLoading={props.controls.workAs.loading}
              description={props.controls.workAs.error && props.controls.workAs.message}
              descriptionColor="red-light"
            />
          </Row>
          <Row column marginBottom={10}>
          <VHTitleDescription
          contents={true}
                className={`vh-general-section-topSkill-description ${props.className ? props.className : ''}`}
                descriptionColor={
                  props.controls.topSkill.loading
                  ? "gray-40"
                  : props.controls.topSkill.error
                  ? "red-light"
                  : "gray-90"
                }
                inline
                onEvent={props.onEvent}
                title="Rank your top 3 skills"
                description="1st = Highest proficiency level; 3rd = Lowest proficiency level"
                titleColor={
                  props.controls.topSkill.loading
                  ? "gray-40"
                  : props.controls.topSkill.error
                  ? "red"
                  : "gray-100"
                }
                titleVariant="subtitle3"
              />
          </Row>
          <Row marginBottom={15}>
            <VHList
              onEvent={props.onEvent}
              secondList={props.yearsOfExperienceList}
              list={props.skillList}
              items={props.topSkill}
              data="vanhack" />
          </Row>
          <Row column marginBottom={5}>
          <VHTitleDescription
          contents={true}
                className={`vh-general-section-topSkill-description ${props.className ? props.className : ''}`}
                descriptionColor={
                  props.controls.secondarySkill.loading
                  ? "gray-40"
                  : props.controls.secondarySkill.error
                  ? "red-light"
                  : "gray-90"
                }
                inline
                onEvent={props.onEvent}
                title="Add up to 5 secondary skills"
                description=""
                titleColor={
                  props.controls.secondarySkill.loading
                  ? "gray-40"
                  : props.controls.secondarySkill.error
                  ? "red"
                  : "gray-100"
                }
                titleVariant="subtitle3"
              />
          </Row>
          <Row>
            <VHSecondaryList
              controls={props.controls}
              onEvent={props.onEvent}
              secondList={props.yearsOfExperienceList}
              list={props.skillList}
              items={props.secondarySkill}
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
