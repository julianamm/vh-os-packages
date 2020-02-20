import React from "react";
import PropTypes from "prop-types";
import { Row, Container } from "../../Grid";
import VHText from '../Text/index'

const VHHeaderVisaPipeline = props => {
  return (
    <Container lg className={`vh-header-visa-pipe-line ${props.className ? props.className : ''}`}>
      <Row row alignItemsCenter>
        <Row>
          <VHText
            variant={'h2'} text="Visa Pipeline"
          />
        </Row>
        <Row row alignItemsCenter>
          <Row>
          </Row>
          <Row row justifySpaceAround>
          </Row>
        </Row>
      </Row>
      {props.children}
    </Container>
  );
};

VHHeaderVisaPipeline.defaultProps = {
    title: "Pipeline",
    inputPlaceholder: "search",
    inputValue: "search",
    onEvent: null,
};

VHHeaderVisaPipeline.propTypes = {
    title: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    onEvent: PropTypes.func.isRequired,
};

export default VHHeaderVisaPipeline;
