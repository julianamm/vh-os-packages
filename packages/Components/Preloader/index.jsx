import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import VHLoading from '../../../assets/icons/vanhack-loading.svg/index.jsx'

const VHPreloader = props => {
  if (props.type === "bubble") {
    return (<S.PreloaderBubble size={props.size}>
      <div />
      <div />
      <div />
    </S.PreloaderBubble>)
  }
  if (props.type === "fullPage") {
    return (
    <S.Container>
      <S.ImageSection>
        <S.Image image={VHLoading}/>
      </S.ImageSection>
      <S.PreloaderSection>
        <S.PreloaderBubble size={props.size}>
          <div />
          <div />
          <div />
        </S.PreloaderBubble>
      </S.PreloaderSection>
    </S.Container>
)
  }
  return (
    <S.PreloaderCircle size={props.size}>
      <div />
    </S.PreloaderCircle>
  );
};

VHPreloader.defaultProps = {
  content: ''
};

VHPreloader.propTypes = {
  size: PropTypes.string
};

export default VHPreloader;
