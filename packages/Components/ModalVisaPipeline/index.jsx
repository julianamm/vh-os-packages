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

const VHModalVisaPipeline = props => {
  return (
    <Row
      className={`vh-modal-visa-pipeline ${
        props.className ? props.className : ""
      }`}
    >
      <VHModal
        width="70"
        open={true}
        header={
          <Row row>
              <VHAvatar
                image={
                  "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
                }
                size={"lg"}
                showCursor
              />
               <VHTitleDescription 
                  title="Manuel Barros Reyes"
                  description="manuca@gmail.com"
                  titleVariant="h4"
                  descriptionVariant="bodyweb"
                  data={{}}
                  onEvent={(e) => console.log(e)}
                />
            </Row>
        }
        onEvent={props.onEvent}
        content={
          <Row>
            <div></div>
            <div></div>
            <Row row justifySpaceAround>
              <div>
                <VHComments comments={props.comments} />
              </div>
              <div>
                <VHTimeLine
                  items={props.timeLine.items}
                  totalDays={props.timeLine.totalDays}
                  onEvent={props.onEvent}
                />
                <S.InfoDate>Projected Start Date: Apr, 19</S.InfoDate>
              </div>
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
