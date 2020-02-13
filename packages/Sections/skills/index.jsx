import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";


const VHSkillsSection = props => {
  return (
    <Container md>
      <Row>
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
            <Row>
                <VHSelect
                  caption="I am..."
                  captionColor={
                    props.controls.position.loading
                    ? "gray-40"
                    : props.controls.position.error
                    ? "red"
                    : null
                  }
                  className={`vh-skills-section-position ${props.className ? props.className : ''}`}
                  currentItem={props.options.position.currentItem}
                  data="position"
                  onEvent={props.onEvent}
                  items={props.options.position.items}
                  isLoading={props.controls.position.loading}
                  description={props.controls.position.error && props.controls.position.message}
                  descriptionColor="red-light"
                />
            </Row>
            <Row>
                <VHSelect
                  caption="I would like to work as..."
                  isMulti
                  captionColor={
                    props.controls.skills.loading
                    ? "gray-40"
                    : props.controls.skills.error
                    ? "red"
                    : null
                  }
                  className={`vh-skills-section-skills ${props.className ? props.className : ''}`}
                  currentItem={props.options.skills.currentItem}
                  data="skills"
                  onEvent={props.onEvent}
                  items={props.options.skills.items}
                  isLoading={props.controls.skills.loading}
                  description={props.controls.skills.error && props.controls.skills.message}
                  descriptionColor="red-light"
                />
            </Row>
        </VHCardBase>
      </Row>
    </Container>
  )
}

VHSkillsSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHSkillsSection;
