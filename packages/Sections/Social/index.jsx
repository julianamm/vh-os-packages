import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHInputIcon from "../../Components/Input/Icon";


const VHSkillsSection = props => {
  return (
    <Container md>
      <Row>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Social Profile"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          <Row marginBottom4>
            <VHInputIcon
              className=""
              data={'linkedin'}
              icon="linkedin"
              onEvent={props.onEvent}
              placeholder="http://linkedin.com/"
              value={props.data.linkedin.value}
            />
          </Row>
          <Row marginBottom4>
            <VHInputIcon
              className=""
              data={'github'}
              icon="github"
              onEvent={props.onEvent}
              placeholder="http://github.com/"
              value={props.data.github.value}
            />
          </Row>
          <Row marginBottom4>
            <VHInputIcon
              className=""
              data={'world'}
              icon="world"
              onEvent={props.onEvent}
              placeholder="http://sitename.com/"
              value={props.data.world.value}
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
