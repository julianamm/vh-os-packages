import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHInputIcon from "../../Components/Input/Icon";


const VHSocialSection = props => {
  return (
    <>
      <Row marginBottom={5}>
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
              disabled={props.controls.linkedin.loading}
              error={props.controls.linkedin.error}
              loading={props.controls.linkedin.loading}
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
              disabled={props.controls.github.loading}
              error={props.controls.github.error}
              loading={props.controls.github.loading}
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
              disabled={props.controls.world.loading}
              error={props.controls.world.error}
              loading={props.controls.world.loading}
              placeholder="http://sitename.com/"
              value={props.data.world.value}
              data={'world'}
              icon="world"
              onEvent={props.onEvent}
            />
          </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHSocialSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHSocialSection;
