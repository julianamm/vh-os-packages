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
import VHPreloader from '../Preloader/index'
import VHImg from '../Img/index'

import CompanyIcon from '../../../assets/icons/icon_business.svg'
import PositionIcon from '../../../assets/icons/icon_skills.svg'
import CityIcon from '../../../assets/icons/icon_passport.svg'
import CommentsIcon from '../../../assets/icons/icon_chat-outline.svg'
import TimeIconRed from '../../../assets/icons/icon_time_red.svg'
import TimeIconGreen from '../../../assets/icons/icon_time_green.svg'
import FavoriteIcon from '../../../assets/icons/icon_star_fill.svg'

const VHModalVisaPipeline = props => {

  let projectedDate = ''
  let showDate = false

  if(props.projectedStartDate != null && typeof props.projectedStartDate != undefined){
    showDate = true
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

    let date = new Date(props.projectedStartDate)

    projectedDate = `${monthNames[date.getMonth()]}, ${date.getDate()}`
  }

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
                image={props.user.avatar}
                size={"lg"}
                showCursor
              />
            </Row>
            <VHTitleDescription
              title={props.user.name}
              description={props.user.email}
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
                <Row marginBottom5 row alignItemsCenter>
                  <S.IconWrapper>
                    <VHImg source={CompanyIcon} title="company" xs />
                  </S.IconWrapper>
                  <S.Info>{props.job.companyName}</S.Info>
                  <S.IconWrapper>
                    <VHImg source={PositionIcon} title="position" xs />
                  </S.IconWrapper>
                  <S.Info>{props.job.position}</S.Info>
                </Row>
                <Row marginBottom5 row alignItemsCenter>
                  <S.IconWrapper>
                    <VHImg source={CityIcon} title="city" xs />
                  </S.IconWrapper>
                  <S.Info>{props.job.location}</S.Info>
                  <S.IconWrapper>
                    <VHImg source={PositionIcon} title="city" xs />
                  </S.IconWrapper>
                  <S.Info>{props.salary}</S.Info>
                </Row>
                <Row marginBottom5>
                  <VHTextarea
                    description={props.description}
                    onEvent={props.onEvent}
                  />
                </Row>
              </S.Wrapper>
              <Row marginBottom5>
                {props.assignedSession.loading ? <VHPreloader size='sm' /> :
                  <VHAssign items={props.assign.items} onEvent={props.onEvent} />
                }
              </Row>
            </Row>
            <Row row>
              <S.Wrapper>
                <Row>
                  {props.commentsSession.loading ? <VHPreloader size='sm' /> :
                    <VHComments comments={props.comments} onEvent={props.onEvent}/>
                  }
                </Row>
              </S.Wrapper>
              <Row margin>
                {props.activitiesSession.loading ? <VHPreloader size='sm' /> :
                  <VHTimeLine
                    items={props.timeLine.items}
                    totalDays={props.timeLine.totalDays}
                    onEvent={props.onEvent}
                  />
                }{showDate &&
                <S.InfoDate>{`Projected Start Date: `}<b>{projectedDate}</b></S.InfoDate>
                }
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
