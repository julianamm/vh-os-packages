import React from "react";
import PropTypes from "prop-types";
import { Row, Container } from "../../Grid";
import VHIconText from "../IconText";
import VHInputIcon from "../Input/Icon";
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
            {/* <VHInputIcon
              placeholder={props.inputPlaceholder}
              value={props.inputValue}
              icon="search"
              data="search"
              onEvent={props.onEvent}
              className="vh-header-input-icon"
            /> */}
          </Row>
          <Row row justifySpaceAround>
            {/* <VHIconText
              className="vh-header-icon-text-second"
              data="filter"
              icon="filter"
              iconColor="gray-80"
              onEvent={props.onEvent}
              text="Filter"
              textColor="gray-80"
              variant="bodyplatform"
            />
            <VHIconText
              className="vh-header-icon-text-third"
              data="sort"
              icon="sort"
              iconColor="gray-80"
              onEvent={props.onEvent}
              text="Sort"
              textColor="gray-80"
              variant="bodyplatform"
            /> */}
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
