import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import * as S from './styles';

let size = {
  w: 18,
  h: 18
}

const VHLinkImage = props => {

  switch (true) {
    default:
    case props.xsImg:
      size = {
        w: 18,
        h: 18
      }
      break
    case props.smImg:
      size = {
        w: 24,
        h: 24
      }
      break
    case props.mdImg:
      size = {
        w: 36,
        h: 36
      }
      break
    case props.lgImg:
      size = {
        w: 48,
        h: 48
      }
      break
  }

  return (
    <Row row>
      <S.A     
        cursor={props.cursor}
        xs={props.xsLabel}
        sm={props.smLabel}
        lg={props.lgLabel}
        onClick={e => {
          e.preventDefault()
          props.onClick()
        }}
        className={`vh-link-image-component ${props.className ? props.className : ''}`}
        color={props.color}
        noUnderscore={props.noUnderscore}
        to={props.to}
        label={props.label}
      > 
        {props.label}
        <S.ImgWrapper>
          <img
            src={props.source}
            alt={props.title}
            title={props.title}
            width={size.w}
            height={size.h}
            className={`vh-link-image-component ${props.className ? props.className : ''}`}
          />
        </S.ImgWrapper>
      </S.A>
    </Row>
  )
}


VHLinkImage.defaultProps = {
  xsLabel: false,
  smLabel: true,
  lgLabel: false,
  noUnderscore: false,
}

VHLinkImage.propTypes = {
  reverse: PropTypes.bool,
  smLabel: PropTypes.bool,
  xsLabel: PropTypes.bool,
  lgLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}


export default VHLinkImage;
