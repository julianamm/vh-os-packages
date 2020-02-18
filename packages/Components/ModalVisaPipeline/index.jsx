import React from "react";
import PropTypes from "prop-types";
import VHAvatar from "../Avatar";
import VHText from "../Text";
import VHTitleDescription from "../TitleDescription";
import * as S from "./styles";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHComments from "../Comments";
import VHTimeLine from "../TimeLine";
import VHAssign from "../Assign";
import VHTextarea from "../Textarea";
import VHIconText from "../IconText";

const VHModalVisaPipeline = props => {
  return (
    <Row
      className={`vh-modal-visa-pipeline ${
        props.className ? props.className : ""
      }`}
    >
      <VHModal
        width="70"
        minWidth="660"
        open={true}
        header={
          <Row row>
            <Row autoWidth paddingRight8>
              <VHAvatar
                image={
                  "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
                }
                size={"lg"}
                showCursor
              />
            </Row>
            <VHTitleDescription
              title="Manuel Barros Reyes"
              description="manuca@gmail.com"
              titleVariant="h4"
              titleColor="gray-90"
              descriptionColor="gray-80"
              descriptionVariant="platform"
              onEvent={props.onEvent}
            />
          </Row>
        }
        onEvent={props.onEvent}
        content={
          <Row>
            <Row row>
              <S.Wrapper>
                <Row marginBottom5>
                  <VHIconText
                    className="vh-icon-text"
                    icon="bullet"
                    iconColor="black-50"
                    onEvent={props.onEvent}
                    text="Real Estate Wire"
                    textColor="gray-80"
                    variant="platform"
                  />
                </Row>
                <Row marginBottom5>
                  <VHTextarea
                    description={props.description}
                    onEvent={props.onEvent}
                  />
                </Row>
              </S.Wrapper>
              <Row marginBottom5>
                <VHAssign items={props.assign.items} onEvent={props.onEvent} />
              </Row>
            </Row>
            <Row row>
              <S.Wrapper>
                <Row>
                  <VHComments comments={props.comments} />
                </Row>
              </S.Wrapper>
              <Row margin>
                <VHTimeLine
                  items={props.timeLine.items}
                  totalDays={props.timeLine.totalDays}
                  onEvent={props.onEvent}
                />
                <S.InfoDate>Projected Start Date: Apr, 19</S.InfoDate>
              </Row>
            </Row>
          </Row>
        }
      />
    </Row>
  );
};

VHModalVisaPipeline.defaultProps = {
  onEvent: null,
  className: ""
};

VHModalVisaPipeline.propTypes = {
  onEvent: PropTypes.func,
  className: PropTypes.stringc
};

export default VHModalVisaPipeline;
