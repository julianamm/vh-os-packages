import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../../Grid";
import VHCardBase from "../Base";
import VHChips from "../../Chips/index";
import VHText from "../../Text/index";
import VHButton from "../../Button/index";
import * as S from "./styles";

const VHCardPricing = props => {
  return (
    <VHCardBase>
      <Row alignItemsCenter>
          <Row height={25} alignItemsCenter>
            <S.Wrapper show={props.show}>
                <VHChips
                onEvent={props.onEvent}
                label={props.save}
                round
                secondary={props.secondaryChip}
                transparent={props.transparentChip}
                noHover={props.noHoverChip}
                marginRight={props.marginRight}
                />
            </S.Wrapper>
          </Row>
          <Row alignItemsCenter marginTop={15} marginBottom={5}>
            <VHText 
              variant={"h4"}
              color={"black-60"}
              text={props.period}
            />
          </Row>
          <VHText 
            variant={"h1"}
            color={"primary-dark"}
            text={props.price}
          />
          <VHText 
            variant={"subtitle3"}
            color={"primary-dark"}
            text={props.unit}
          />
          <VHText 
            variant={"subtitle3"}
            color={"black-60"}
            text={props.subscription}
          />
          <Row alignItemsCenter marginTop={15} marginBottom={5} style={{ width: "50%", height: "40px"}}>
            <VHButton 
              onEvent={props.onEvent}
              label={props.cta}
              lg
              outline={props.outlineBtn}
              primary={props.primaryBtn}
              secondary={props.secondaryBtn}
              full
            />
          </Row>
          <Row height={20} alignItemsCenter>
            <VHText 
                variant={"subtitle2"}
                color={"black-60"}
                text={props.note}
            />
          </Row>
      </Row>
    </VHCardBase>
  );
};

VHCardPricing.defaultProps = {
  className: "",
  show: false,
};

VHCardPricing.propTypes = {
  show: PropTypes.bool,
  onEvent: PropTypes.func,
  label: PropTypes.string,
  save: PropTypes.string,
  period: PropTypes.string,
  price: PropTypes.string,
  unit: PropTypes.string,
  subscription: PropTypes.string,
  cta: PropTypes.string,
  note: PropTypes.string,
  className: PropTypes.string
};

export default VHCardPricing;