import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import VHIcon from '../../Components/Icon/index';
import * as S from './styles';


const VHLinkImage = props => {

  return (
    <Row row width={500}>
        <S.A     
          reverse={props.reverse}
          cursor={props.cursor}
          xs={props.xsLabel}
          sm={props.smLabel}
          lg={props.lgLabel}
          onClick={() => {
            props.onEvent({
              type: "OnClick",
              origin: "VHLinkImage",
              props: {
                data: props.data
              }
            })
          }}
          className={`vh-link-image-component ${props.className ? props.className : ''}`}
          color={props.colorLabel}
          noUnderscore={props.noUnderscore}
          href={props.to}
          label={props.label}
        > 
          {props.label}
          <S.IconWrapper>
            <VHIcon 
              icon={props.icon}
              xs={props.xsIcon}
              sm={props.smIcon}
              md={props.mdIcon}
              md={props.mdIcon}
              lg={props.lgIcon}
              color={props.colorIcon}
            />
          </S.IconWrapper>
        </S.A>
      </Row>
  )
}

VHLinkImage.defaultProps = {
  xsLabel: false,
  smLabel: true,
  lgLabel: false,
  reverse: false,
  noUnderscore: false,
}

VHLinkImage.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reverse: PropTypes.bool,
  noUnderscore: PropTypes.bool,
  round: PropTypes.bool,
  smLabel: PropTypes.bool,
  xsLabel: PropTypes.bool,
  lgLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  colorLabel: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  xsIcon: PropTypes.bool,          
  smIcon: PropTypes.bool, 
  mdIcon: PropTypes.bool,      
  lgIcon: PropTypes.bool,            
  colorIcon: PropTypes.string,         
}

export default VHLinkImage;