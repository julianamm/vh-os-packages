import React from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"
import VHInput from '../Simple'
import VHIcon from '../../Icon'
import GitHubIcon from '../../../../assets/icons/icon-github.svg'
import LinkedInIcon from '../../../../assets/icons/icon-likedin-login.svg'
import WebSiteIcon from '../../../../assets/icons/icon-globe.svg'

const VHInputIcon = props => {
  const checkIcon = () => {
    switch (props.icon) {
      case 'github':
        return  GitHubIcon   
      case 'world':
        return  WebSiteIcon  
      case 'linkedin':
        return  LinkedInIcon  
      default:
        return WebSiteIcon;
    }
  }

  const Icon = checkIcon()
  
  return (
    <S.Wrapper className={`vh-icon-input ${props.className ? props.className : ''}`}>
      <VHIcon
        className="vh-icon-with-input-icon"
        source={Icon}
        title={props.icon}
        sm
      />
      <VHInput placeholder={props.placeholder} onEvent={props.onEvent} noBorder/>
    </S.Wrapper>
  )
}

VHInputIcon.defaultProps = {
  iconColor: "black-100",
  textColor: "black-100",
  textVariant: "platform1",
  onEvent: null,
  data: null,
  placeholder: "",
  value: "",
  icon: WebSiteIcon,
  className: '',
}

VHInputIcon.propTypes = {
  iconColor:  PropTypes.string,
  textColor:  PropTypes.string,
  textVariant: PropTypes.string,
  onEvent: PropTypes.func.isRequired,
  data: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
}

export default VHInputIcon
