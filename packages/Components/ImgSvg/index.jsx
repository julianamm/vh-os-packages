import React from 'react';
import PropTypes from 'prop-types';
import BubbleImg from '../../assets/svg/background/img_bubble.svg/index.js';
import MeetingImg from '../../assets/svg/background/img_meeting.svg/index.js';
import InterviewImg from '../../assets/svg/background/img_premium_interview.svg/index.js';
import ProfileImg from '../../assets/svg/background/img_premium_profile.svg/index.js';
import SlackImg from '../../assets/svg/background/img_premium_slack.svg/index.js';
import WebinarsImg from '../../assets/svg/background/img_premium_webinar.svg/index.js';

const VHImgSvg = props => {

  switch (props.imgSvg) {
    case 'bubble':
      return <BubbleImg className={`vh-img-svg ${props.className ? props.className : ''}`} />
    case "meeting":
      return <MeetingImg className={`vh-img-svg ${props.className ? props.className : ''}`} />
    case "interview":
      return <InterviewImg className={`vh-img-svg ${props.className ? props.className : ''}`} />
    case "profile":
      return <ProfileImg className={`vh-img-svg ${props.className ? props.className : ''}`} />
    case "slack":
      return <SlackImg className={`vh-img-svg ${props.className ? props.className : ''}`} />
    case "webinar":
      return <WebinarsImg className={`vh-img-svg ${props.className ? props.className : ''}`} />
    default:
      return <span />
  }
}

VHImgSvg.defaultProps = {
  className: '',
}
export const imgSvgPropTypes = {
    imgSvg: PropTypes.string,
}

VHImgSvg.propTypes = imgSvgPropTypes

export default VHImgSvg
