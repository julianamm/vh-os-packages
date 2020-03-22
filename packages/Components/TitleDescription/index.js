import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import VHText from '../Text'

import { TitleDescriptionSkeleton } from 'react-preload-skeleton'

const VHTitleDescription = props => {
  if (props.preLoading) {
    return <TitleDescriptionSkeleton />
  }

  return (
    <S.Wrapper contents={props.contents}
    pointer={props.pointer}
      inline={props.inline}
      className={`vh-title-description ${props.className ? props.className : ''}`}
      onClick={() => {
        props.setNewExperience ? props.setNewExperience() : ''
        props.setCurrentItem ? props.setCurrentItem() : ''
        props.onOpen ? props.onOpen() : ''
      }}>
      <VHText
        color={props.titleColor}
        variant={props.titleVariant}
        text={props.title}
        onEvent={props.onEvent}
        data={props.data}
      />
      <S.Display inline={props.inline}>
        <VHText
          color={props.descriptionColor}
          variant={props.descriptionVariant}
          text={props.description}
          onEvent={props.onEvent}
          data={props.data}
        />
      </S.Display>
    </S.Wrapper>
  )
}

VHTitleDescription.defaultProps = {
  titleColor: "gray-100",
  descriptionColor: "gray-90",
  titleVariant: "subtitle3",
  descriptionVariant: "platform1",
  onEvent: "",
  data: "",
  inline: false,
  title: "",
  description: "",
  className: "vh-title-description",
}

VHTitleDescription.propTypes = {
  className: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  titleVariant: PropTypes.string,
  descriptionVariant: PropTypes.string,
  onEvent: PropTypes.func,
  data: PropTypes.object,
  inline: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default VHTitleDescription
