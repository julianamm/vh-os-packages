import React from "react";
import PropTypes from "prop-types";
import VHCardBase from "../Base";
import { Row } from "../../../Grid";
import * as S from "./styles";
import VHHeader from "../../../Typography/Headers";
import VHImg from "../../Img";
import CompanyIcon from '../../../assets/svg/icons/icon_business.svg/index.js';
import PositionIcon from '../../../assets/svg/icons/icon_skills.svg/index.js';
import CityIcon from '../../../assets/svg/icons/icon_passport.svg/index.js';
import CommentsIcon from '../../../assets/svg/icons/icon_chat_outline.svg/index.js';
import TimeIconRed from '../../../assets/svg/icons/icon_time_red.svg/index.js';
import TimeIconGreen from '../../../assets/svg/icons/icon_time_green.svg/index.js';
import FavoriteIcon from '../../../assets/svg/icons/icon_star_fill.svg/index.js';

const VHCardVisaProcess = props => {
  return (
    <VHCardBase
      candidate={props.candidate}
      onDragEnter={props.onDragEnter}
      id={props.id}
      onDragLeave={props.onDragLeave}
      onDragStart={props.onDragStart}
      favorite={props.favorite}
      draggable={props.draggable}
      onEvent={props.onEvent}
      userId={props.userId}>
      {props.invoiced && <S.Tag>Invoiced</S.Tag>}
      <Row row>
        <S.PersonalInfo>
          <Row row alignItemsCenter>
            <S.AvatarWrapper>
              <S.Avatar src={props.avatar}></S.Avatar>
            </S.AvatarWrapper>
            <S.Name>{props.name}</S.Name>
          </Row>
          <Row row alignItemsCenter>
            <S.IconWrapper>
              <VHImg source={CompanyIcon} title="city" xs />
            </S.IconWrapper>
            <S.Info>{props.companyName}</S.Info>
          </Row>
          <Row row alignItemsCenter>
            <S.IconWrapper>
              <VHImg source={PositionIcon} title="position" xs />
            </S.IconWrapper>
            <S.Info>{props.positionName}</S.Info>
          </Row>
          <Row row alignItemsCenter>
            <S.IconWrapper>
              <VHImg source={CityIcon} title="time" xs />
            </S.IconWrapper>
            <S.Info>{props.cityName}</S.Info>
          </Row>
        </S.PersonalInfo>
        {/* <S.MenuCircle onClick={() => {
          props.onEvent({
            type: "OnClick",
            origin: "VHVisaProcess",
            target: "Visa Process Menu"
          })
        }}>
          <div />
          <div />
          <div />
        </S.MenuCircle> */}
      </Row>
      <Row>
        <S.Footer>
          <Row row>
            <Row row alignItemsCenter>
              <S.TimeWrapper>
                <VHImg source={props.time <= props.avgTime ? `${TimeIconGreen}` : `${TimeIconRed}`} title="time" xs />
              </S.TimeWrapper>
              <S.InfoTime avgTime={props.time <= props.avgTime}>{`${props.time} days ago`}</S.InfoTime>
            </Row>
          </Row>
          <Row row alignItemsCenter>
            <S.FavoriteWrapper>
              {props.favorite && <VHImg source={FavoriteIcon} title="comments" xs />}
            </S.FavoriteWrapper>
            <S.Info>{props.comments}</S.Info>
            <S.CommentsWrapper>
              <VHImg source={CommentsIcon} title="comments" xs />
            </S.CommentsWrapper>
          </Row>
        </S.Footer>
      </Row>
    </VHCardBase>
  );
};

VHCardVisaProcess.defaultProps = {
  className: ""
};

VHCardVisaProcess.propTypes = {};

export default VHCardVisaProcess;
