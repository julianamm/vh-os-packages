import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const VHAvatar = props => {
  return (
    <S.Avatar
      center={props.center}
      image={props.image}
      size={props.size}
      showCursor={props.showCursor}
      onClick={event => {
        if (props.onEvent) {
          props.onEvent({
            data: props.data,
            type: 'onClick',
            target: 'VHAvatar'
          })
        };
      }}
    >
      {props.label}
    </S.Avatar>
  );
};

VHAvatar.defaultProps = {
  content: ''
};

VHAvatar.propTypes = {
  image: PropTypes.string,
  center: PropTypes.bool,
  showCursor: PropTypes.bool,
  size: PropTypes.string
};

export default VHAvatar;

